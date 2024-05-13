import { SafeAreaView, ScrollView, VStack } from '@gluestack-ui/themed'
import { useTranslation } from 'react-i18next'
import MatrixCard from './components/matrix-card'
import TopBar from '@/components/top-bar/top-bar'
import { AppColors } from '@/constants/theme'
import { DefaultStackScreenProps } from '@/types/interface'

export default function MatrixScreen({ navigation }: DefaultStackScreenProps) {
    const { t } = useTranslation()

    return (
        <SafeAreaView
            style={{ flex: 1, backgroundColor: AppColors.background }}
        >
            <TopBar title={t('route.matrix')} navigation={navigation} />
            <ScrollView>
                <VStack p="$4" gap="$10">
                    <MatrixCard
                        items={[
                            { label: 'Птица', value: 10, color: '#0043CE' },
                            { label: 'Якорь', value: 12, color: '#F29F15' },
                        ]}
                    />
                    <MatrixCard
                        items={[
                            { label: 'Экстраверт', value: 5, color: '#D1377D' },
                            { label: 'Интроверт', value: 10, color: '#4B3DAA' },
                        ]}
                    />
                    <MatrixCard
                        items={[
                            { label: 'Экстраверт', value: 5, color: '#D1377D' },
                            { label: 'Интроверт', value: 10, color: '#4B3DAA' },
                        ]}
                    />
                </VStack>
            </ScrollView>
        </SafeAreaView>
    )
}
