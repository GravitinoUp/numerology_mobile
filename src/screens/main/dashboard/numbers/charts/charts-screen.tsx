import { DEFAULT_HOST } from '@env'
import { Center, View } from '@gluestack-ui/themed'
import { Dimensions, Image } from 'react-native'
import NumbersLayout from '../components/numbers-layout'
import AppLineChart from '@/components/chart/app-line-chart'
import { XLabel } from '@/components/chart/x-label'
import PageLabel from '@/components/page/page-label'
import NumbersSkeleton from '@/components/skeleton/numbers-skeleton'
import AppScrollView from '@/components/ui/scroll-view'
import { MEDIUM_MAX_WIDTH } from '@/constants/constants'
import { AppColors, AppShapes } from '@/constants/theme'
import { DefaultStackScreenProps } from '@/types/interface'
import { PageInterface } from '@/types/interface/pages'

export default function ChartsScreen({
    navigation,
    route,
}: DefaultStackScreenProps) {
    const routeParams = route.params as PageInterface

    const successLoad = true //!isFetching && isSuccess

    return (
        <NumbersLayout
            description={routeParams.page_description}
            navigation={navigation}
        >
            {successLoad ? (
                <AppScrollView
                    contentContainerStyle={{ justifyContent: 'flex-start' }}
                    maxWidth={MEDIUM_MAX_WIDTH}
                >
                    <Image
                        style={{
                            height: Dimensions.get('window').width * 0.5,
                            maxHeight: 280,
                            backgroundColor: AppColors.primary,
                            borderRadius: AppShapes.largeRadius,
                            marginHorizontal: 16,
                        }}
                        source={{
                            uri: `${DEFAULT_HOST}${routeParams.page_image}`,
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
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Center>
                            <AppLineChart
                                data={[
                                    {
                                        value: 1,
                                        labelComponent: () => (
                                            <XLabel value="1989" />
                                        ),
                                    },
                                    {
                                        value: 10,
                                        labelComponent: () => (
                                            <XLabel value="2001" />
                                        ),
                                    },
                                    {
                                        value: 2,
                                        labelComponent: () => (
                                            <XLabel value="2013" />
                                        ),
                                    },
                                    {
                                        value: 6,
                                        labelComponent: () => (
                                            <XLabel value="2025" />
                                        ),
                                    },
                                    {
                                        value: 12,
                                        labelComponent: () => (
                                            <XLabel value="2037" />
                                        ),
                                    },
                                    {
                                        value: 6,
                                        labelComponent: () => (
                                            <XLabel value="2049" />
                                        ),
                                    },
                                ]}
                                data2={[
                                    {
                                        value: 2,
                                        labelComponent: () => (
                                            <XLabel value="1989" />
                                        ),
                                    },
                                    {
                                        value: 5,
                                        labelComponent: () => (
                                            <XLabel value="2001" />
                                        ),
                                    },
                                    {
                                        value: 9,
                                        labelComponent: () => (
                                            <XLabel value="2013" />
                                        ),
                                    },
                                    {
                                        value: 10,
                                        labelComponent: () => (
                                            <XLabel value="2025" />
                                        ),
                                    },
                                    {
                                        value: 6,
                                        labelComponent: () => (
                                            <XLabel value="2037" />
                                        ),
                                    },
                                    {
                                        value: 8,
                                        labelComponent: () => (
                                            <XLabel value="2049" />
                                        ),
                                    },
                                ]}
                            />
                        </Center>
                    </View>
                </AppScrollView>
            ) : (
                <NumbersSkeleton />
            )}
        </NumbersLayout>
    )
}
