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
import { FormField, FormItem, FormMessage } from '@/components/ui/form'
import AppInput from '@/components/ui/input'
import Scaffold from '@/components/ui/scaffold'
import AppScrollView from '@/components/ui/scroll-view'
import { AppColors } from '@/constants/colors'
import { MAX_WIDTH } from '@/constants/constants'
import { routes } from '@/constants/routes'
import { useSendPhoneAuthCodeMutation } from '@/redux/api/auth'
import { DefaultStackScreenProps, ErrorInterface } from '@/types/interface'

const userSchema = z.object({
    name: z.string().min(1, i18next.t('error.required')),
    email: z.string().optional(),
    birthday: z.date(),
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
            name: '',
            email: '',
            birthday: new Date(),
        },
    })

    const [
        sendCode,
        { error: sendError, isSuccess: sendSuccess, isLoading: sendLoading },
    ] = useSendPhoneAuthCodeMutation()

    const onSubmit = () => {
        console.log(registerData)

        sendCode({ phone: registerData.phone })
    }

    useEffect(() => {
        if (sendSuccess) {
            const userBirthday = form.getValues('birthday')
            navigation.navigate(routes.VERIFY_CODE, {
                registerData: {
                    name: form.getValues('name'),
                    birthday_day: userBirthday.getDate(),
                    birthday_month: userBirthday.getMonth(),
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
                        name="name"
                        render={({ field }) => (
                            <FormItem style={{ marginBottom: 16 }}>
                                <AppInput
                                    value={field.value}
                                    onChangeText={field.onChange}
                                    placeholder={t('user.name')}
                                    required
                                />
                                <FormMessage />
                            </FormItem>
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
                        text={t('action.continue')}
                        isLoading={sendLoading}
                    />
                </CustomForm>
            </AppScrollView>
        </Scaffold>
    )
}
