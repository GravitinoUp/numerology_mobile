import { HStack, Text } from '@gluestack-ui/themed'
import { TouchableOpacity } from 'react-native'
import ChevronRight from '@/assets/icons/chevron-right'
import { ACTIVE_OPACITY } from '@/constants/constants'
import { AppColors } from '@/constants/theme'

type NotificationCardProps = {
    title: string
    onPress?: () => void
}

const NotificationCard = ({ title, onPress }: NotificationCardProps) => (
    <TouchableOpacity activeOpacity={ACTIVE_OPACITY} onPress={onPress}>
        <HStack
            h="$20"
            px="$4"
            bgColor={AppColors.background}
            borderWidth={1}
            borderColor={AppColors.border}
            borderRadius={20}
            overflow="hidden"
            justifyContent="space-between"
            alignItems="center"
        >
            <Text
                fontSize="$lg"
                fontWeight="$bold"
                color={AppColors.text}
                numberOfLines={2}
                flexShrink={1}
            >
                {title}
            </Text>
            <ChevronRight />
        </HStack>
    </TouchableOpacity>
)

export default NotificationCard
