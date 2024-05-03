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
    <View softShadow="1" bgColor={AppColors.background} borderRadius="$2xl">
        <TouchableOpacity activeOpacity={ACTIVE_OPACITY} onPress={onPress}>
            <HStack
                px="$5"
                py="$8"
                justifyContent="space-between"
                alignItems="center"
            >
                <Text fontWeight="$bold" color={AppColors.text}>
                    {label}
                </Text>
                <ChevronRight color={AppColors.text} fontWeight="900" />
            </HStack>
        </TouchableOpacity>
    </View>
)

export default CardButton
