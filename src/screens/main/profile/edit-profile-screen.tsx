import { useEffect } from 'react'
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
import { useAppDispatch } from '@/hooks/use-app-dispatch'
import { useAppToast } from '@/hooks/use-toast'
import { api } from '@/redux/api'
import { useUpdateUserMutation } from '@/redux/api/users'
import { DefaultStackScreenProps, ErrorInterface } from '@/types/interface'
import { UserInterface } from '@/types/interface/users'

const userSchema = z
    .object({
        last_name: z.string().min(1, i18next.t('error.required')),
        first_name: z.string().min(1, i18next.t('error.required')),
        patronymic: z.string(),
        no_patronymic: z.boolean(),
        password: z.string().optional(),
        birthday: z.date(),
    })
    .refine((data) => data.patronymic.trim().length > 0 || data.no_patronymic, {
        path: ['patronymic'],
        message: i18next.t('error.required'),
    })

export default function EditProfileScreen({
    navigation,
    route,
}: DefaultStackScreenProps) {
    const { t } = useTranslation()
    const { showSuccessToast } = useAppToast()

    const dispatch = useAppDispatch()

    const routeParams = route.params as UserInterface

    const form = useForm({
        schema: userSchema,
        defaultValues: {
            last_name: routeParams.person.last_name,
            first_name: routeParams.person.first_name,
            patronymic: routeParams.person.patronymic,
            no_patronymic: routeParams.person.patronymic === '',
            password: '',
            birthday: new Date(
                routeParams.person.birthday_year,
                routeParams.person.birthday_month - 1,
                routeParams.person.birthday_day
            ),
        },
    })

    const noPatronymic = form.watch('no_patronymic')

    const [
        updateUser,
        {
            error: updateError,
            isSuccess: updateSuccess,
            isLoading: updateLoading,
        },
    ] = useUpdateUserMutation()

    const onSubmit = (data: z.infer<typeof userSchema>) => {
        updateUser({
            last_name: data.last_name,
            first_name: data.first_name,
            patronymic: data.no_patronymic ? '' : data.patronymic,
            birthday_day: data.birthday.getDate(),
            birthday_month: data.birthday.getMonth() + 1,
            birthday_year: data.birthday.getFullYear(),
        })
    }

    useEffect(() => {
        if (updateSuccess) {
            showSuccessToast({ label: t('success.user.update') })
            dispatch(api.util.resetApiState())
            navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [{ name: routes.NAVIGATION }],
                })
            )
        }
    }, [updateSuccess])

    useEffect(() => {
        if (updateError) {
            const errorData = updateError as ErrorInterface

            form.setError('birthday', {
                message: errorData.data?.message
                    ? errorData.data?.message
                    : t('error.default'),
            })
        }
    }, [updateError])

    return (
        <Scaffold>
            <TopBar
                title={t('settings.label.personal.data')}
                navigation={navigation}
            />
            <AppScrollView
                contentContainerStyle={{ justifyContent: 'flex-start' }}
                maxWidth={MAX_WIDTH}
            >
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
                <View px="$4">
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
                            mt="$4"
                            onPress={form.handleSubmit(onSubmit)}
                            text={t('action.save')}
                            isLoading={updateLoading}
                        />
                    </CustomForm>
                </View>
            </AppScrollView>
        </Scaffold>
    )
}
