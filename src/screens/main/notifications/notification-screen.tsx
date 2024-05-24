import { Fragment } from 'react'
import { ScrollView, Text } from '@gluestack-ui/themed'
import TopBar from '@/components/top-bar/top-bar'
import Scaffold from '@/components/ui/scaffold'
import { DefaultStackScreenProps } from '@/types/interface'
import { NotificationInterface } from '@/types/interface/notifications'

export default function NotificationScreen({
    navigation,
    route,
}: DefaultStackScreenProps) {
    const routeParams = route.params as NotificationInterface

    return (
        <Fragment>
            <Scaffold>
                <TopBar
                    title={routeParams.notification_name}
                    navigation={navigation}
                />
                <ScrollView p="$5">
                    <Text>{routeParams.notification_content}</Text>
                </ScrollView>
            </Scaffold>
        </Fragment>
    )
}
