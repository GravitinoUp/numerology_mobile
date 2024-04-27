import { useEffect, useState } from 'react'
import { Center, HStack, Text, View } from '@gluestack-ui/themed'
import { CommonActions } from '@react-navigation/native'
import i18next from 'i18next'
import { Eye, EyeOff } from 'lucide-react-native'
import { useTranslation } from 'react-i18next'
import DatePicker from 'react-native-date-picker'
import { z } from 'zod'
import { Logo } from '@/assets/icons/logo'
import { CustomForm, useForm } from '@/components/form/form'
import TopBar from '@/components/top-bar/top-bar'
import AppButton from '@/components/ui/button'
import { FormField, FormItem, FormMessage } from '@/components/ui/form'
import AppInput from '@/components/ui/input'
import Scaffold from '@/components/ui/scaffold'
import AppScrollView from '@/components/ui/scroll-view'
import AppSelect from '@/components/ui/select'
import { AppColors } from '@/constants/colors'
import { MAX_WIDTH, phoneCountries } from '@/constants/constants'
import { routes } from '@/constants/routes'
import { useAppDispatch } from '@/hooks/use-app-dispatch'
import { useAuthMutation } from '@/redux/api/auth'
import { useCreateUserMutation } from '@/redux/api/users'
import { setAccessToken, setRefreshToken } from '@/redux/reducers/authSlice'
import { DefaultStackScreenProps, ErrorInterface } from '@/types/interface'

const registerSchema = z
    .object({
        phone: z.string().min(1, i18next.t('error.phone.required')),
        password: z.string().min(1, i18next.t('error.required')),
        repeat_password: z.string().min(1, i18next.t('error.required')),
        birtday: z.date(),
    })
    .refine((data) => data.password === data.repeat_password, {
        message: i18next.t('error.password.mismatch'),
        path: ['repeat_password'],
    })

export default function RegisterScreen({
    navigation,
}: DefaultStackScreenProps) {
    const { t } = useTranslation()

    const [passwordHidden, setPasswordHidden] = useState(true)

    const form = useForm({
        schema: registerSchema,
        defaultValues: {
            phone: '',
            password: '',
            birtday: new Date(),
        },
    })

    const dispatch = useAppDispatch()
    const [
        authUser,
        {
            data: authData,
            error: authError,
            isSuccess: authSuccess,
            isLoading: authLoading,
        },
    ] = useAuthMutation()

    const [registerUser, { error, isSuccess, isLoading }] =
        useCreateUserMutation()

    const onSubmit = (registerData: z.infer<typeof registerSchema>) => {
        registerUser({
            birthday_day: registerData.birtday.getDate(),
            birthday_month: registerData.birtday.getMonth(),
            birthday_year: registerData.birtday.getFullYear(),
            phone: registerData.phone,
            password: registerData.password,
        })
    }

    useEffect(() => {
        if (isSuccess) {
            authUser({
                phone: form.getValues('phone'),
                password: form.getValues('password'),
            })
        }
    }, [isSuccess])

    useEffect(() => {
        if (authSuccess) {
            dispatch(setAccessToken(authData?.accessToken))
            dispatch(setRefreshToken(authData?.refreshToken))

            navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [{ name: routes.NAVIGATION }],
                })
            )
        }
    }, [authSuccess])

    useEffect(() => {
        if (error || authError) {
            const errorData = (error || authError) as ErrorInterface

            form.setError('repeat_password', {
                message: errorData.data?.text
                    ? errorData.data?.text
                    : t('error.default'),
            })
        }
    }, [error, authError])

    return (
        <Scaffold>
            <TopBar navigation={navigation} hardShadow={undefined} />
            <AppScrollView maxWidth={MAX_WIDTH}>
                <Center justifyContent="center" mb="$4">
                    <Logo />
                </Center>
                <Text
                    fontSize="$2xl"
                    fontWeight="$bold"
                    color={AppColors.primary}
                    textAlign="center"
                >
                    {t('register.title')}
                </Text>
                <Text mt="$2" my="$8" color={AppColors.text} textAlign="center">
                    {t('register.description')}
                </Text>
                <CustomForm form={form}>
                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem style={{ marginBottom: 16 }}>
                                <HStack gap="$4">
                                    <AppSelect
                                        style={{ width: 90 }}
                                        selectedValue={phoneCountries[0].value}
                                        onValueChange={() => {}}
                                        items={phoneCountries}
                                    />
                                    <AppInput
                                        style={{ flex: 1 }}
                                        value={field.value}
                                        onChangeText={field.onChange}
                                        placeholder={t('user.phone')}
                                        required
                                    />
                                </HStack>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem style={{ marginBottom: 16 }}>
                                <AppInput
                                    value={field.value}
                                    onChangeText={field.onChange}
                                    placeholder={t('user.password')}
                                    secureTextEntry={passwordHidden}
                                    trailingIcon={
                                        passwordHidden ? (
                                            <EyeOff
                                                size={18}
                                                color={AppColors.text}
                                            />
                                        ) : (
                                            <Eye
                                                size={18}
                                                color={AppColors.text}
                                            />
                                        )
                                    }
                                    onTrailingIconPress={() =>
                                        setPasswordHidden(!passwordHidden)
                                    }
                                    required
                                />
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="repeat_password"
                        render={({ field }) => (
                            <FormItem style={{ marginBottom: 16 }}>
                                <AppInput
                                    value={field.value}
                                    onChangeText={field.onChange}
                                    placeholder={t('user.repeat.password')}
                                    secureTextEntry={passwordHidden}
                                    trailingIcon={
                                        passwordHidden ? (
                                            <EyeOff
                                                size={18}
                                                color={AppColors.text}
                                            />
                                        ) : (
                                            <Eye
                                                size={18}
                                                color={AppColors.text}
                                            />
                                        )
                                    }
                                    onTrailingIconPress={() =>
                                        setPasswordHidden(!passwordHidden)
                                    }
                                    required
                                />
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="birtday"
                        render={({ field }) => (
                            <FormItem>
                                <Text
                                    textAlign="center"
                                    mb="$1"
                                    color={AppColors.hint}
                                >
                                    {t('user.birthday')}
                                </Text>
                                <View
                                    borderRadius="$lg"
                                    borderColor={AppColors.border}
                                    borderWidth="$1"
                                    pl="$3"
                                >
                                    <DatePicker
                                        mode="date"
                                        date={field.value}
                                        onConfirm={field.onChange}
                                    />
                                </View>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <AppButton
                        mt="$8"
                        onPress={form.handleSubmit(onSubmit)}
                        text={t('register.create.account')}
                        isLoading={isLoading || authLoading}
                    />
                </CustomForm>
            </AppScrollView>
        </Scaffold>
    )
}
