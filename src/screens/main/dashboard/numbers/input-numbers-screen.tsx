import { useState } from 'react'
import { ScrollView, Text, VStack } from '@gluestack-ui/themed'
import { Image } from 'react-native'
import NumbersLayout from './components/numbers-layout'
import getCardColor from '@/components/card-button/get-card-color'
import PageLabel from '@/components/page/page-label'
import { AppColors, AppShapes } from '@/constants/theme'
import { useGetSingleNumberQuery } from '@/redux/api/numbers'
import SplashScreen from '@/screens/splash/splash-screen'
import { DefaultStackScreenProps } from '@/types/interface'
import { PageType } from '@/types/interface/numbers'

export default function InputNumbersScreen({
    navigation,
    route,
}: DefaultStackScreenProps) {
    const routeParams = route.params as { label: string; type: PageType }

    const [input, setInput] = useState('')

    const { data, isFetching, isSuccess, error, refetch } =
        useGetSingleNumberQuery(
            { type: routeParams.type, query: input.trim() },
            { skip: input.trim() === '' }
        )

    const successLoad = !isFetching && isSuccess

    return (
        <NumbersLayout navigation={navigation}>
            {true ? ( // success load page
                <ScrollView>
                    <Image
                        style={{
                            height: 180,
                            backgroundColor: AppColors.primary,
                            borderRadius: AppShapes.largeRadius,
                            marginHorizontal: 16,
                        }}
                        source={{ uri: '' }}
                    />
                    <PageLabel
                        bgColor={getCardColor(routeParams.type)}
                        type={routeParams.type}
                        top={-22}
                    >
                        {routeParams.label}
                    </PageLabel>
                    <VStack p="$4" gap="$4">
                        {successLoad && (
                            <Text color={AppColors.text}>
                                {data.page_content}
                            </Text>
                        )}
                    </VStack>
                </ScrollView>
            ) : (
                <SplashScreen error={error} refetch={refetch} />
            )}
        </NumbersLayout>
    )
}
