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
                        label={t('section.numerology.health')}
                        onPress={() =>
                            navigation.navigate(routes.NUMEROLOGY_HEALTH)
                        }
                    />
                    <CardButton
                        label={t('section.fate.cards')}
                        onPress={() => navigation.navigate(routes.FATE_CARDS)}
                    />
                    <CardButton
                        label={t('section.professions')}
                        onPress={() => navigation.navigate(routes.PROFESSIONS)}
                    />
                    <CardButton
                        label={t('section.weaknesses')}
                        onPress={() => navigation.navigate(routes.WEAKNESSES)}
                    />
                    <CardButton
                        label={t('section.lucky.numbers')}
                        onPress={() =>
                            navigation.navigate(routes.LUCKY_NUMBERS)
                        }
                    />
                    <CardButton
                        label={t('section.planets')}
                        onPress={() => navigation.navigate(routes.PLANETS)}
                    />
                    <CardButton
                        label={t('section.ancestors')}
                        onPress={() => navigation.navigate(routes.ANCESTORS)}
                    />
                </VStack>
            </ScrollView>
        </SafeAreaView>
    )
}
