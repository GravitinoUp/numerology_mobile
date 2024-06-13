import { Fragment, useEffect, useState } from 'react'
import { HStack, ScrollView, Text, VStack, View } from '@gluestack-ui/themed'
import { useTranslation } from 'react-i18next'
import { Dimensions, Platform } from 'react-native'
import DropShadow from 'react-native-drop-shadow'
import CategoryCard from '@/components/dashboard/category-card'
import StatusCard from '@/components/status-card/status-card'
import AppButton from '@/components/ui/button'
import Dialog from '@/components/ui/dialog'
import Scaffold from '@/components/ui/scaffold'
import { routes } from '@/constants/routes'
import { AppColors } from '@/constants/theme'
import { useGetCategoriesQuery } from '@/redux/api/pages'
import SplashScreen from '@/screens/splash/splash-screen'
import { DefaultStackScreenProps } from '@/types/interface'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export default function DashboardScreen({
    navigation,
}: DefaultStackScreenProps) {
    const { t } = useTranslation()
    const insets = useSafeAreaInsets()

    const [disabledOpen, setDisabledOpen] = useState(false)
    const [proDialogOpen, setProDialogOpen] = useState(false)

    const [windowQuery, setWindowQuery] = useState(
        Dimensions.get('window').width
    )
    const [windowWidth, setWindowWidth] = useState(
        Dimensions.get('window').width
    )

    const {
        data: categories = [],
        isFetching: categoriesFetching,
        isSuccess: categoriesSuccess,
        error: categoriesError,
        refetch: categoriesRefetch,
    } = useGetCategoriesQuery()

    const successLoad = !categoriesFetching && categoriesSuccess

    Dimensions.addEventListener('change', ({ window }) => {
        setWindowQuery(window.width)
    })
    useEffect(() => {
        const delayTimeoutId = setTimeout(() => {
            if (windowWidth !== windowQuery) {
                setWindowWidth(windowQuery)
            }
        }, 500)

        return () => clearTimeout(delayTimeoutId)
    }, [windowQuery])

    return (
        <Fragment>
            <Dialog
                title={t('category.disabled')}
                isOpen={disabledOpen}
                setOpen={setDisabledOpen}
                footer={
                    <HStack justifyContent="flex-end">
                        <View style={{ flex: 1 }} />
                        <AppButton
                            style={{ flex: 1 }}
                            textProps={{
                                fontSize: '$sm',
                                fontWeight: '$normal',
                            }}
                            px="$1"
                            text={t('action.ok')}
                            onPress={() => setDisabledOpen(false)}
                        />
                    </HStack>
                }
            >
                <Text fontSize="$sm">{t('category.disabled.description')}</Text>
            </Dialog>
            <Dialog
                title={t('required.pro.title')}
                isOpen={proDialogOpen}
                setOpen={setProDialogOpen}
                footer={
                    <HStack gap="$2">
                        <AppButton
                            style={{ flex: 1 }}
                            text={t('action.cancel')}
                            textProps={{
                                color: AppColors.text,
                                fontSize: '$sm',
                                fontWeight: '$normal',
                            }}
                            px="$1"
                            bgColor={AppColors.transparent}
                            onPress={() => setProDialogOpen(false)}
                        />
                        <AppButton
                            style={{ flex: 1 }}
                            textProps={{
                                fontSize: '$sm',
                                fontWeight: '$normal',
                            }}
                            px="$1"
                            text={t('action.buy')}
                            onPress={() => setProDialogOpen(false)}
                        />
                    </HStack>
                }
            >
                <Text fontSize="$sm">{t('required.pro.content')}</Text>
            </Dialog>
            <Scaffold>
                <HStack
                    position="absolute"
                    w="$full"
                    px="$4"
                    justifyContent="flex-end"
                    alignItems="center"
                    h={80}
                    zIndex={100}
                    marginTop={Platform.OS === 'ios' ? insets.top : undefined}
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
                        <HStack
                            pt="$6"
                            px="$6"
                            pb="$6"
                            gap="$4"
                            flexWrap="wrap"
                        >
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
                                            source={value.category_image}
                                            onPress={() => {
                                                navigation.navigate(
                                                    routes.CATEGORY,
                                                    value
                                                )
                                            }}
                                            onLockedPress={() =>
                                                setProDialogOpen(true)
                                            }
                                            disabled={!value.is_active}
                                            onDisabledPress={() =>
                                                setDisabledOpen(true)
                                            }
                                        />
                                    </DropShadow>
                                ) : (
                                    <CategoryCard
                                        key={index}
                                        index={index}
                                        w={windowWidth / 2 - 32}
                                        h={windowWidth / 2 - 32}
                                        category={value.category_name}
                                        source={value.category_image}
                                        onPress={() => {
                                            navigation.navigate(
                                                routes.CATEGORY,
                                                value
                                            )
                                        }}
                                        onLockedPress={() =>
                                            setProDialogOpen(true)
                                        }
                                        disabled={!value.is_active}
                                        onDisabledPress={() =>
                                            setDisabledOpen(true)
                                        }
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
        </Fragment>
    )
}
