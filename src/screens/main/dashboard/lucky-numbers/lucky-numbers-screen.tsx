import { SafeAreaView, ScrollView, VStack } from '@gluestack-ui/themed'
import { useTranslation } from 'react-i18next'
import NumberCard from '../../../../components/number-card/number-card'
import TopBar from '@/components/top-bar/top-bar'
import { AppColors } from '@/constants/colors'
import { DefaultStackScreenProps } from '@/types/interface'

export default function LuckyNumbersScreen({
    navigation,
}: DefaultStackScreenProps) {
    const { t } = useTranslation()

    return (
        <SafeAreaView
            style={{ flex: 1, backgroundColor: AppColors.background }}
        >
            <TopBar
                title={t('section.lucky.numbers')}
                navigation={navigation}
            />
            <ScrollView>
                <VStack p="$4" gap="$10">
                    <NumberCard color="#F3722C" number={18} />
                    <NumberCard color="#2D9CDB" number={6} />
                    <NumberCard color="#F94144" number={22} />
                    <NumberCard color="#F94144" number={10} />
                    <NumberCard color="#F94144" number={9} />
                    <NumberCard color="#F94144" number={1} />
                </VStack>
            </ScrollView>
        </SafeAreaView>
    )
}
