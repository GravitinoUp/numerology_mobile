import { ComponentProps } from 'react'
import { Text } from '@gluestack-ui/themed'
import { AppColors } from '@/constants/colors'

type TextProps = ComponentProps<typeof Text>

const DashboardLabel = ({ ...props }: TextProps) => (
    <Text fontSize="$lg" fontWeight="$bold" color={AppColors.text} {...props}>
        {props.children}
    </Text>
)

export default DashboardLabel
