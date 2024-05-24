import { ComponentProps } from 'react'
import { HStack, Switch, Text, VStack } from '@gluestack-ui/themed'
import { AppColors } from '@/constants/theme'

type SwitchProps = ComponentProps<typeof Switch>
type Props = {
    label: string
    description: string
} & SwitchProps

const AppSwitch = ({ label, description, ...props }: Props) => (
    <HStack
        justifyContent="space-between"
        alignItems="center"
        onTouchEnd={() => {
            if (props.onValueChange && typeof props.value !== 'undefined') {
                props.onValueChange(!props.value)
            }
        }}
    >
        <VStack flex={1}>
            <Text fontWeight="$medium" color={AppColors.text} flexShrink={1}>
                {label}
            </Text>
            <Text fontSize="$sm" color={AppColors.hint} flexShrink={1}>
                {description}
            </Text>
        </VStack>
        <Switch aria-label={label} {...props} />
    </HStack>
)

export default AppSwitch
