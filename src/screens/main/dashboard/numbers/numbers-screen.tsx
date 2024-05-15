import { ScrollView, Text, VStack } from '@gluestack-ui/themed'
import { Image } from 'react-native'
import NumbersLayout from './components/numbers-layout'
import ExpandableCard from '@/components/expandable-card/expandable-card'
import PageLabel from '@/components/page/page-label'
import NumbersSkeleton from '@/components/skeleton/numbers-skeleton'
import { AppColors, AppShapes } from '@/constants/theme'
import { useGetNumbersQuery } from '@/redux/api/numbers'
import { DefaultStackScreenProps } from '@/types/interface'
import { PageInterface } from '@/types/interface/pages'

export default function NumbersScreen({
    navigation,
    route,
}: DefaultStackScreenProps) {
    const routeParams = route.params as PageInterface

    const {
        data = [],
        isFetching,
        isSuccess,
        error,
        refetch,
    } = useGetNumbersQuery({ type: routeParams.key })

    const successLoad = !isFetching && isSuccess

    return (
        <NumbersLayout
            description={routeParams.page_description}
            navigation={navigation}
        >
            {successLoad ? (
                <ScrollView>
                    <Image
                        style={{
                            height: 180,
                            backgroundColor: AppColors.primary,
                            borderRadius: AppShapes.largeRadius,
                            marginHorizontal: 16,
                        }}
                        source={{ uri: routeParams.page_image }}
                    />
                    <PageLabel
                        bgColor={routeParams.color}
                        type={routeParams.key}
                        top={-22}
                    >
                        {routeParams.page_name}
                    </PageLabel>
                    <VStack p="$4" gap="$4">
                        {data.map((value, index) => (
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
                            />
                        ))}
                    </VStack>
                </ScrollView>
            ) : (
                <NumbersSkeleton error={error} refetch={refetch} />
            )}
        </NumbersLayout>
    )
}
