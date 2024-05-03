import { useEffect, useState } from 'react'
import { Center, HStack, Text } from '@gluestack-ui/themed'
import i18next from 'i18next'
import { Eye, EyeOff } from 'lucide-react-native'
import { useTranslation } from 'react-i18next'
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
import { useCheckUserExistsMutation } from '@/redux/api/users'
import { DefaultStackScreenProps, ErrorInterface } from '@/types/interface'

const registerSchema = z
    .object({
        phone: z.string().min(1, i18next.t('error.phone.required')),
        password: z.string().min(1, i18next.t('error.required')),
        repeat_password: z.string().min(1, i18next.t('error.required')),
    })
    .refine((data) => data.password === data.repeat_password, {
        message: i18next.t('error.password.mismatch'),
        path: ['repeat_password'],
    })

export default function FirstRegisterScreen({
    navigation,
}: DefaultStackScreenProps) {
    const { t } = useTranslation()

    const [selectedCountry, setSelectedCountry] = useState(
        phoneCountries[0].value
    )

    const [passwordHidden, setPasswordHidden] = useState(true)

    const form = useForm({
        schema: registerSchema,
        defaultValues: {
            phone: '',
            password: '',
        },
    })

    const [
        checkUser,
        {
            data: checkData,
            error: checkError,
            isSuccess: checkSuccess,
            isLoading: checkLoading,
        },
    ] = useCheckUserExistsMutation()

    const onSubmit = (registerData: z.infer<typeof registerSchema>) => {
        checkUser({ phone: registerData.phone })
    }

    useEffect(() => {
        if (checkSuccess) {
            if (checkData.status === false) {
                navigation.navigate(routes.USER_REGISTER, {
                    registerData: {
                        phone: `${selectedCountry}${form.getValues('phone')}`,
                        password: form.getValues('password'),
                    },
                })
            } else {
                form.setError('repeat_password', {
                    message: t('error.user.exists'),
                })
            }
        }
    }, [checkSuccess])

    useEffect(() => {
        if (checkError) {
            const errorData = checkError as ErrorInterface

            form.setError('repeat_password', {
                message: errorData.data?.message
                    ? errorData.data?.message
                    : t('error.default'),
            })
        }
    }, [checkError])

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
                                        selectedValue={selectedCountry}
                                        onValueChange={setSelectedCountry}
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
                    <AppButton
                        mt="$8"
                        onPress={form.handleSubmit(onSubmit)}
                        text={t('action.continue')}
                        isLoading={checkLoading}
                    />
                </CustomForm>
            </AppScrollView>
        </Scaffold>
    )
}
