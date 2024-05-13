import { useState } from 'react'
import { HStack, Text, VStack, View } from '@gluestack-ui/themed'
import { TouchableOpacity } from 'react-native'
import ChevronDown from '@/assets/icons/chevron-down'
import { ACTIVE_OPACITY } from '@/constants/constants'
import { AppColors, AppShapes } from '@/constants/theme'

type ExpandableCardProps = {
    prefix?: React.ReactNode
    title?: string
    content?: string
}

const ExpandableCard = ({ prefix, title, content }: ExpandableCardProps) => {
    const [expanded, setExpanded] = useState(true)

    return (
        <TouchableOpacity
            activeOpacity={ACTIVE_OPACITY}
            onPress={() => setExpanded(!expanded)}
        >
            <VStack>
                <HStack
                    h={80}
                    px="$4"
                    borderRadius={AppShapes.largeRadius}
                    borderWidth="$1"
                    borderColor={AppColors.border}
                    backgroundColor={AppColors.background}
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
                        transform={[{ rotate: expanded ? '180deg' : '0deg' }]}
                    >
                        <ChevronDown />
                    </View>
                </HStack>
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
