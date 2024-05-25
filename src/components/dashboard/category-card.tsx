import { ComponentProps } from 'react'
import { HStack, Text, View } from '@gluestack-ui/themed'
import { animated, useSpring } from '@react-spring/native'
import { Dimensions, Image, TouchableOpacity } from 'react-native'
import Config from 'react-native-config'
import LinearGradient from 'react-native-linear-gradient'
import ChevronRightAlt from '@/assets/icons/chevron-right-alt'
import LockedIcon from '@/assets/icons/locked'
import { ACTIVE_OPACITY } from '@/constants/constants'
import { AppColors } from '@/constants/theme'

type ViewProps = ComponentProps<typeof View>
type CategoryCardProps = {
    index: number
    category: string
    source?: string
    locked?: boolean
    onPress?: () => void
    onLockedPress?: () => void
} & ViewProps

const AnimatedView = animated(View)

const CategoryCard = ({
    index,
    category,
    source,
    locked = false,
    onPress,
    onLockedPress,
    ...props
}: CategoryCardProps) => {
    const windowWidth = Dimensions.get('window').width / 2 - 32

    const animatedOpacity = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: index * 100,
    })

    return (
        <AnimatedView style={animatedOpacity}>
            {locked && (
                <View
                    position="absolute"
                    alignItems="flex-end"
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
                    <View p="$4">
                        <LockedIcon />
                    </View>
                </View>
            )}
            <View
                w={windowWidth}
                h={windowWidth}
                borderWidth="$2"
                borderColor={AppColors.border}
                borderRadius={20}
                bgColor={AppColors.primary}
                justifyContent="center"
                alignItems="center"
                overflow="hidden"
                {...props}
            >
                <LinearGradient
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        zIndex: 2,
                    }}
                    colors={['#00000000', '#00000040', '#000000FF']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0.7, y: 0.2 }}
                />
                {source && (
                    <Image
                        style={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                        }}
                        source={{ uri: `${Config.DEFAULT_HOST}${source}` }}
                        width={windowWidth}
                        height={windowWidth}
                    />
                )}
                <TouchableOpacity
                    style={{ zIndex: 3 }}
                    activeOpacity={ACTIVE_OPACITY}
                    onPress={onPress}
                >
                    <HStack
                        p="$4"
                        w="$full"
                        h="$full"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <View />
                        <Text
                            w="$3/4"
                            textTransform="uppercase"
                            fontSize="$lg"
                            fontWeight="$black"
                            color={AppColors.background}
                        >
                            {category}
                        </Text>
                        {props.w === '$full' ? <ChevronRightAlt /> : <View />}
                    </HStack>
                </TouchableOpacity>
            </View>
        </AnimatedView>
    )
}

export default CategoryCard
