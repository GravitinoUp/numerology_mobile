import { useEffect } from 'react'
import { Center, Text, View } from '@gluestack-ui/themed'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { CommonActions } from '@react-navigation/native'
import i18next from 'i18next'
import { useTranslation } from 'react-i18next'
import { TouchableOpacity } from 'react-native'
import DatePicker from 'react-native-date-picker'
import DropShadow from 'react-native-drop-shadow'
import { z } from 'zod'
import ChevronLeft from '@/assets/icons/chevron-left'
import { Logo } from '@/assets/icons/logo'
import { CustomForm, useForm } from '@/components/form/form'
import AppButton from '@/components/ui/button'
import AppCheckbox from '@/components/ui/checkbox'
import { FormField, FormItem, FormMessage } from '@/components/ui/form'
import AppInput from '@/components/ui/input'
import Scaffold from '@/components/ui/scaffold'
import AppScrollView from '@/components/ui/scroll-view'
import TextButton from '@/components/ui/text-button'
import { ACTIVE_OPACITY, MAX_WIDTH } from '@/constants/constants'
import { routes } from '@/constants/routes'
import { storageKeys } from '@/constants/storage'
import { AppColors } from '@/constants/theme'
import { useAppDispatch } from '@/hooks/use-app-dispatch'
import { usePasswordlessAuthMutation } from '@/redux/api/auth'
import { useCreateUserMutation } from '@/redux/api/users'
import { setAccessToken, setRefreshToken } from '@/redux/reducers/authSlice'
import { DefaultStackScreenProps, ErrorInterface } from '@/types/interface'

const userSchema = z
    .object({
        step: z.number(),
        last_name: z.string().min(1, i18next.t('error.required')),
        first_name: z.string().min(1, i18next.t('error.required')),
        patronymic: z.string(),
        no_patronymic: z.boolean(),
        birthday: z.date().optional(),
    })
    .refine((data) => data.patronymic.trim().length > 0 || data.no_patronymic, {
        path: ['patronymic'],
        message: i18next.t('error.required'),
    })
    .superRefine((values, ctx) => {
        if (values.step === 1) {
            if (!values.birthday) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    path: ['birthday'],
                    fatal: true,
                    message: i18next.t('error.required'),
                })
            }
        }
    })

