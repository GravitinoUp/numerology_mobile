import { Text, VStack } from '@gluestack-ui/themed'
import { TouchableOpacity } from 'react-native'
import { AppColors, AppShapes } from '@/constants/theme'

type SubscriptionCardProps = {
    label: string
    description?: string
    selected?: boolean
    onPress?: () => void
}

const SubscriptionCard = ({
    label,
    description,
    selected = false,
    onPress,
}: SubscriptionCardProps) => (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
        <VStack
            h={80}
            px="$4"
            justifyContent="center"
            alignItems="center"
            borderRadius={AppShapes.largeRadius}
            borderWidth="$1"
            borderColor={AppColors.border}
            backgroundColor={
                selected ? AppColors.proColor : AppColors.background
            }
        >
            <Text
                fontWeight="$bold"
                color={selected ? AppColors.text : AppColors.hint}
            >
                {label}
            </Text>
            {description && (
                <Text fontWeight="$bold" color={AppColors.text}>
                    {description}
                </Text>
            )}
        </VStack>
    </TouchableOpacity>
)

export default SubscriptionCard
