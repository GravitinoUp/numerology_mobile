import { DEFAULT_HOST } from '@env'
import { HStack, Text } from '@gluestack-ui/themed'
import { View } from '@gluestack-ui/themed'
import { Dimensions, Image } from 'react-native'
import NumbersLayout from '../components/numbers-layout'
import PageLabel from '@/components/page/page-label'
import AppScrollView from '@/components/ui/scroll-view'
import { MEDIUM_MAX_WIDTH } from '@/constants/constants'
import { AppColors, AppShapes } from '@/constants/theme'
import { useGetLuckyNumbersQuery } from '@/redux/api/numbers'
import SplashScreen from '@/screens/splash/splash-screen'
import { DefaultStackScreenProps } from '@/types/interface'
import { PageInterface } from '@/types/interface/pages'

export default function LuckyNumbersScreen({
    navigation,
    route,
}: DefaultStackScreenProps) {
    const routeParams = route.params as PageInterface

    const {
        data: numbers = [],
        isFetching,
        isSuccess,
        error,
        refetch,
    } = useGetLuckyNumbersQuery()

    const successLoad = !isFetching && isSuccess

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
                    <HStack
                        m="$4"
                        mt="$10"
                        h="$20"
                        gap={-8}
                        borderRadius={AppShapes.largeRadius}
                        borderWidth="$1"
                        borderColor={AppColors.border}
                        backgroundColor={AppColors.background}
                        justifyContent="center"
                        alignItems="center"
                    >
                        {numbers.map((value, index) => (
                            <View
                                h="$12"
                                w="$12"
                                key={index}
                                borderRadius="$full"
                                borderWidth="$1"
                                borderColor={AppColors.border}
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Text>{value}</Text>
                            </View>
                        ))}
                    </HStack>
                </AppScrollView>
            ) : (
                <SplashScreen error={error} refetch={refetch} />
            )}
        </NumbersLayout>
    )
}
