import { Text, View } from '@gluestack-ui/themed'
import { AppColors } from '@/constants/theme'

type StatusCardProps = {
    pro?: boolean
}

const StatusCard = ({ pro = false }: StatusCardProps) => (
    <View 
        borderRadius="$full"
        bgColor={pro ? AppColors.proColor : AppColors.trialColor}
    >
        <Text
            w="$20"
            py="$1"
            fontWeight="$bold"
            color={AppColors.text}
            textAlign="center"
        >
            {pro ? 'Pro' : 'Trial'}
        </Text>
    </View>
)

export default StatusCard
