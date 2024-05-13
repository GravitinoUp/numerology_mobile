import { HStack, ScrollView, Text, VStack, View } from '@gluestack-ui/themed'
import { useTranslation } from 'react-i18next'
import DropShadow from 'react-native-drop-shadow'
import CategoryCard from '@/components/dashboard/category-card'
import StatusCard from '@/components/status-card/status-card'
import Scaffold from '@/components/ui/scaffold'
import { categories } from '@/constants/constants'
import { routes } from '@/constants/routes'
import { AppColors } from '@/constants/theme'
import { useGetPageTypesQuery } from '@/redux/api/pages'
import SplashScreen from '@/screens/splash/splash-screen'
import { DefaultStackScreenProps } from '@/types/interface'

export default function DashboardScreen({
    navigation,
}: DefaultStackScreenProps) {
    const { t } = useTranslation()

    const {
        //data: pages = [],
        isFetching,
        isSuccess,
        error,
        refetch,
    } = useGetPageTypesQuery()

    const successLoad = !isFetching && isSuccess

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
                    {/* <Image
                        style={{
                            position: 'absolute',
                            width: '100%',
                            height: 180,
                        }}
                        source={require('@/assets/images/space_background.png')}
                    /> */}
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
                        <DropShadow
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
                                w="$full"
                                borderWidth="$0"
                                category="Программа судьбы"
                                source={require('@/assets/images/destiny.png')}
                                onPress={() =>
                                    navigation.navigate(routes.CATEGORIES, {
                                        label: 'Программа судьбы',
                                        image: require('@/assets/images/destiny.png'),
                                        pages: [
                                            {
                                                label: 'Программа судьбы',
                                                route: routes.NUMBERS,
                                                type: 'destiny',
                                            },
                                            {
                                                label: 'Сильные качества и таланты',
                                                route: routes.NUMBERS,
                                                type: 'strong-qualities',
                                            },
                                            {
                                                label: 'Карты судьбы',
                                                route: routes.FATE_CARDS,
                                                type: 'fate-card',
                                            },
                                            {
                                                label: 'Слабые качества',
                                                route: routes.NUMBERS,
                                                type: 'weak-qualities',
                                            },
                                            {
                                                label: 'Планеты',
                                                route: routes.NUMBERS,
                                                type: 'planets',
                                            },
                                        ],
                                    })
                                }
                            />
                        </DropShadow>
                        {categories.map((value, index) => (
                            <CategoryCard
                                key={index}
                                category={value.label}
                                source={value.image}
                                onPress={() =>
                                    navigation.navigate(
                                        routes.CATEGORIES,
                                        value
                                    )
                                }
                            />
                        ))}
                    </HStack>
                </ScrollView>
            ) : (
                <SplashScreen error={error} refetch={refetch} />
            )}
        </Scaffold>
    )
}
