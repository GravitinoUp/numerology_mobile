import { ScrollView, VStack } from '@gluestack-ui/themed'
import { useTranslation } from 'react-i18next'
import { SafeAreaView } from 'react-native-safe-area-context'
import CardButton from '../../../components/card-button/card-button'
import StatusCard from '@/components/status-card/status-card'
import TopBar from '@/components/top-bar/top-bar'
import { AppColors } from '@/constants/colors'
import { routes } from '@/constants/routes'
import { DefaultStackScreenProps } from '@/types/interface'

export default function DashboardScreen({
    navigation,
}: DefaultStackScreenProps) {
    const { t } = useTranslation()

    return (
        <SafeAreaView
            style={{ flex: 1, backgroundColor: AppColors.background }}
        >
            <TopBar
                title={t(`route.dashboard`)}
                subtitle="Hi, Name Surname"
                suffix={<StatusCard pro />}
            />
            <ScrollView>
                <VStack p="$4" gap="$4">
                    <CardButton
                        label="NUMBERS"
                        onPress={() => navigation.navigate(routes.NUMBERS)}
                    />
                    <CardButton
                        label="MATRIX"
                        onPress={() => navigation.navigate(routes.MATRIX)}
                    />
                    <CardButton label="TEXT 3" />
                    <CardButton label="TEXT 4" />
                    <CardButton label="TEXT 5" />
                </VStack>
            </ScrollView>
        </SafeAreaView>
    )
}
