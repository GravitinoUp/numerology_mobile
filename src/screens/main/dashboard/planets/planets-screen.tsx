import { SafeAreaView, ScrollView, Text, VStack } from '@gluestack-ui/themed'
import { useTranslation } from 'react-i18next'
import NumberCard from '../../../../components/number-card/number-card'
import TopBar from '@/components/top-bar/top-bar'
import { AppColors } from '@/constants/colors'
import { DefaultStackScreenProps } from '@/types/interface'

export default function PlanetsScreen({ navigation }: DefaultStackScreenProps) {
    const { t } = useTranslation()

    return (
        <SafeAreaView
            style={{ flex: 1, backgroundColor: AppColors.background }}
        >
            <TopBar title={t('section.planets')} navigation={navigation} />
            <ScrollView>
                <VStack p="$4" gap="$4">
                    <VStack gap="$4">
                        <Text
                            fontSize="$lg"
                            fontWeight="$semibold"
                            color={AppColors.text}
                        >
                            {t('planets.life.path.number')}
                        </Text>
                        <NumberCard
                            color="#F29F15"
                            label="Солнце"
                            description="Лидерство, авторитет, эго"
                            number={1}
                            max={9}
                        />
                    </VStack>
                    <VStack gap="$4">
                        <Text
                            fontSize="$lg"
                            fontWeight="$semibold"
                            color={AppColors.text}
                        >
                            {t('planets.soul.number')}
                        </Text>
                        <NumberCard
                            color="#F3722C"
                            label="Венера"
                            description="Гармония, любовь, красота"
                            number={6}
                            max={9}
                        />
                    </VStack>
                    <VStack mt="$6" gap="$4">
                        <Text color={AppColors.text}>
                            <Text fontWeight="$semibold" color={AppColors.text}>
                                {t('planets.life.path.number')}
                            </Text>{' '}
                            отражает основные жизненные задачи, возможности и
                            испытания, а планета, связанная с этим числом,
                            указывает на доминирующее влияние в жизни человека.
                        </Text>
                        <Text color={AppColors.text}>
                            <Text fontWeight="$semibold" color={AppColors.text}>
                                {t('planets.soul.number')}
                            </Text>{' '}
                            раскрывает внутренние стремления, желания и
                            мотивации человека, а планета дает понимание
                            глубинных эмоциональных и духовных потребностей.
                        </Text>
                    </VStack>
                </VStack>
            </ScrollView>
        </SafeAreaView>
    )
}