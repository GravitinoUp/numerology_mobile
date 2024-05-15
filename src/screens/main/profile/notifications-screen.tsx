import { useState } from 'react'
import { ScrollView, VStack } from '@gluestack-ui/themed'
import { useTranslation } from 'react-i18next'
import TopBar from '@/components/top-bar/top-bar'
import Scaffold from '@/components/ui/scaffold'
import AppSwitch from '@/components/ui/switch'
import { DefaultStackScreenProps } from '@/types/interface'

export default function NotificationsScreen({
    navigation,
}: DefaultStackScreenProps) {
    const { t } = useTranslation()

    const [notifications, setNotifications] = useState(true)

    return (
        <Scaffold>
            <TopBar
                title={t('settings.label.notifications')}
                navigation={navigation}
            />
            <ScrollView>
                <VStack p="$4" gap="$4">
                    <AppSwitch
                        label="Уведомления 1"
                        value={notifications}
                        onValueChange={setNotifications}
                    />
                    <AppSwitch label="Уведомления 2" />
                    <AppSwitch label="Уведомления 3" />
                </VStack>
            </ScrollView>
        </Scaffold>
    )
}
