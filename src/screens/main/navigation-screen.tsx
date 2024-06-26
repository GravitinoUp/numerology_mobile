import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useTranslation } from 'react-i18next'
import DashboardScreen from './dashboard/dashboard-screen'
import NotificationsScreen from './notifications/notifications-screen'
import ProfileScreen from './profile/profile-screen'
import DashboardIcon from '@/assets/icons/dashboard'
import NotificationsIcon from '@/assets/icons/notifications'
import ProfileIcon from '@/assets/icons/profile'
import NavigationBar from '@/components/navigation-bar/navigation-bar'
import { useGetCurrentUserQuery } from '@/redux/api/users'

const Tab = createBottomTabNavigator()

export default function NavigationScreen() {
    const { t } = useTranslation()

    useGetCurrentUserQuery()

    return (
        <Tab.Navigator
            screenOptions={{ headerShown: false }}
            tabBar={(props) => <NavigationBar {...props} />}
        >
            <Tab.Screen
                name={t('route.dashboard')}
                component={DashboardScreen}
                options={() => ({
                    tabBarIcon: ({ color }) => <DashboardIcon color={color} />,
                })}
            />
            {/* <Tab.Screen
                name={t('route.union')}
                component={DashboardScreen}
                options={() => ({
                    tabBarIcon: ({ color }) => <UnionIcon color={color} />,
                })}
            />
            <Tab.Screen
                name={t('route.prediction')}
                component={DashboardScreen}
                options={() => ({
                    tabBarIcon: ({ color }) => <PredictionIcon color={color} />,
                })}
            /> */}
            <Tab.Screen
                name={t('route.notifications')}
                component={NotificationsScreen}
                options={() => ({
                    tabBarIcon: ({ color }) => (
                        <NotificationsIcon color={color} />
                    ),
                })}
            />
            <Tab.Screen
                name={t('route.profile')}
                component={ProfileScreen}
                options={() => ({
                    tabBarIcon: ({ color }) => <ProfileIcon color={color} />,
                })}
            />
        </Tab.Navigator>
    )
}
