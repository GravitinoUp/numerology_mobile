import { useEffect, useState } from 'react'
import { DEFAULT_HOST } from '@env'
import { HStack, Text, VStack, View } from '@gluestack-ui/themed'
import { Dimensions, Image, TouchableOpacity } from 'react-native'
import ChevronDown from '@/assets/icons/chevron-down'
import {
    ACTIVE_OPACITY,
    MAX_WIDTH,
    MEDIUM_MAX_WIDTH,
} from '@/constants/constants'
import { AppColors, AppShapes } from '@/constants/theme'

type ExpandableCardProps = {
    prefix?: React.ReactNode
    title?: string
    content?: string
    image: string
}

const ExpandableCard = ({
    prefix,
    title,
    content,
    image,
}: ExpandableCardProps) => {
    const [expanded, setExpanded] = useState(true)

    const [windowQuery, setWindowQuery] = useState(
        Dimensions.get('window').width
    )
    const [windowWidth, setWindowWidth] = useState(
        Dimensions.get('window').width
    )

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
        <TouchableOpacity
            style={{
                width: '100%',
                maxWidth:
                    windowWidth >= MEDIUM_MAX_WIDTH
                        ? MAX_WIDTH
                        : MEDIUM_MAX_WIDTH,
            }}
            activeOpacity={ACTIVE_OPACITY}
            onPress={() => {
                setExpanded(!expanded)
            }}
        >
            <VStack>
                <VStack
                    borderRadius={AppShapes.largeRadius}
                    borderWidth="$1"
                    borderColor={AppColors.border}
                    backgroundColor={AppColors.background}
                    overflow="hidden"
                >
                    {image !== '' && (
                        <Image
                            style={{
                                width: '100%',
                                height: 180,
                                backgroundColor: AppColors.primary,
                            }}
                            source={{
                                uri: `${DEFAULT_HOST}${image}`,
                            }}
                        />
                    )}
                    <HStack
                        h={80}
                        px="$4"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        {prefix ? (
                            <View
                                bgColor={AppColors.proColor}
                                w="$12"
                                h="$12"
                                justifyContent="center"
                                alignItems="center"
                                borderRadius="$full"
                            >
                                {prefix}
                            </View>
                        ) : (
                            <View />
                        )}
                        <Text
                            fontWeight="$medium"
                            color={AppColors.text}
                            flexShrink={1}
                        >
                            {title}
                        </Text>
                        <View
                            transform={[
                                { rotate: expanded ? '180deg' : '0deg' },
                            ]}
                        >
                            <ChevronDown />
                        </View>
                    </HStack>
                </VStack>
                {expanded && (
                    <Text pt="$2" color={AppColors.text}>
                        {content}
                    </Text>
                )}
            </VStack>
        </TouchableOpacity>
    )
}

export default ExpandableCard