export default function AuthNavScreen({ navigation }: DefaultStackScreenProps) {
    const { t } = useTranslation()
    const dispatch = useAppDispatch()

    const form = useForm({
        schema: userSchema,
        defaultValues: {
            step: 0,
            last_name: '',
            first_name: '',
            patronymic: '',
            no_patronymic: false,
            birthday: new Date(),
        },
    })

    const noPatronymic = form.watch('no_patronymic')
    const step = form.watch('step')

    const [
        authUser,
        {
            data: authData,
            error: authError,
            isSuccess: authSuccess,
            isLoading: authLoading,
        },
    ] = usePasswordlessAuthMutation()

    const [
        registerUser,
        {
            data: createdUser,
            error: registerError,
            isSuccess: registerSuccess,
            isLoading: registerLoading,
        },
    ] = useCreateUserMutation()

    const onSubmit = (data: z.infer<typeof userSchema>) => {
        if (data.step === 0) {
            form.setValue('step', 1)
        } else {
            if (data.birthday) {
                registerUser({
                    last_name: data.last_name,
                    first_name: data.first_name,
                    patronymic: data.no_patronymic
                        ? undefined
                        : data.patronymic,
                    birthday_day: data.birthday.getDate(),
                    birthday_month: data.birthday.getMonth() + 1,
                    birthday_year: data.birthday.getFullYear(),
                })
            }
        }
    }

    const onBack = () => {
        if (step === 1) {
            form.setValue('step', 0)
        }
    }

    useEffect(() => {
        if (registerSuccess && createdUser.data) {
            if (createdUser.data) {
                authUser({
                    code: createdUser.data.user_uuid,
                })
            } else {
                form.setError('birthday', {
                    message: t('error.default'),
                })
            }
        }
    }, [registerSuccess])

    useEffect(() => {
        if (authSuccess) {
            dispatch(setAccessToken(authData?.accessToken))
            dispatch(setRefreshToken(authData?.refreshToken))

            AsyncStorage.setItem(
                storageKeys.uuid,
                `${createdUser?.data?.user_uuid}`
            ).then(() =>
                navigation.dispatch(
                    CommonActions.reset({
                        index: 0,
                        routes: [{ name: routes.NAVIGATION }],
                    })
                )
            )
        }
    }, [authSuccess])

    useEffect(() => {
        if (registerError || authError) {
            const errorData = (registerError || authError) as ErrorInterface

            form.setError('birthday', {
                message: errorData.data?.message
                    ? errorData.data?.message
                    : t('error.default'),
            })
        }
    }, [registerError || authError])

    return (
        <Scaffold>
            {step === 1 && (
                <DropShadow
                    style={{
                        position: 'absolute',
                        shadowColor: '#091219',
                        shadowOffset: {
                            width: 0,
                            height: 4,
                        },
                        shadowOpacity: 0.2,
                        shadowRadius: 10,
                        marginLeft: 16,
                        marginTop: 16,
                        zIndex: 10,
                    }}
                >
                    <TouchableOpacity
                        activeOpacity={ACTIVE_OPACITY}
                        onPress={onBack}
                    >
                        <View
                            w="$10"
                            h="$10"
                            bgColor={AppColors.background}
                            borderRadius="$full"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <ChevronLeft />
                        </View>
                    </TouchableOpacity>
                </DropShadow>
            )}
            <AppScrollView
                contentContainerStyle={{ justifyContent: 'flex-start' }}
                maxWidth={MAX_WIDTH}
            >
                <Center justifyContent="center" my="$16">
                    <Logo />
                </Center>
                <Text
                    fontSize="$2xl"
                    fontWeight="$bold"
                    color={AppColors.primary}
                    textAlign="center"
                >
                    {t('auth.hello.title')}
                </Text>
                <Text mt="$3" mb="$8" color={AppColors.hint} textAlign="center">
                    {t('auth.hello.description')}
                </Text>
                <CustomForm form={form}>
                    {step === 0 && (
                        <>
                            <FormField
                                control={form.control}
                                name="last_name"
                                render={({ field }) => (
                                    <FormItem style={{ marginBottom: 16 }}>
                                        <AppInput
                                            value={field.value}
                                            onChangeText={field.onChange}
                                            placeholder={t('user.first.name')}
                                            required
                                        />
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="first_name"
                                render={({ field }) => (
                                    <FormItem style={{ marginBottom: 16 }}>
                                        <AppInput
                                            value={field.value}
                                            onChangeText={field.onChange}
                                            placeholder={t('user.last.name')}
                                            required
                                        />
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            {!noPatronymic && (
                                <FormField
                                    control={form.control}
                                    name="patronymic"
                                    render={({ field }) => (
                                        <FormItem style={{ marginBottom: 16 }}>
                                            <AppInput
                                                value={field.value}
                                                onChangeText={field.onChange}
                                                placeholder={t(
                                                    'user.patronymic'
                                                )}
                                                required
                                            />
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            )}
                            <FormField
                                control={form.control}
                                name="no_patronymic"
                                render={({ field }) => (
                                    <AppCheckbox
                                        mb="$4"
                                        label={t('no.patronymic')}
                                        value=""
                                        isChecked={field.value}
                                        onChange={field.onChange}
                                    />
                                )}
                            />
                        </>
                    )}
                    {step === 1 && (
                        <FormField
                            control={form.control}
                            name="birthday"
                            render={({ field }) => (
                                <FormItem>
                                    <Text mb="$2">
                                        <Text color={AppColors.text}>
                                            {t('user.birthday')}
                                        </Text>
                                        <Text color={AppColors.error}> *</Text>
                                    </Text>
                                    <View
                                        borderRadius="$lg"
                                        borderColor={AppColors.border}
                                        borderWidth="$1"
                                        pl="$3"
                                    >
                                        <DatePicker
                                            mode="date"
                                            theme="light"
                                            date={
                                                field.value
                                                    ? field.value
                                                    : new Date()
                                            }
                                            onDateChange={field.onChange}
                                        />
                                    </View>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    )}
                    <AppButton
                        mt="$8"
                        onPress={form.handleSubmit(onSubmit)}
                        text={t('action.continue')}
                        isLoading={registerLoading || authLoading}
                    />
                </CustomForm>
                <TextButton
                    mt="$4"
                    textAlign="center"
                    color={AppColors.hint}
                    onPress={() => navigation.navigate(routes.AUTH)}
                    text={t('auth.with.password')}
                />
            </AppScrollView>
        </Scaffold>
    )
}
