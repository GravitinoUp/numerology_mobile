import { ScrollView, VStack } from '@gluestack-ui/themed'
import { Image } from 'react-native'
import NumbersLayout from './components/numbers-layout'
import getCardColor from '@/components/card-button/get-card-color'
import ExpandableCard from '@/components/expandable-card/expandable-card'
import PageLabel from '@/components/page/page-label'
import { AppColors, AppShapes } from '@/constants/theme'
import { useGetNumbersQuery } from '@/redux/api/numbers'
import SplashScreen from '@/screens/splash/splash-screen'
import { DefaultStackScreenProps } from '@/types/interface'
import { PageType } from '@/types/interface/numbers'

export default function NumbersScreen({
    navigation,
    route,
}: DefaultStackScreenProps) {
    const routeParams = route.params as { label: string; type: PageType }

    const {
        data = [],
        isFetching,
        isSuccess,
        error,
        refetch,
    } = useGetNumbersQuery(routeParams.type)

    const successLoad = !isFetching && isSuccess

    return (
        <NumbersLayout navigation={navigation}>
            {successLoad ? (
                <ScrollView>
                    <Image
                        style={{
                            height: 180,
                            backgroundColor: AppColors.primary,
                            borderRadius: AppShapes.largeRadius,
                            marginHorizontal: 16,
                        }}
                        source={{ uri: '' }}
                    />
                    <PageLabel
                        bgColor={getCardColor(routeParams.type)}
                        type={routeParams.type}
                        top={-8}
                    >
                        {routeParams.label}
                    </PageLabel>
                    <VStack p="$4" gap="$4">
                        {data.map((value, index) => (
                            <ExpandableCard
                                key={index}
                                title={value.page_title}
                                content={value.page_content}
                            />
                        ))}
                        {/* {data.map((value, index) => (
                            <NumberCard
                                key={index}
                                color="#2D9CDB"
                                number={Number(value.page_keys[0])}
                                title={value.page_title}
                                label={value.page_name}
                                description={value.page_content}
                            />
                        ))} */}
                    </VStack>
                </ScrollView>
            ) : (
                <SplashScreen error={error} refetch={refetch} />
            )}
        </NumbersLayout>
    )
}
