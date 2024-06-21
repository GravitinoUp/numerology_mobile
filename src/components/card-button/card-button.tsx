import { HStack, Text, View } from '@gluestack-ui/themed'
import { animated, useSpring } from '@react-spring/native'
import { TouchableOpacity } from 'react-native'
import ChevronRight from '@/assets/icons/chevron-right'
import LockedIcon from '@/assets/icons/locked'
import { ACTIVE_OPACITY } from '@/constants/constants'
import { AppColors } from '@/constants/theme'

type CardButtonProps = {
    index: number
    prefix?: React.ReactNode
    label: string
    onPress?: () => void
    locked?: boolean
    onLockedPress?: () => void
}

const AnimatedView = animated(View)

const CardButton = ({
    index,
    prefix,
    label,
    onPress,
    locked,
    onLockedPress,
}: CardButtonProps) => {
    const animatedOpacity = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: index * 100,
    })

    return (
        <AnimatedView
            style={animatedOpacity}
            h="$20"
            bgColor={AppColors.background}
            borderWidth={1}
            borderColor={AppColors.border}
            borderRadius={20}
            overflow="hidden"
            justifyContent="center"
        >
            {locked && (
                <View
                    position="absolute"
                    alignItems="flex-end"
                    justifyContent="center"
                    w="$full"
                    h="$full"
                    zIndex={2}
                    onTouchEnd={onLockedPress}
                >
                    <View
                        position="absolute"
                        w="$full"
                        h="$full"
                        bgColor={AppColors.background}
                        opacity={0.7}
                        borderRadius={20}
                        zIndex={-1}
                    />
                    <View p="$3">
                        <LockedIcon />
                    </View>
                </View>
            )}
            <TouchableOpacity activeOpacity={ACTIVE_OPACITY} onPress={onPress}>
                <HStack
                    h="$20"
                    justifyContent="space-between"
                    alignItems="center"
                    pr="$4"
                >
                    <HStack flex={1} alignItems="center">
                        {prefix && (
                            <View
                                w="$20"
                                h="$20"
                                justifyContent="center"
                                alignItems="center"
                            >
                                {prefix}
                            </View>
                        )}
                        <Text
                            ml={prefix ? '$2' : '$4'}
                            fontWeight="$bold"
                            color={AppColors.text}
                            flexShrink={1}
                        >
                            {label}
                        </Text>
                    </HStack>
                    <ChevronRight color={AppColors.text} fontWeight="900" />
                </HStack>
            </TouchableOpacity>
        </AnimatedView>
    )
}

export default CardButton
