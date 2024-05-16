import { ScrollView, VStack } from '@gluestack-ui/themed'
import { useTranslation } from 'react-i18next'
import { z } from 'zod'
import { CustomForm, useForm } from '@/components/form/form'
import TopBar from '@/components/top-bar/top-bar'
import { FormField, FormItem } from '@/components/ui/form'
import Scaffold from '@/components/ui/scaffold'
import AppSwitch from '@/components/ui/switch'
import { DefaultStackScreenProps } from '@/types/interface'

const notificationsSchema = z.object({
    n1: z.boolean(),
    n2: z.boolean(),
    n3: z.boolean(),
    n4: z.boolean(),
    n5: z.boolean(),
})

export default function ManageNotificationsScreen({
    navigation,
}: DefaultStackScreenProps) {
    const { t } = useTranslation()

    const form = useForm({
        schema: notificationsSchema,
        defaultValues: {
            n1: true,
            n2: true,
            n3: false,
            n4: false,
            n5: true,
        },
    })

    return (
        <Scaffold>
            <TopBar
                title={t('settings.label.notifications')}
                navigation={navigation}
            />
            <ScrollView>
                <CustomForm form={form}>
                    <VStack p="$4" gap="$5">
                        <FormField
                            control={form.control}
                            name="n1"
                            render={({ field }) => (
                                <FormItem>
                                    <AppSwitch
                                        label="Новости, специальные предложения"
                                        description="Получайте уведомления об обновлениях и специальных предложениях"
                                        value={field.value}
                                        onValueChange={field.onChange}
                                    />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="n2"
                            render={({ field }) => (
                                <FormItem>
                                    <AppSwitch
                                        label="Системные уведомления"
                                        description="Получайте системные уведомления"
                                        value={field.value}
                                        onValueChange={field.onChange}
                                    />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="n3"
                            render={({ field }) => (
                                <FormItem>
                                    <AppSwitch
                                        label="Уведомления 3"
                                        description="Информация об уведомлениях номер 3"
                                        value={field.value}
                                        onValueChange={field.onChange}
                                    />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="n4"
                            render={({ field }) => (
                                <FormItem>
                                    <AppSwitch
                                        label="Уведомления 4"
                                        description="Информация об уведомлениях номер 4"
                                        value={field.value}
                                        onValueChange={field.onChange}
                                    />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="n5"
                            render={({ field }) => (
                                <FormItem>
                                    <AppSwitch
                                        label="Уведомления 5"
                                        description="Информация об уведомлениях номер 5"
                                        value={field.value}
                                        onValueChange={field.onChange}
                                    />
                                </FormItem>
                            )}
                        />
                    </VStack>
                </CustomForm>
            </ScrollView>
        </Scaffold>
    )
}
