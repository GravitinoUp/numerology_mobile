import { HStack, Text, View } from '@gluestack-ui/themed'
import { Dimensions, ImageBackground } from 'react-native'
import Config from 'react-native-config'
import NumbersLayout from '../components/numbers-layout'
import ExpandableCard from '@/components/expandable-card/expandable-card'
import PageLabel from '@/components/page/page-label'
import NumbersSkeleton from '@/components/skeleton/numbers-skeleton'
import AppScrollView from '@/components/ui/scroll-view'
import { MEDIUM_MAX_WIDTH } from '@/constants/constants'
import { AppColors, AppShapes } from '@/constants/theme'
import { useGetNumbersQuery } from '@/redux/api/numbers'
import { DefaultStackScreenProps } from '@/types/interface'
import { PageInterface } from '@/types/interface/pages'
import { formatTime } from '@/utils/helpers'

export default function TotemicAnimalsScreen({
    navigation,
    route,
}: DefaultStackScreenProps) {
    const routeParams = route.params as PageInterface
    const currentDate = new Date()

    const {
        data = [],
        isFetching,
        isSuccess,
        error,
        refetch,
    } = useGetNumbersQuery({
        type: routeParams.key,
        query:
            routeParams.key === 'angelic-numerology'
                ? formatTime(currentDate)
                : undefined,
    })

    const successLoad = !isFetching && isSuccess

    return (
        <NumbersLayout
            topBarBackground={AppColors.transparent}
            description={routeParams.page_description}
            navigation={navigation}
        >
            {successLoad ? (
                <AppScrollView
                    contentContainerStyle={{ justifyContent: 'flex-start' }}
                    maxWidth={MEDIUM_MAX_WIDTH}
                >
                    {data[0] && (
                        <View mt="$12" top={-64}>
                            <ImageBackground
                                style={{}}
                                imageStyle={{
                                    height: Dimensions.get('window').width,
                                    maxHeight: 240,
                                    borderRadius: AppShapes.largeRadius,
                                    marginHorizontal: 16,
                                    objectFit: 'contain',
                                    zIndex: 2,
                                }}
                                source={{
                                    uri: `${Config.DEFAULT_HOST}${data[0].result_image}`,
                                }}
                            />
                        </View>
                    )}
                    <ImageBackground
                        style={{
                            height: Dimensions.get('window').height * 0.3,
                            maxHeight: 280,
                            marginHorizontal: 16,
                        }}
                        imageStyle={{
                            backgroundColor: AppColors.primary,
                            borderRadius: AppShapes.largeRadius,
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
                    <HStack p="$4" gap="$4" flexWrap="wrap">
                        {data.map((value, index) => (
                            <ExpandableCard
                                key={index}
                                prefix={
                                    value.result_keys[0].length <= 2 && (
                                        <Text
                                            fontWeight="$bold"
                                            color={AppColors.text}
                                        >
                                            {value.result_keys[0]}
                                        </Text>
                                    )
                                }
                                title={value.result_name}
                                content={value.result_content}
                                adaptive={data.length > 1}
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
