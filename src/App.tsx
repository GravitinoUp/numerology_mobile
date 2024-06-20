import { useEffect, useState } from 'react'
import { config } from '@gluestack-ui/config'
import { GluestackUIProvider, StatusBar } from '@gluestack-ui/themed'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useTranslation } from 'react-i18next'
import { NativeModules, Platform } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'
import { routes } from './constants/routes'
import { storageKeys } from './constants/storage'
import { AppColors } from './constants/theme'
import { useAppDispatch } from './hooks/use-app-dispatch'
import { useRefreshTokenMutation } from './redux/api/auth'
import { setAccessToken } from './redux/reducers/authSlice'
import { store } from './redux/store'
import AuthNavScreen from './screens/auth/auth-nav-screen'
import AuthScreen from './screens/auth/auth-screen'
import CategoryScreen from './screens/main/dashboard/category-screen'
import BloodTypeScreen from './screens/main/dashboard/numbers/blood-type/blood-type-screen.tsx'
import ChartsScreen from './screens/main/dashboard/numbers/charts/charts-screen.tsx'
import ColorGraphScreen from './screens/main/dashboard/numbers/color-graph/color-graph-screen.tsx'
import CompatibilityScreen from './screens/main/dashboard/numbers/compatibility/compatibility-screen.tsx'
import DateNumbersScreen from './screens/main/dashboard/numbers/date-numbers-screen'
import FateCardsScreen from './screens/main/dashboard/numbers/fate-cards/fate-cards-screen'
import InputNumbersScreen from './screens/main/dashboard/numbers/input-numbers-screen'
import LuckyNumbersScreen from './screens/main/dashboard/numbers/lucky-numbers/lucky-numbers-screen'
import NumbersScreen from './screens/main/dashboard/numbers/numbers-screen'
import PlaceholderScreen from './screens/main/dashboard/numbers/placeholder-screen.tsx'
import TotemicAnimalsScreen from './screens/main/dashboard/numbers/totemic-animals/totemic-animals-screen.tsx'
import NavigationScreen from './screens/main/navigation-screen'
import NotificationScreen from './screens/main/notifications/notification-screen'
import EditProfileScreen from './screens/main/profile/edit-profile-screen'
import LanguageScreen from './screens/main/profile/language-screen'
import ManageNotificationsScreen from './screens/main/profile/manage-notifications-screen'
import SubscriptionsScreen from './screens/main/profile/subscriptions-screen'
import OnboardScreen from './screens/onboard/onboard-screen'
import FirstRegisterScreen from './screens/register/first-register-screen'
import UserRegisterScreen from './screens/register/user-register-screen'
import VerifyCodeScreen from './screens/register/verify-code-screen'
import SplashScreen from './screens/splash/splash-screen'
import { getJWTtokens } from './utils/helpers'

const Stack = createNativeStackNavigator()

export const AppWrapper = () => {
    const { i18n } = useTranslation()

    const [isLoading, setLoading] = useState<boolean>(true)
    const [initialScreen, setInitialScreen] = useState<string | null>(null)

    useEffect(() => {
        AsyncStorage.getItem(storageKeys.language).then((language) => {
            if (language) {
                i18n.changeLanguage(language)
            } else {
                const deviceLanguage: string =
                    Platform.OS === 'ios'
                        ? NativeModules.SettingsManager.settings.AppleLocale ||
                          NativeModules.SettingsManager.settings
                              .AppleLanguages[0]
                        : NativeModules.I18nManager.localeIdentifier

                const splittedLanguage = deviceLanguage.split('_')
                if (splittedLanguage.length > 0) {
                    i18n.changeLanguage(splittedLanguage[0])
                }
            }

            AsyncStorage.getItem(storageKeys.uuid).then((uuid) =>
                AsyncStorage.getItem(storageKeys.onboardDisabled).then(
                    (onboardDisabled) => {
                        if (onboardDisabled === 'true') {
                            if (uuid) {
                                setInitialScreen(routes.NAVIGATION)
                            } else {
                                setInitialScreen(routes.AUTH_NAV)
                            }
                        } else {
                            setInitialScreen(routes.ONBOARD)
                        }

                        setLoading(false)
                    }
                )
            )
        })
    }, [])

    return (
        !isLoading &&
        initialScreen !== null && (
            <SafeAreaProvider>
                <Provider store={store}>
                    <GluestackUIProvider config={config}>
                        <StatusBar
                            backgroundColor={AppColors.background}
                            barStyle="dark-content"
                        />
                        <App initial={initialScreen} />
                    </GluestackUIProvider>
                </Provider>
            </SafeAreaProvider>
        )
    )
}

