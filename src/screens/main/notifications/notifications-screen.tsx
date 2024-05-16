import { Fragment } from 'react'
import { ScrollView } from '@gluestack-ui/themed'
import { useTranslation } from 'react-i18next'
import NotificationCard from './components/notification-card'
import TopBar from '@/components/top-bar/top-bar'
import Scaffold from '@/components/ui/scaffold'
import { routes } from '@/constants/routes'
import { useGetNotificationsQuery } from '@/redux/api/notifications'
import SplashScreen from '@/screens/splash/splash-screen'
import { DefaultStackScreenProps } from '@/types/interface'

export default function NotificationsScreen({
    navigation,
}: DefaultStackScreenProps) {
    const { t } = useTranslation()

    const {
        data: notifications = [],
        isFetching: notificationsFetching,
        isSuccess: notificationsSuccess,
        error: notificationsError,
        refetch: notificationsRefetch,
    } = useGetNotificationsQuery()

    const successLoad = !notificationsFetching && notificationsSuccess

    return (
        <Fragment>
            <Scaffold>
                <TopBar title={t('route.notifications')} />
                {successLoad ? (
                    <ScrollView p="$5" gap="$5">
                        {notifications.map((value) => (
                            <NotificationCard
                                key={value.notification_uuid}
                                title={value.notification_name}
                                onPress={() =>
                                    navigation.navigate(
                                        routes.NOTIFICATION,
                                        value
                                    )
                                }
                            />
                        ))}
                    </ScrollView>
                ) : (
                    <SplashScreen
                        error={notificationsError}
                        refetch={notificationsRefetch}
                    />
                )}
            </Scaffold>
        </Fragment>
    )
}
