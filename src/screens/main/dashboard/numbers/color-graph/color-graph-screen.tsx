import { DEFAULT_HOST } from '@env'
import { HStack } from '@gluestack-ui/themed'
import { Dimensions, Image } from 'react-native'
import NumbersLayout from '../components/numbers-layout'
import PageLabel from '@/components/page/page-label'
import NumbersSkeleton from '@/components/skeleton/numbers-skeleton'
import AppScrollView from '@/components/ui/scroll-view'
import { MEDIUM_MAX_WIDTH } from '@/constants/constants'
import { AppColors, AppShapes } from '@/constants/theme'
import { DefaultStackScreenProps } from '@/types/interface'
import { PageInterface } from '@/types/interface/pages'

export default function ColorGraphScreen({
    navigation,
    route,
}: DefaultStackScreenProps) {
    const routeParams = route.params as PageInterface

    // const {
    //     data = [],
    //     isFetching,
    //     isSuccess,
    //     error,
    //     refetch,
    // } = useGetNumbersQuery({ type: routeParams.key })

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
                    <HStack p="$4" gap="$4" flexWrap="wrap">
                        {/* {data.map((value, index) => (
                            <ExpandableCard
                                key={index}
                                prefix={
                                    <Text
                                        fontWeight="$bold"
                                        color={AppColors.text}
                                    >
                                        {value.result_keys[0]}
                                    </Text>
                                }
                                title={value.result_name}
                                content={value.result_content}
                                image={value.result_image}
                                adaptive={data.length > 1}
                            />
                        ))} */}
                    </HStack>
                </AppScrollView>
            ) : (
                <NumbersSkeleton /> //error={error} refetch={refetch} />
            )}
        </NumbersLayout>
    )
}
