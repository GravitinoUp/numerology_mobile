import { ScrollView, VStack } from '@gluestack-ui/themed'
import { useTranslation } from 'react-i18next'
import NumberCard from '../../../../../components/number-card/number-card'
import NumbersLayout from '../components/numbers-layout'
import { useGetPlanetsQuery } from '@/redux/api/numbers'
import SplashScreen from '@/screens/splash/splash-screen'
import { DefaultStackScreenProps } from '@/types/interface'

export default function PlanetsScreen({ navigation }: DefaultStackScreenProps) {
    const { t } = useTranslation()

    const {
        data: planets = [],
        isFetching,
        isSuccess,
        error,
        refetch,
    } = useGetPlanetsQuery()

    const successLoad = !isFetching && isSuccess

    return (
        <NumbersLayout title={t('section.planets')} navigation={navigation}>
            {successLoad ? (
                <ScrollView>
                    <VStack p="$4" gap="$4">
                        {planets.map((value, index) => (
                            <NumberCard
                                key={index}
                                color="#2D9CDB"
                                number={Number(value.page_keys[0])}
                                max={8}
                                title={value.page_title}
                                label={value.page_name}
                                description={value.page_content}
                            />
                        ))}
                    </VStack>
                </ScrollView>
            ) : (
                <SplashScreen error={error} refetch={refetch} />
            )}
        </NumbersLayout>
    )
}
