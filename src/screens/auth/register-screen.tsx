import { useState } from 'react'
import { Center, Text } from '@gluestack-ui/themed'
import { useTranslation } from 'react-i18next'
import DatePicker from 'react-native-date-picker'
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
import { formatDate } from '@/utils/helpers'

const registerSchema = z.object({
    phone: z.string(),
    password: z.string(),
    repeat_password: z.string(),
    birtday: z.date(),
})

export default function RegisterScreen({ navigation }: any) {
    const { t } = useTranslation()

    const form = useForm({
        schema: registerSchema,
        defaultValues: {
            phone: '',
            password: '',
            birtday: new Date(),
        },
    })

    const [birthdayDatepickerOpen, setBirthdayDatepickerOpen] = useState(false)

    const onSubmit = (data: z.infer<typeof registerSchema>) => {
        navigation.navigate('NavigationScreen')
    }

    return (
        <Scaffold>
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
                <Text my="$8" color={AppColors.text} textAlign="center">
                    {t('register.description')}
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
                            <FormItem style={{ marginBottom: 16 }}>
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
                    <FormField
                        control={form.control}
                        name="repeat_password"
                        render={({ field }) => (
                            <FormItem style={{ marginBottom: 16 }}>
                                <AppInput
                                    value={field.value}
                                    onChangeText={field.onChange}
                                    placeholder={t('user.repeat.password')}
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
                                <DatePicker
                                    modal
                                    mode="date"
                                    open={birthdayDatepickerOpen}
                                    date={field.value}
                                    onConfirm={(newDate) => {
                                        setBirthdayDatepickerOpen(false)

                                        field.onChange(newDate)
                                    }}
                                    onCancel={() =>
                                        setBirthdayDatepickerOpen(false)
                                    }
                                />
                                <AppInput
                                    value={formatDate(field.value)}
                                    onChangeText={field.onChange}
                                    hint={t('user.birthday')}
                                    placeholder={t('placeholder.user.birthday')}
                                    required
                                    readOnly
                                    onTouchEnd={() =>
                                        setBirthdayDatepickerOpen(true)
                                    }
                                />
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <AppButton
                        mt="$8"
                        onPress={form.handleSubmit(onSubmit)}
                        text={t('action.continue')}
                    />
                </CustomForm>
            </AppScrollView>
        </Scaffold>
    )
}
