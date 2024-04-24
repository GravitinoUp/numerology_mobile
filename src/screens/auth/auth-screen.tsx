import { Center, Text } from '@gluestack-ui/themed'
import i18next from 'i18next'
import { useTranslation } from 'react-i18next'
import { z } from 'zod'
import { Logo } from '@/assets/icons/logo'
import { CustomForm, useForm } from '@/components/form/form'
import AppButton from '@/components/ui/button'
import { FormField, FormItem, FormMessage } from '@/components/ui/form'
import AppInput from '@/components/ui/input'
import Scaffold from '@/components/ui/scaffold'
import AppScrollView from '@/components/ui/scroll-view'
import { AppColors } from '@/constants/colors'
import { MAX_WIDTH } from '@/constants/constants'

const authSchema = z.object({
    phone: z.string().min(1, i18next.t('error.required')),
    password: z.string().min(1, i18next.t('error.required')),
})

export default function AuthScreen({ navigation }: any) {
    const { t } = useTranslation()

    const form = useForm({
        schema: authSchema,
        defaultValues: {
            phone: '',
            password: '',
        },
    })

    const onSubmit = (data: z.infer<typeof authSchema>) => {
        navigation.navigate('NavigationScreen')
    }

    return (
        <Scaffold>
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
                <Text mt="$3" mb="$8" color={AppColors.hint} textAlign="center">
                    {t('auth.description')}
                </Text>
                <CustomForm form={form}>
                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem style={{ marginBottom: 16 }}>
                                <AppInput
                                    value={field.value}
                                    onChangeText={field.onChange}
                                    placeholder={t('user.phone')}
                                    required
                                />
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
                    />
                </CustomForm>
            </AppScrollView>
        </Scaffold>
    )
}
