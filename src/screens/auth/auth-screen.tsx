import { useEffect } from 'react'
import { Center, HStack, Text } from '@gluestack-ui/themed'
import i18next from 'i18next'
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

    const onSubmit = (data: z.infer<typeof authSchema>) => {
        authUser({ phone: data.phone, password: data.password })
    }

    useEffect(() => {
        if (isSuccess) {
            dispatch(setAccessToken(data?.accessToken))
            dispatch(setRefreshToken(data?.refreshToken))

            navigation.navigate('NavigationScreen')
        }
    }, [isSuccess])

    useEffect(() => {
        if (error) {
            const errorData = error as ErrorInterface
            form.setError('password', {
                message: errorData.data?.text
                    ? errorData.data?.text
                    : t('error.default'),
            })
        }
    }, [error])

    return (
        <Scaffold>
            <TopBar navigation={navigation} hardShadow={undefined} />
            <AppScrollView maxWidth={MAX_WIDTH}>
                <Center mb="$4">
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
                            <FormItem>
                                <AppInput
                                    value={field.value}
                                    onChangeText={field.onChange}
                                    placeholder={t('user.password')}
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
