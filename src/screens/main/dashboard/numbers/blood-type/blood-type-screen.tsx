import { Fragment, useState } from 'react'
import { HStack, Text, VStack } from '@gluestack-ui/themed'
import { useTranslation } from 'react-i18next'
import { Dimensions, Image } from 'react-native'
import Config from 'react-native-config'
import NumbersLayout from '../components/numbers-layout'
import ExpandableCard from '@/components/expandable-card/expandable-card'
import PageLabel from '@/components/page/page-label'
import AppButton from '@/components/ui/button'
import AppScrollView from '@/components/ui/scroll-view'
import { MEDIUM_MAX_WIDTH } from '@/constants/constants'
import { AppColors, AppShapes } from '@/constants/theme'
import { useGetNumbersQuery } from '@/redux/api/numbers'
import SplashScreen from '@/screens/splash/splash-screen'
import { DefaultStackScreenProps } from '@/types/interface'
import { PageInterface } from '@/types/interface/pages'

export default function BloodTypeScreen({
    navigation,
    route,
}: DefaultStackScreenProps) {
    const { t } = useTranslation()

    const routeParams = route.params as PageInterface

    const [selectedType, setSelectedType] = useState<number>()

    const { data, isFetching, isSuccess, error, refetch } = useGetNumbersQuery(
        {
            type: routeParams.key,
            query: selectedType,
        },
        { skip: !selectedType }
    )

    const successLoad = !isFetching && isSuccess

    const bloodTypes = [1, 2, 3, 4]

    return (
        <NumbersLayout
            description={routeParams.page_description}
            navigation={navigation}
        >
            <AppScrollView
                contentContainerStyle={{ justifyContent: 'flex-start' }}
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
                <VStack px="$4" pb="$4" gap="$4">
                    <Text
                        fontSize="$lg"
                        fontWeight="$semibold"
                        color={AppColors.text}
                        textAlign="center"
                    >
                        {t('select.blood.type')}
                    </Text>
                    <HStack justifyContent="center" gap="$4">
                        {bloodTypes.map((value, index) => (
                            <AppButton
                                key={index}
                                text={String(value)}
                                textProps={{
                                    color:
                                        selectedType === value
                                            ? AppColors.background
                                            : AppColors.primary,
                                }}
                                borderWidth="$1"
                                borderColor={AppColors.primary}
                                bgColor={
                                    selectedType === value
                                        ? AppColors.primary
                                        : AppColors.background
                                }
                                onPress={() => setSelectedType(value)}
                            />
                        ))}
                    </HStack>
                    {selectedType ? (
                        successLoad ? (
                            data.map((value, index) => (
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
                                    adaptive={false}
                                />
                            ))
                        ) : (
                            <SplashScreen error={error} refetch={refetch} />
                        )
                    ) : (
                        <Fragment />
                    )}
                </VStack>
            </AppScrollView>
        </NumbersLayout>
    )
}
