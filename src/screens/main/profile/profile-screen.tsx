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
import { DefaultStackScreenProps } from '@/types/interface'

export default function ProfileScreen({ navigation }: DefaultStackScreenProps) {
    const { t } = useTranslation()

    const dispatch = useAppDispatch()
    const [dialogOpen, setDialogOpen] = useState(false)

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
                        <CardButton label={t('settings.label.personal.data')} />
                        <CardButton label={t('settings.label.subscriptions')} />
                        <CardButton label={t('settings.label.notifications')} />
                        <CardButton label={t('settings.label.language')} />
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
            </Scaffold>
        </Fragment>
    )
}
