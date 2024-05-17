import { Fragment, useState } from 'react'
import {
    Center,
    HStack,
    ScrollView,
    Text,
    VStack,
    View,
} from '@gluestack-ui/themed'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { CommonActions } from '@react-navigation/native'
import { useTranslation } from 'react-i18next'
import CardButton from '@/components/card-button/card-button'
import StatusCard from '@/components/status-card/status-card'
import TopBar from '@/components/top-bar/top-bar'
import AppButton from '@/components/ui/button'
import Dialog from '@/components/ui/dialog'
import Scaffold from '@/components/ui/scaffold'
import TextButton from '@/components/ui/text-button'
import { routes } from '@/constants/routes'
import { AppColors } from '@/constants/theme'
import { useAppDispatch } from '@/hooks/use-app-dispatch'
import { api } from '@/redux/api'
import { useGetCurrentUserQuery } from '@/redux/api/users'
import SplashScreen from '@/screens/splash/splash-screen'
import { DefaultStackScreenProps } from '@/types/interface'

export default function ProfileScreen({ navigation }: DefaultStackScreenProps) {
    const { t } = useTranslation()

    const dispatch = useAppDispatch()
    const [dialogOpen, setDialogOpen] = useState(false)

    const {
        data: user,
        isFetching: userFetching,
        isSuccess: userSuccess,
        error: userError,
        refetch: userRefetch,
    } = useGetCurrentUserQuery()

    const successLoad = !userFetching && userSuccess

    const handleLogout = async () => {
        await AsyncStorage.clear()
        dispatch(api.util.resetApiState())

        navigation.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [{ name: routes.AUTH_NAV }],
            })
        )
    }

    return (
        <Fragment>
            <Dialog
                title={t('settings.label.logout')}
                isOpen={dialogOpen}
                setOpen={setDialogOpen}
                footer={
                    <HStack gap="$2">
                        <AppButton
                            style={{ flex: 1 }}
                            text={t('action.cancel')}
                            textProps={{
                                color: AppColors.text,
                                fontSize: '$sm',
                                fontWeight: '$normal',
                            }}
                            px="$1"
                            bgColor={AppColors.transparent}
                            onPress={() => setDialogOpen(false)}
                        />
                        <AppButton
                            style={{ flex: 1 }}
                            textProps={{
                                fontSize: '$sm',
                                fontWeight: '$normal',
                            }}
                            px="$1"
                            text={t('action.confirm')}
                            onPress={handleLogout}
                        />
                    </HStack>
                }
            >
                <Text fontSize="$sm">{t('settings.description.logout')}</Text>
            </Dialog>
            <Scaffold>
                <TopBar title={t('route.profile')} />
                {successLoad ? (
                    <ScrollView>
                        <Center>
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
                        <VStack mt="$2" p="$4" gap="$4">
                            <CardButton
                                index={0}
                                label={t('settings.label.personal.data')}
                                onPress={() =>
                                    navigation.navigate(
                                        routes.EDIT_PROFILE,
                                        user
                                    )
                                }
                            />
                            <CardButton
                                index={1}
                                label={t('settings.label.subscriptions')}
                                onPress={() =>
                                    navigation.navigate(routes.SUBSCRIPTIONS)
                                }
                            />
                            <CardButton
                                index={2}
                                label={t('settings.label.notifications')}
                                onPress={() =>
                                    navigation.navigate(
                                        routes.MANAGE_NOTIFICATIONS
                                    )
                                }
                            />
                            <CardButton
                                index={3}
                                label={t('settings.label.language')}
                                onPress={() =>
                                    navigation.navigate(routes.LANGUAGE)
                                }
                            />
                        </VStack>
                        <TextButton
                            text={t('settings.label.logout')}
                            textAlign="center"
                            fontWeight="$medium"
                            color={AppColors.error}
                            py="$4"
                            onPress={() => setDialogOpen(true)}
                        />
                    </ScrollView>
                ) : (
                    <SplashScreen error={userError} refetch={userRefetch} />
                )}
            </Scaffold>
        </Fragment>
    )
}
