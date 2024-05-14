import { useEffect, useState } from 'react'
import { Center, ScrollView, Text, VStack } from '@gluestack-ui/themed'
import { Image } from 'react-native'
import NumbersLayout from './components/numbers-layout'
import getCardColor from '@/components/card-button/get-card-color'
import PageLabel from '@/components/page/page-label'
import AppInput from '@/components/ui/input'
import { INPUT_LENGTH } from '@/constants/constants'
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
    const maxLength = INPUT_LENGTH[routeParams.type]

    const [query, setQuery] = useState('')
    const [input, setInput] = useState('')

    const { data, isFetching, isSuccess, error, refetch } =
        useGetSingleNumberQuery(
            { type: routeParams.type, query: query },
            { skip: query === '' }
        )

    const successLoad = !isFetching && isSuccess

    useEffect(() => {
        const delayTimeoutId = setTimeout(() => {
            if (input.trim().length >= maxLength) {
                setQuery(input.trim())
            }
        }, 500)
        return () => clearTimeout(delayTimeoutId)
    }, [input])

    return (
        <NumbersLayout navigation={navigation}>
            <ScrollView>
                <Image
                    style={{
                        height: 180,
                        backgroundColor: AppColors.primary,
                        borderRadius: AppShapes.largeRadius,
                        marginHorizontal: 16,
                    }}
                    source={{ uri: '1' }}
                />
                <PageLabel
                    bgColor={getCardColor(routeParams.type)}
                    type={routeParams.type}
                    top={-22}
                >
                    {routeParams.label}
                </PageLabel>
                <VStack p="$4" gap="$4">
                    <AppInput
                        style={{ flex: 1 }}
                        h={80}
                        borderRadius={AppShapes.largeRadius}
                        textAlign="center"
                        value={input}
                        onChangeText={setInput}
                        placeholder={'Введите число'}
                        fontSize="$md"
                        fontWeight="$bold"
                        inputMode="numeric"
                        maxLength={maxLength}
                        required
                    />
                    {input.trim().length >= maxLength ? (
                        successLoad ? (
                            <Text color={AppColors.text}>
                                {data.page_content}
                            </Text>
                        ) : (
                            <SplashScreen error={error} refetch={refetch} />
                        )
                    ) : (
                        <Center>
                            <Text
                                fontSize="$lg"
                                fontWeight="$medium"
                                color={AppColors.hint}
                                textAlign="center"
                            >
                                {/* TODO hint */}
                            </Text>
                        </Center>
                    )}
                </VStack>
            </ScrollView>
        </NumbersLayout>
    )
}
