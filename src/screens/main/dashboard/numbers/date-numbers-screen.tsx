import { useState } from 'react'
import { Text, VStack, View } from '@gluestack-ui/themed'
import { Dimensions, Image } from 'react-native'
import Config from 'react-native-config'
import DatePicker from 'react-native-date-picker'
import NumbersLayout from './components/numbers-layout'
import ExpandableCard from '@/components/expandable-card/expandable-card'
import PageLabel from '@/components/page/page-label'
import AppScrollView from '@/components/ui/scroll-view'
import { MEDIUM_MAX_WIDTH } from '@/constants/constants'
import { AppColors, AppShapes } from '@/constants/theme'
import { useGetNumbersQuery } from '@/redux/api/numbers'
import SplashScreen from '@/screens/splash/splash-screen'
import { DefaultStackScreenProps } from '@/types/interface'
import { PageInterface } from '@/types/interface/pages'

export default function DateNumbersScreen({
    navigation,
    route,
}: DefaultStackScreenProps) {
    const routeParams = route.params as PageInterface

    const [date, setDate] = useState(new Date())

    const { data, isFetching, isSuccess, error, refetch } = useGetNumbersQuery({
        type: routeParams.key,
        query: date.toString(),
    })

    const successLoad = !isFetching && isSuccess

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
                <VStack p="$4" gap="$4">
                    <View
                        borderRadius="$lg"
                        borderColor={AppColors.border}
                        borderWidth="$1"
                        alignItems="center"
                    >
                        <DatePicker
                            mode="date"
                            theme="light"
                            date={date}
                            onDateChange={setDate}
                        />
                    </View>
                    {successLoad ? (
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
                    )}
                </VStack>
            </AppScrollView>
        </NumbersLayout>
    )
}
