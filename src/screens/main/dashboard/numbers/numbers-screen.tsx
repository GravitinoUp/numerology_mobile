import { SafeAreaView, ScrollView, VStack } from '@gluestack-ui/themed'
import { useTranslation } from 'react-i18next'
import NumberCard from './components/number-card'
import TopBar from '@/components/top-bar/top-bar'
import { AppColors } from '@/constants/colors'

export default function NumbersScreen({ navigation }: any) {
    const { t } = useTranslation()

    return (
        <SafeAreaView
            style={{ flex: 1, backgroundColor: AppColors.background }}
        >
            <TopBar title={t('route.numbers')} navigation={navigation} />
            <ScrollView>
                <VStack p="$4" gap="$10">
                    <NumberCard color="#F3722C" number={35} />
                    <NumberCard color="#2D9CDB" number={70} />
                    <NumberCard color="#F94144" number={10} />
                </VStack>
            </ScrollView>
        </SafeAreaView>
    )
}
