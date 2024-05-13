import { ScrollView, VStack } from '@gluestack-ui/themed'
import { useTranslation } from 'react-i18next'
import NumbersLayout from '../components/numbers-layout'
import CardButton from '@/components/card-button/card-button'
import DashboardLabel from '@/components/dashboard/dashboard-label'
import NumberCard from '@/components/number-card/number-card'
import { useGetNumbersQuery } from '@/redux/api/numbers'
import SplashScreen from '@/screens/splash/splash-screen'
import { DefaultStackScreenProps } from '@/types/interface'

export default function HealthNumerologyScreen({
    navigation,
}: DefaultStackScreenProps) {
    const { t } = useTranslation()

    const {
        data: health = [],
        isFetching,
        isSuccess,
        error,
        refetch,
    } = useGetNumbersQuery('health')

    const successLoad = !isFetching && isSuccess

    return (
        <NumbersLayout
            title={t('section.health.numerology')}
            navigation={navigation}
        >
            {successLoad ? (
                <ScrollView>
                    <VStack p="$4" gap="$4">
                        {health.map((value, index) => (
                            <NumberCard
                                key={index}
                                color="#2D9CDB"
                                number={Number(value.page_keys[0])}
                                title={value.page_title}
                                label={value.page_name}
                                description={value.page_content}
                            />
                        ))}
                        <DashboardLabel>
                            Метафизические причины болезней
                        </DashboardLabel>
                        <CardButton
                            label={t('section.health.numerology')}
                            onPress={() => {}}
                        />
                    </VStack>
                </ScrollView>
            ) : (
                <SplashScreen error={error} refetch={refetch} />
            )}
        </NumbersLayout>
    )
}
