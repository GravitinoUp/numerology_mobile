import { ScrollView, VStack } from '@gluestack-ui/themed'
import NumbersLayout from './components/numbers-layout'
import NumberCard from '@/components/number-card/number-card'
import { useGetNumbersQuery } from '@/redux/api/numbers'
import SplashScreen from '@/screens/splash/splash-screen'
import { DefaultStackScreenProps } from '@/types/interface'
import { PageType } from '@/types/interface/numbers'

export default function NumbersScreen({
    navigation,
    route,
}: DefaultStackScreenProps) {
    const routeParams = route.params as { title: string; type: PageType }
    const title: string = routeParams.title
    const type: PageType = routeParams.type

    const {
        data = [],
        isFetching,
        isSuccess,
        error,
        refetch,
    } = useGetNumbersQuery(type)

    const successLoad = !isFetching && isSuccess

    return (
        <NumbersLayout title={title} navigation={navigation}>
            {successLoad ? (
                <ScrollView>
                    <VStack p="$4" gap="$4">
                        {data.map((value, index) => (
                            <NumberCard
                                key={index}
                                color="#2D9CDB"
                                number={Number(value.page_keys[0])}
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
