import { ScrollView, VStack } from '@gluestack-ui/themed'
import { Image } from 'react-native'
import Config from 'react-native-config'
import LinearGradient from 'react-native-linear-gradient'
import CardButton from '@/components/card-button/card-button'
import CategoryLabel from '@/components/dashboard/category-label'
import getPageRoute from '@/components/page/get-page-route'
import CategorySkeleton from '@/components/skeleton/category-skeleton'
import TopBar from '@/components/top-bar/top-bar'
import Scaffold from '@/components/ui/scaffold'
import { AppColors } from '@/constants/theme'
import { useGetPagesByCategoryQuery } from '@/redux/api/pages'
import { DefaultStackScreenProps } from '@/types/interface'
import { CategoryInterface } from '@/types/interface/pages'

export default function CategoryScreen({
    navigation,
    route,
}: DefaultStackScreenProps) {
    const routeParams = route.params as CategoryInterface

    const {
        data: pages = [],
        isFetching: pagesFetching,
        isSuccess: pagesSuccess,
        error: pagesError,
        refetch: pagesRefetch,
    } = useGetPagesByCategoryQuery(routeParams.category_id)

    const successLoad = !pagesFetching && pagesSuccess

    return (
        <Scaffold>
            <TopBar
                position="absolute"
                bgColor={AppColors.transparent}
                navigation={navigation}
                zIndex={2}
            />
            <LinearGradient
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: 180,
                    zIndex: 1,
                }}
                colors={['#00000000', '#00000000', '#00000000', '#FFFFFFFF']}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
            />
            <Image
                style={{
                    width: '100%',
                    height: 180,
                    backgroundColor: AppColors.primary,
                }}
                source={{
                    uri: `${Config.DEFAULT_HOST}${routeParams.category_image}`,
                }}
            />
            <CategoryLabel top={-8}>{routeParams.category_name}</CategoryLabel>
            {successLoad ? (
                <ScrollView>
                    <VStack p="$6" gap="$5">
                        {pages
                            .filter((page) => page.is_active)
                            .map((value, index) => (
                                <CardButton
                                    key={index}
                                    index={index}
                                    prefix={value.page_icon}
                                    label={value.page_name}
                                    onPress={() =>
                                        navigation.navigate(
                                            getPageRoute(value.key),
                                            value
                                        )
                                    }
                                />
                            ))}
                    </VStack>
                </ScrollView>
            ) : (
                <CategorySkeleton error={pagesError} refetch={pagesRefetch} />
            )}
        </Scaffold>
    )
}
