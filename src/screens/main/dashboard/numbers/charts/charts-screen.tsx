import { Center, HStack, View } from '@gluestack-ui/themed'
import { Dimensions, Image } from 'react-native'
import Config from 'react-native-config'
import NumbersLayout from '../components/numbers-layout'
import { AppLineChart, GraphLabel } from '@/components/chart/app-line-chart'
import buildGraph from '@/components/chart/build-graph'
import PageLabel from '@/components/page/page-label'
import NumbersSkeleton from '@/components/skeleton/numbers-skeleton'
import AppScrollView from '@/components/ui/scroll-view'
import { MEDIUM_MAX_WIDTH } from '@/constants/constants'
import { AppColors, AppShapes } from '@/constants/theme'
import { useGetGraphsQuery } from '@/redux/api/numbers'
import { DefaultStackScreenProps } from '@/types/interface'
import { PageInterface } from '@/types/interface/pages'

export default function ChartsScreen({
    navigation,
    route,
}: DefaultStackScreenProps) {
    const routeParams = route.params as PageInterface

    const {
        data = { graphs: [], graph_results: [] },
        isFetching,
        isSuccess,
        error,
        refetch,
    } = useGetGraphsQuery()

    const successLoad = !isFetching && isSuccess
    const graphData = successLoad ? buildGraph(data.graphs) : {}

    return (
        <NumbersLayout
            description={routeParams.page_description}
            navigation={navigation}
        >
            {successLoad ? (
                <AppScrollView
                    contentContainerStyle={{
                        justifyContent: 'flex-start',
                    }}
                    maxWidth={MEDIUM_MAX_WIDTH}
                >
                    <Image
                        style={{
                            height: Dimensions.get('window').height * 0.3,
                            maxHeight: 280,
                            backgroundColor: AppColors.primary,
                            borderRadius: AppShapes.largeRadius,
                            marginHorizontal: 16,
                        }}
                        source={{
                            uri: `${Config.DEFAULT_HOST}${routeParams.page_image}`,
                        }}
                    />
                    <PageLabel
                        bgColor={routeParams.color}
                        type={routeParams.key}
                        top={-22}
                    >
                        {routeParams.page_name}
                    </PageLabel>
                    <View
                        style={{
                            alignItems: 'center',
                        }}
                    >
                        <Center position="relative" h={260}>
                            <View position="absolute">
                                <AppLineChart disableScroll {...graphData} />
                            </View>
                            <View position="absolute">
                                <AppLineChart
                                    hideUI
                                    disableScroll
                                    {...graphData}
                                />
                            </View>
                            {/* <View position="absolute">
                                <AppLineChart
                                    hideUI
                                    disableScroll
                                    {...graphData}
                                />
                            </View> */}
                        </Center>
                    </View>
                    <HStack
                        my="$4"
                        mx="$6"
                        flexWrap="wrap"
                        alignItems="center"
                        gap="$4"
                    >
                        {data.graphs.map((value, index) => (
                            <GraphLabel
                                key={index}
                                value={value}
                                index={index}
                            />
                        ))}
                    </HStack>
                </AppScrollView>
            ) : (
                <NumbersSkeleton error={error} refetch={refetch} />
            )}
        </NumbersLayout>
    )
}
