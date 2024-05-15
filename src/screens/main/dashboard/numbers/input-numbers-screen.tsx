import { useEffect, useState } from 'react'
import { Center, ScrollView, Text, VStack } from '@gluestack-ui/themed'
import { Image } from 'react-native'
import NumbersLayout from './components/numbers-layout'
import PageLabel from '@/components/page/page-label'
import AppInput from '@/components/ui/input'
import { INPUT_LENGTH } from '@/constants/constants'
import { AppColors, AppShapes } from '@/constants/theme'
import { useGetSingleNumberQuery } from '@/redux/api/numbers'
import SplashScreen from '@/screens/splash/splash-screen'
import { DefaultStackScreenProps } from '@/types/interface'
import { PageInterface } from '@/types/interface/pages'

export default function InputNumbersScreen({
    navigation,
    route,
}: DefaultStackScreenProps) {
    const routeParams = route.params as PageInterface
    const length = INPUT_LENGTH[routeParams.key]

    const [query, setQuery] = useState('')
    const [input, setInput] = useState('')

    const { data, isFetching, isSuccess, error, refetch } =
        useGetSingleNumberQuery(
            { type: routeParams.key, query: query },
            { skip: query === '' }
        )

    const successLoad = !isFetching && isSuccess

    useEffect(() => {
        const delayTimeoutId = setTimeout(() => {
            if (
                input.trim().length >= length[0] &&
                input.trim().length <= length[1]
            ) {
                setQuery(input.trim())
            }
        }, 500)
        return () => clearTimeout(delayTimeoutId)
    }, [input])

    return (
        <NumbersLayout
            description={routeParams.page_description}
            navigation={navigation}
        >
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
                    bgColor={routeParams.color}
                    type={routeParams.key}
                    top={-22}
                >
                    {routeParams.page_name}
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
                        maxLength={length[1]}
                        required
                    />
                    {input.trim().length >= length[0] &&
                    input.trim().length <= length[1] ? (
                        successLoad ? (
                            <Text color={AppColors.text}>
                                {data.result_content}
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