function App({ initial }: { initial: string }) {
    const [isLoading, setLoading] = useState<boolean | null>(null)
    const [initialRoute, setInitialRoute] = useState<string>(initial)

    const dispatch = useAppDispatch()

    const [fetchRefresh, { data: newAccessToken, error, isSuccess }] =
        useRefreshTokenMutation()

    useEffect(() => {
        getJWTtokens().then(({ refreshToken }) => {
            if (refreshToken) {
                fetchRefresh({ refresh_token: `${refreshToken}` })
                setLoading(true)
            } else {
                setLoading(false)
            }
        })
    }, [])

    useEffect(() => {
        if (isSuccess) {
            dispatch(setAccessToken(newAccessToken))
            setInitialRoute(routes.NAVIGATION)
            setLoading(false)
        }
    }, [isSuccess])

    useEffect(() => {
        if (error) {
            console.log(error)
            setLoading(false)
        }
    }, [error])

    return isLoading === false ? (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                    animationTypeForReplace: 'push',
                    animation: 'fade',
                }}
                initialRouteName={initialRoute}
            >
                <Stack.Group>
                    <Stack.Screen
                        name={routes.ONBOARD}
                        component={OnboardScreen}
                    />
                    <Stack.Screen
                        name={routes.AUTH_NAV}
                        component={AuthNavScreen}
                    />
                    <Stack.Screen name={routes.AUTH} component={AuthScreen} />
                    <Stack.Group>
                        <Stack.Screen
                            name={routes.REGISTER}
                            component={FirstRegisterScreen}
                        />
                        <Stack.Screen
                            name={routes.USER_REGISTER}
                            component={UserRegisterScreen}
                        />
                        <Stack.Screen
                            name={routes.VERIFY_CODE}
                            component={VerifyCodeScreen}
                        />
                    </Stack.Group>
                </Stack.Group>
                <Stack.Group>
                    <Stack.Screen
                        name={routes.NAVIGATION}
                        component={NavigationScreen}
                    />
                    <Stack.Screen
                        name={routes.PLACEHOLDER}
                        component={PlaceholderScreen}
                    />
                    {/* NOTIFICATION */}
                    <Stack.Screen
                        name={routes.NOTIFICATION}
                        component={NotificationScreen}
                    />
                    <Stack.Group>
                        <Stack.Screen
                            name={routes.EDIT_PROFILE}
                            component={EditProfileScreen}
                        />
                        <Stack.Screen
                            name={routes.SUBSCRIPTIONS}
                            component={SubscriptionsScreen}
                        />
                        <Stack.Screen
                            name={routes.MANAGE_NOTIFICATIONS}
                            component={ManageNotificationsScreen}
                        />
                        <Stack.Screen
                            name={routes.LANGUAGE}
                            component={LanguageScreen}
                        />
                    </Stack.Group>
                    {/* DASHBOARD ROUTES */}
                    <Stack.Group>
                        <Stack.Screen
                            name={routes.CATEGORY}
                            component={CategoryScreen}
                        />
                        <Stack.Screen
                            name={routes.NUMBERS}
                            component={NumbersScreen}
                        />
                        <Stack.Screen
                            name={routes.DATE_NUMBERS}
                            component={DateNumbersScreen}
                        />
                        <Stack.Screen
                            name={routes.CHARTS}
                            component={ChartsScreen}
                        />
                        <Stack.Screen
                            name={routes.BLOOD_TYPE}
                            component={BloodTypeScreen}
                        />
                        <Stack.Screen
                            name={routes.COLOR_GRAPH}
                            component={ColorGraphScreen}
                        />
                        <Stack.Screen
                            name={routes.INPUT_NUMBERS}
                            component={InputNumbersScreen}
                        />
                        <Stack.Screen
                            name={routes.COMPATIBILITY}
                            component={CompatibilityScreen}
                        />
                        <Stack.Screen
                            name={routes.FATE_CARDS}
                            component={FateCardsScreen}
                        />
                        <Stack.Screen
                            name={routes.LUCKY_NUMBERS}
                            component={LuckyNumbersScreen}
                        />
                        <Stack.Screen
                            name={routes.TOTEMIC_ANIMALS}
                            component={TotemicAnimalsScreen}
                        />
                    </Stack.Group>
                </Stack.Group>
            </Stack.Navigator>
        </NavigationContainer>
    ) : (
        <SplashScreen />
    )
}
