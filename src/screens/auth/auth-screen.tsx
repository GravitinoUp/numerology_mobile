import { useEffect, useState } from 'react'
import { Center, HStack, Text } from '@gluestack-ui/themed'
import { CommonActions } from '@react-navigation/native'
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
import { MAX_WIDTH, phoneCountries } from '@/constants/constants'
import { routes } from '@/constants/routes'
import { AppColors } from '@/constants/theme'
import { useAppDispatch } from '@/hooks/use-app-dispatch'
import { useAuthMutation } from '@/redux/api/auth'
import { setAccessToken, setRefreshToken } from '@/redux/reducers/authSlice'
import { DefaultStackScreenProps, ErrorInterface } from '@/types/interface'

const authSchema = z.object({
    phone: z.string().min(1, i18next.t('error.phone.required')),
    password: z.string().min(1, i18next.t('error.required')),
})

export default function AuthScreen({ navigation }: DefaultStackScreenProps) {
    const { t } = useTranslation()

    const form = useForm({
        schema: authSchema,
        defaultValues: {
            phone: '',
            password: '',
        },
    })

    const dispatch = useAppDispatch()
    const [authUser, { data, error, isSuccess, isLoading }] = useAuthMutation()

    const [selectedCountry, setSelectedCountry] = useState(
        phoneCountries[0].value
    )

    const [passwordHidden, setPasswordHidden] = useState(true)

    const onSubmit = (authData: z.infer<typeof authSchema>) => {
        authUser({
            phone: `${selectedCountry}${authData.phone}`,
            password: authData.password,
        })
    }

    useEffect(() => {
        if (isSuccess) {
            dispatch(setAccessToken(data?.accessToken))
            dispatch(setRefreshToken(data?.refreshToken))

            navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [{ name: routes.NAVIGATION }],
                })
            )
        }
    }, [isSuccess])

    useEffect(() => {
        if (error) {
            const errorData = error as ErrorInterface
            form.setError('password', {
                message: errorData.data?.message
                    ? errorData.data?.message
                    : t('error.default'),
            })
        }
    }, [error])

    return (
        <Scaffold>
            <TopBar navigation={navigation} hardShadow={undefined} />
            <AppScrollView maxWidth={MAX_WIDTH}>
                <Center mb="$10">
                    <Logo />
                </Center>
                <Text
                    fontSize="$2xl"
                    fontWeight="$bold"
                    color={AppColors.primary}
                    textAlign="center"
                >
                    {t('auth.title')}
                </Text>
                <Text mt="$2" my="$8" color={AppColors.hint} textAlign="center">
                    {t('auth.description')}
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
                            <FormItem>
                                <AppInput
                                    value={field.value}
                                    onChangeText={field.onChange}
                                    placeholder={t('user.password')}
                                    autoCapitalize="none"
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
                        mt="$2"
                        textProps={{
                            color: AppColors.hint,
                            fontWeight: '$normal',
                            textAlign: 'right',
                        }}
                        bgColor={AppColors.transparent}
                        onPress={() => {}}
                        text={t('forgot.password')}
                    />
                    <AppButton
                        onPress={form.handleSubmit(onSubmit)}
                        text={t('action.continue')}
                        isLoading={isLoading}
                    />
                </CustomForm>
            </AppScrollView>
        </Scaffold>
    )
}
