import { useEffect, useState } from 'react'
import { config } from '@gluestack-ui/config'
import { GluestackUIProvider, StatusBar } from '@gluestack-ui/themed'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNetInfo } from '@react-native-community/netinfo'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Provider } from 'react-redux'
import { AppColors } from './constants/colors'
import { routes } from './constants/routes'
import { storageKeys } from './constants/storage'
import { useAppDispatch } from './hooks/use-app-dispatch'
import { useRefreshTokenMutation } from './redux/api/auth'
import { setAccessToken } from './redux/reducers/authSlice'
import { store } from './redux/store'
import AuthNavScreen from './screens/auth/auth-nav-screen'
import AuthScreen from './screens/auth/auth-screen'
import OnboardScreen from './screens/auth/onboard-screen'
import RegisterScreen from './screens/auth/register-screen'
import MatrixScreen from './screens/main/dashboard/matrix/matrix-screen'
import NumbersScreen from './screens/main/dashboard/numbers/numbers-screen'
import NavigationScreen from './screens/main/navigation-screen'
import ProfileScreen from './screens/main/profile/profile-screen'
import SplashScreen from './screens/splash/splash-screen'
import { getJWTtokens } from './utils/helpers'

const Stack = createNativeStackNavigator()

export const AppWrapper = () => {
    const [isLoading, setLoading] = useState<boolean>(true)
    const [initialScreen, setInitialScreen] = useState<string | null>(null)

    useEffect(() => {
        AsyncStorage.getItem(storageKeys.onboardDisabled).then(
            (onboardDisabled) => {
                setInitialScreen(
                    onboardDisabled === 'true'
                        ? routes.AUTH_NAV
                        : routes.ONBOARD
                )
                setLoading(false)
            }
        )
    }, [])

    return (
        !isLoading &&
        initialScreen !== null && (
            <Provider store={store}>
                <GluestackUIProvider config={config}>
                    <StatusBar
                        backgroundColor={AppColors.background}
                        barStyle="dark-content"
                    />
                    <App initial={initialScreen} />
                </GluestackUIProvider>
            </Provider>
        )
    )
}

function App({ initial }: { initial: string }) {
    const [isLoading, setLoading] = useState<boolean | null>(null)
    const [initialRoute, setInitialRoute] = useState<string>(initial)

    const netInfo = useNetInfo()
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
            setInitialRoute('NavigationScreen')
            setLoading(false)
        }
    }, [isSuccess])

    useEffect(() => {
        if (error) {
            if (netInfo.isConnected === false) {
                setInitialRoute('NavigationScreen')
                // TODO offline mode
            }
            setLoading(false)
        }
    }, [error])

    return isLoading === false ? (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{ headerShown: false }}
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
                    <Stack.Screen
                        name={routes.REGISTER}
                        component={RegisterScreen}
                    />
                </Stack.Group>
                <Stack.Group>
                    <Stack.Screen
                        name={routes.NAVIGATION}
                        component={NavigationScreen}
                    />
                    <Stack.Screen
                        name={routes.PROFILE}
                        component={ProfileScreen}
                    />
                    <Stack.Screen
                        name={routes.NUMBERS}
                        component={NumbersScreen}
                    />
                    <Stack.Screen
                        name={routes.MATRIX}
                        component={MatrixScreen}
                    />
                </Stack.Group>
            </Stack.Navigator>
        </NavigationContainer>
    ) : (
        <SplashScreen />
    )
}
