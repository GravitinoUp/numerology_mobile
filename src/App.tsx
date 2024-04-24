import { config } from '@gluestack-ui/config'
import { GluestackUIProvider, StatusBar } from '@gluestack-ui/themed'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AppColors } from './constants/colors'
import { routes } from './constants/routes'
import AuthNavScreen from './screens/auth/auth-nav-screen'
import AuthScreen from './screens/auth/auth-screen'
import RegisterScreen from './screens/auth/register-screen'
import NumbersScreen from './screens/main/dashboard/numbers/numbers-screen'
import NavigationScreen from './screens/main/navigation-screen'
import ProfileScreen from './screens/main/settings/profile-screen'
import SplashScreen from './screens/splash/splash-screen'

const Stack = createNativeStackNavigator()

export const AppWrapper = () => (
    <GluestackUIProvider config={config}>
        <StatusBar
            backgroundColor={AppColors.background}
            barStyle="dark-content"
        />
        <App />
    </GluestackUIProvider>
)

function App() {
    return true ? (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Group>
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
                <Stack.Screen
                    name={routes.NAVIGATION}
                    component={NavigationScreen}
                />
                <Stack.Screen
                    name={routes.SETTINGS}
                    component={ProfileScreen}
                />
                <Stack.Screen name={routes.NUMBERS} component={NumbersScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    ) : (
        <SplashScreen />
    )
}
