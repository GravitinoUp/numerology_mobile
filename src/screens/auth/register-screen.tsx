import { Center, HStack, Text, View } from '@gluestack-ui/themed'
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

    const onSubmit = (data: z.infer<typeof registerSchema>) => {
        navigation.navigate('NavigationScreen')
    }

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
                    />
                </CustomForm>
            </AppScrollView>
        </Scaffold>
    )
}
