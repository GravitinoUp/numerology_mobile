import { HStack, Text, View } from '@gluestack-ui/themed'
import { TouchableOpacity } from 'react-native'
import ChevronRight from '@/assets/icons/chevron-right'
import { AppColors } from '@/constants/colors'
import { ACTIVE_OPACITY } from '@/constants/constants'

type CardButtonProps = {
    prefix?: React.ReactNode
    label: string
    onPress?: () => void
}

const CardButton = ({ prefix, label, onPress }: CardButtonProps) => (
    <View
        h="$20"
        bgColor={AppColors.background}
        borderWidth={1}
        borderColor={AppColors.border}
        borderRadius={20}
        overflow="hidden"
        justifyContent="center"
    >
        <TouchableOpacity activeOpacity={ACTIVE_OPACITY} onPress={onPress}>
            <HStack justifyContent="space-between" alignItems="center" pr="$4">
                <HStack flex={1} alignItems="center">
                    <View
                        w="$20"
                        h="$20"
                        mr="$2"
                        justifyContent="center"
                        alignItems="center"
                    >
                        {prefix}
                    </View>
                    <Text
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
    </View>
)

export default CardButton
