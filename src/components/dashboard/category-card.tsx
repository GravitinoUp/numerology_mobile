import { ComponentProps } from 'react'
import { HStack, Text, View } from '@gluestack-ui/themed'
import { animated, useSpring } from '@react-spring/native'
import {
    Dimensions,
    Image,
    ImageSourcePropType,
    TouchableOpacity,
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import ChevronRightAlt from '@/assets/icons/chevron-right-alt'
import { ACTIVE_OPACITY } from '@/constants/constants'
import { AppColors } from '@/constants/theme'

type ViewProps = ComponentProps<typeof View>
type CategoryCardProps = {
    index: number
    category: string
    source?: ImageSourcePropType
    onPress?: () => void
} & ViewProps

const AnimatedView = animated(View)

const CategoryCard = ({
    index,
    category,
    source,
    onPress,
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
                        source={source}
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
