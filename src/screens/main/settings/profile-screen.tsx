import { Fragment, useState } from 'react'
import { HStack, ScrollView, Text } from '@gluestack-ui/themed'
import { useTranslation } from 'react-i18next'
import { SafeAreaView } from 'react-native-safe-area-context'
import StatusCard from '@/components/status-card/status-card'
import TopBar from '@/components/top-bar/top-bar'
import AppButton from '@/components/ui/button'
import Dialog from '@/components/ui/dialog'
import TextButton from '@/components/ui/text-button'
import { AppColors } from '@/constants/colors'

export default function ProfileScreen() {
    const { t } = useTranslation()

    const [dialogOpen, setDialogOpen] = useState(false)

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
                            onPress={() => {}}
                        />
                    </HStack>
                }
            >
                <Text fontSize="$sm">{t('settings.description.logout')}</Text>
            </Dialog>
            <SafeAreaView
                style={{ flex: 1, backgroundColor: AppColors.background }}
            >
                <TopBar
                    title={t('route.profile')}
                    suffix={<StatusCard pro />}
                />
                <ScrollView p="$4">
                    <TextButton
                        text={t('settings.label.logout')}
                        textAlign="center"
                        fontWeight="$medium"
                        color={AppColors.error}
                        py="$4"
                        onPress={() => setDialogOpen(true)}
                    />
                </ScrollView>
            </SafeAreaView>
        </Fragment>
    )
}
