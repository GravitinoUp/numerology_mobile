import { useEffect } from 'react'
import { Center, Text, View } from '@gluestack-ui/themed'
import i18next from 'i18next'
import { useTranslation } from 'react-i18next'
import DatePicker from 'react-native-date-picker'
import { z } from 'zod'
import { Logo } from '@/assets/icons/logo'
import { CustomForm, useForm } from '@/components/form/form'
import TopBar from '@/components/top-bar/top-bar'
import AppButton from '@/components/ui/button'
import AppCheckbox from '@/components/ui/checkbox'
import { FormField, FormItem, FormMessage } from '@/components/ui/form'
import AppInput from '@/components/ui/input'
import Scaffold from '@/components/ui/scaffold'
import AppScrollView from '@/components/ui/scroll-view'
import { MAX_WIDTH } from '@/constants/constants'
import { routes } from '@/constants/routes'
import { AppColors } from '@/constants/theme'
import { useSendPhoneAuthCodeMutation } from '@/redux/api/auth'
import { DefaultStackScreenProps, ErrorInterface } from '@/types/interface'

const userSchema = z
    .object({
        last_name: z.string().min(1, i18next.t('error.required')),
        first_name: z.string().min(1, i18next.t('error.required')),
        patronymic: z.string(),
        no_patronymic: z.boolean(),
        email: z.string().optional(),
        birthday: z.date(),
    })
    .refine((data) => data.patronymic.trim().length > 0 || data.no_patronymic, {
        path: ['patronymic'],
        message: i18next.t('error.required'),
    })

export default function UserRegisterScreen({
    navigation,
    route,
}: DefaultStackScreenProps) {
    const registerData = (
        route.params as { registerData: { phone: string; password: string } }
    ).registerData

    const { t } = useTranslation()

    const form = useForm({
        schema: userSchema,
        defaultValues: {
            last_name: '',
            first_name: '',
            patronymic: '',
            no_patronymic: false,
            email: '',
            birthday: new Date(),
        },
    })

    const [
        sendCode,
        { error: sendError, isSuccess: sendSuccess, isLoading: sendLoading },
    ] = useSendPhoneAuthCodeMutation()

    const onSubmit = () => {
        sendCode({ phone: registerData.phone })
    }

    const noPatronymic = form.watch('no_patronymic')

    useEffect(() => {
        if (sendSuccess) {
            const userBirthday = form.getValues('birthday')
            navigation.navigate(routes.VERIFY_CODE, {
                registerData: {
                    last_name: form.getValues('last_name'),
                    first_name: form.getValues('first_name'),
                    patronymic: form.getValues('patronymic'),
                    birthday_day: userBirthday.getDate(),
                    birthday_month: userBirthday.getMonth() + 1,
                    birthday_year: userBirthday.getFullYear(),
                    email: form.getValues('email'),
                    phone: registerData.phone,
                    password: registerData.password,
                    code: 0,
                },
            })
        }
    }, [sendSuccess])

    useEffect(() => {
        if (sendError) {
            const errorData = sendError as ErrorInterface

            form.setError('birthday', {
                message: errorData.data?.message
                    ? errorData.data?.message
                    : t('error.default'),
            })
        }
    }, [sendError])

    return (
        <Scaffold>
            <TopBar navigation={navigation} />
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
                    {t('register.user.data.description')}
                </Text>
                <CustomForm form={form}>
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
                                        placeholder={t('user.patronymic')}
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
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem style={{ marginBottom: 16 }}>
                                <AppInput
                                    value={field.value ? field.value : ''}
                                    onChangeText={field.onChange}
                                    placeholder={t('user.email')}
                                    required
                                />
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="birthday"
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
                                        theme="light"
                                        date={field.value}
                                        onDateChange={field.onChange}
                                    />
                                </View>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <AppButton
                        mt="$8"
                        onPress={form.handleSubmit(onSubmit)}
                        text={t('action.continue')}
                        isLoading={sendLoading}
                    />
                </CustomForm>
            </AppScrollView>
        </Scaffold>
    )
}
