import { HStack, Text, View } from '@gluestack-ui/themed'
import { TouchableOpacity } from 'react-native'
import ChevronRight from '@/assets/icons/chevron-right'
import { AppColors } from '@/constants/colors'
import { ACTIVE_OPACITY } from '@/constants/constants'

type CardButtonProps = {
    label: string
    onPress?: () => void
}

const CardButton = ({ label, onPress }: CardButtonProps) => (
    <View
        softShadow="1"
        shadowColor="#00000040"
        bgColor={AppColors.background}
        borderRadius="$2xl"
        overflow="hidden"
    >
        <TouchableOpacity activeOpacity={ACTIVE_OPACITY} onPress={onPress}>
            <HStack justifyContent="space-between" alignItems="center" pr="$4">
                <HStack flex={1} alignItems="center">
                    <View bgColor={AppColors.primary} w="$20" h="$20" mr="$3" />
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
