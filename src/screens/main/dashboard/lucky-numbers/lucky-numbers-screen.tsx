import { useState } from 'react'
import { ScrollView, Text, VStack } from '@gluestack-ui/themed'
import { CloverIcon, InfoIcon } from 'lucide-react-native'
import { useTranslation } from 'react-i18next'
import NumberCard from '../../../../components/number-card/number-card'
import DescriptionActionsheet from '@/components/description-actionsheet/description-actionsheet'
import IconButton from '@/components/icon-button/icon-button'
import TopBar from '@/components/top-bar/top-bar'
import Scaffold from '@/components/ui/scaffold'
import { AppColors } from '@/constants/colors'
import { DefaultStackScreenProps } from '@/types/interface'

export default function LuckyNumbersScreen({
    navigation,
}: DefaultStackScreenProps) {
    const { t } = useTranslation()

    const [actionsheetOpen, setActionsheetOpen] = useState(false)

    return (
        <Scaffold>
            <TopBar
                title={t('section.lucky.numbers')}
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
                    <NumberCard
                        color="#32CD32"
                        number={18}
                        icon={<CloverIcon color={AppColors.background} />}
                    />
                    <NumberCard
                        color="#32CD32"
                        number={6}
                        icon={<CloverIcon color={AppColors.background} />}
                    />
                    <NumberCard
                        color="#32CD32"
                        number={22}
                        icon={<CloverIcon color={AppColors.background} />}
                    />
                    <NumberCard
                        color="#32CD32"
                        number={10}
                        icon={<CloverIcon color={AppColors.background} />}
                    />
                    <NumberCard
                        color="#32CD32"
                        number={9}
                        icon={<CloverIcon color={AppColors.background} />}
                    />
                    <NumberCard
                        color="#32CD32"
                        number={1}
                        icon={<CloverIcon color={AppColors.background} />}
                    />
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
