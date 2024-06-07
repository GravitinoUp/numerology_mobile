import { Text, VStack, Image, Center, ScrollView } from '@gluestack-ui/themed'
import { useTranslation } from 'react-i18next'
import NumbersLayout from '../components/numbers-layout'
import DashboardLabel from '@/components/dashboard/dashboard-label'
import { AppColors } from '@/constants/theme'
import { useGetNumbersQuery } from '@/redux/api/numbers'
import SplashScreen from '@/screens/splash/splash-screen'
import { DefaultStackScreenProps } from '@/types/interface'
import { PageInterface } from '@/types/interface/pages'

export default function FateCardsScreen({
    navigation,
    route,
}: DefaultStackScreenProps) {
    const { t } = useTranslation()
    const routeParams = route.params as PageInterface

    const {
        data = [],
        isFetching,
        isSuccess,
        error,
        refetch,
    } = useGetNumbersQuery({
        type: routeParams.key,
    })

    const successLoad = !isFetching && isSuccess

    return (
        <NumbersLayout title={t('section.fate.cards')} navigation={navigation}>
            {successLoad ? (
                <ScrollView>
                    <VStack p="$4" gap="$10">
                        <DashboardLabel
                            fontSize="$lg"
                            fontWeight="$bold"
                            color={AppColors.text}
                            textAlign="center"
                        >
                            {data[0].result_name}
                        </DashboardLabel>
                        {data[0].result_image !== '' && (
                            <Center>
                                <Image
                                    source={data[0]?.result_image}
                                    alt=""
                                    h={135}
                                    w={90}
                                />
                            </Center>
                        )}
                        <Text color={AppColors.text}>
                            {data[0].result_content}
                        </Text>
                    </VStack>
                </ScrollView>
            ) : (
                <SplashScreen error={error} refetch={refetch} />
            )}
        </NumbersLayout>
    )
}
