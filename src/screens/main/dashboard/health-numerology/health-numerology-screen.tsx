import { useState } from 'react'
import { ScrollView, Text, VStack } from '@gluestack-ui/themed'
import { DiamondIcon, HeartIcon, InfoIcon } from 'lucide-react-native'
import { useTranslation } from 'react-i18next'
import DashboardLabel from '@/components/dashboard/dashboard-label'
import DescriptionActionsheet from '@/components/description-actionsheet/description-actionsheet'
import IconButton from '@/components/icon-button/icon-button'
import NumberCard from '@/components/number-card/number-card'
import TopBar from '@/components/top-bar/top-bar'
import Scaffold from '@/components/ui/scaffold'
import { AppColors } from '@/constants/colors'
import { DefaultStackScreenProps } from '@/types/interface'

export default function HealthNumerologyScreen({
    navigation,
}: DefaultStackScreenProps) {
    const { t } = useTranslation()

    const [actionsheetOpen, setActionsheetOpen] = useState(false)

    return (
        <Scaffold>
            <TopBar
                title={t('section.health.numerology')}
                navigation={navigation}
                suffix={
                    <IconButton
                        icon={<InfoIcon color={AppColors.text} />}
                        onPress={() => setActionsheetOpen(true)}
                    />
                }
            />
            <ScrollView>
                <VStack p="$4" gap="$4">
                    <DashboardLabel>
                        Число судьбы и психосоматика
                    </DashboardLabel>
                    <NumberCard
                        color="#2D9CDB"
                        number={2}
                        max={22}
                        icon={<DiamondIcon color={AppColors.background} />}
                        label="Число судьбы"
                        description="Описание числа судьбы"
                    />
                    <DashboardLabel>Хронические заболевания</DashboardLabel>
                    <NumberCard
                        color="#F94144"
                        number={2}
                        max={22}
                        icon={<HeartIcon color={AppColors.background} />}
                        label="Название хронического заболевания"
                        description="Описание хронического заболевания"
                    />
                    <DashboardLabel>
                        Метафизические причины болезней
                    </DashboardLabel>
                </VStack>
            </ScrollView>
            <DescriptionActionsheet
                actionsheetOpen={actionsheetOpen}
                setActionsheetOpen={setActionsheetOpen}
            >
                <Text color={AppColors.text}>
                    {t('placeholder.long.default')}
                </Text>
            </DescriptionActionsheet>
        </Scaffold>
    )
}
