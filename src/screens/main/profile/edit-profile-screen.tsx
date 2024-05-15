import { Center, Text, View } from '@gluestack-ui/themed'
import { CommonActions } from '@react-navigation/native'
import i18next from 'i18next'
import { useTranslation } from 'react-i18next'
import DatePicker from 'react-native-date-picker'
import { z } from 'zod'
import { CustomForm, useForm } from '@/components/form/form'
import StatusCard from '@/components/status-card/status-card'
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
import { DefaultStackScreenProps } from '@/types/interface'

const userSchema = z
    .object({
        last_name: z.string().min(1, i18next.t('error.required')),
        first_name: z.string().min(1, i18next.t('error.required')),
        patronymic: z.string(),
        no_patronymic: z.boolean(),
        password: z.string(),
        birthday: z.date(),
    })
    .refine((data) => data.patronymic.trim().length > 0 || data.no_patronymic, {
        path: ['patronymic'],
        message: i18next.t('error.required'),
    })

export default function EditProfileScreen({
    navigation,
}: DefaultStackScreenProps) {
    const { t } = useTranslation()

    const form = useForm({
        schema: userSchema,
        defaultValues: {
            last_name: '',
            first_name: '',
            patronymic: '',
            no_patronymic: false,
            password: '',
            birthday: new Date(),
        },
    })

    const noPatronymic = form.watch('no_patronymic')

    const onSubmit = (data: z.infer<typeof userSchema>) => {
        navigation.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [{ name: routes.PROFILE }],
            })
        )
    }

    return (
        <Scaffold>
            <TopBar
                title={t('settings.label.personal.data')}
                navigation={navigation}
            />
            <AppScrollView maxWidth={MAX_WIDTH}>
                <Center mb="$10">
                    <View
                        w="$20"
                        h="$20"
                        bgColor={AppColors.primary}
                        borderRadius="$full"
                    />
                    <View position="absolute" bottom={-12}>
                        <StatusCard pro />
                    </View>
                </Center>
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
                                        onConfirm={field.onChange}
                                    />
                                </View>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <AppButton
                        mt="$4"
                        onPress={form.handleSubmit(onSubmit)}
                        text={t('action.save')}
                        isLoading={false}
                    />
                </CustomForm>
            </AppScrollView>
        </Scaffold>
    )
}
