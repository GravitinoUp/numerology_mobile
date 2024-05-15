import { HStack, ScrollView, Text, VStack, View } from '@gluestack-ui/themed'
import { useTranslation } from 'react-i18next'
import DropShadow from 'react-native-drop-shadow'
import CategoryCard from '@/components/dashboard/category-card'
import StatusCard from '@/components/status-card/status-card'
import Scaffold from '@/components/ui/scaffold'
import { routes } from '@/constants/routes'
import { AppColors } from '@/constants/theme'
import { useGetCategoriesQuery } from '@/redux/api/pages'
import SplashScreen from '@/screens/splash/splash-screen'
import { DefaultStackScreenProps } from '@/types/interface'

export default function DashboardScreen({
    navigation,
}: DefaultStackScreenProps) {
    const { t } = useTranslation()

    const {
        data: categories = [],
        isFetching: categoriesFetching,
        isSuccess: categoriesSuccess,
        error: categoriesError,
        refetch: categoriesRefetch,
    } = useGetCategoriesQuery()

    const successLoad = !categoriesFetching && categoriesSuccess

    return (
        <Scaffold>
            <HStack
                position="absolute"
                w="$full"
                px="$4"
                justifyContent="flex-end"
                alignItems="center"
                h={80}
                zIndex={100}
            >
                <StatusCard pro />
            </HStack>
            {successLoad ? (
                <ScrollView>
                    <VStack mt="$12" alignItems="center">
                        <Text
                            textAlign="center"
                            fontSize="$lg"
                            fontWeight="$bold"
                            color={AppColors.text}
                        >
                            {t('categories')}
                        </Text>
                        <View
                            mt="$2"
                            w="$8"
                            h="$2"
                            borderRadius="$full"
                            bgColor={AppColors.text}
                        />
                    </VStack>
                    <HStack pt="$6" px="$6" pb="$6" gap="$4" flexWrap="wrap">
                        {categories.map((value, index) =>
                            index === 0 ? (
                                <DropShadow
                                    key={index}
                                    style={{
                                        shadowColor: '#091219',
                                        shadowOffset: {
                                            width: 0,
                                            height: 4,
                                        },
                                        shadowOpacity: 0.8,
                                        shadowRadius: 10,
                                        marginBottom: 12,
                                    }}
                                >
                                    <CategoryCard
                                        key={index}
                                        index={index}
                                        w="$full"
                                        borderWidth="$0"
                                        category={value.category_name}
                                        source={{
                                            uri: value.category_image,
                                        }}
                                        onPress={() => {
                                            navigation.navigate(
                                                routes.CATEGORY,
                                                value
                                            )
                                        }}
                                    />
                                </DropShadow>
                            ) : (
                                <CategoryCard
                                    key={index}
                                    index={index}
                                    category={value.category_name}
                                    source={{
                                        uri: value.category_image,
                                    }}
                                    onPress={() => {
                                        navigation.navigate(
                                            routes.CATEGORY,
                                            value
                                        )
                                    }}
                                />
                            )
                        )}
                    </HStack>
                </ScrollView>
            ) : (
                <SplashScreen
                    error={categoriesError}
                    refetch={categoriesRefetch}
                />
            )}
        </Scaffold>
    )
}
