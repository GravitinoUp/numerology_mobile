import { Text } from '@gluestack-ui/themed'
import { AppColors } from '@/constants/colors'

type StatusCardProps = {
    pro?: boolean
}

const StatusCard = ({ pro = false }: StatusCardProps) => (
    <Text
        w="$20"
        py="$1"
        borderRadius="$full"
        bgColor={pro ? AppColors.proColor : AppColors.trialColor}
        fontWeight="$bold"
        color={AppColors.text}
        textAlign="center"
    >
        {pro ? 'Pro' : 'Trial'}
    </Text>
)

export default StatusCard
