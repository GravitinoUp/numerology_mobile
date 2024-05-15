import { ComponentProps } from 'react'
import { HStack, Switch, Text } from '@gluestack-ui/themed'

type SwitchProps = ComponentProps<typeof Switch>
type Props = {
    label: string
} & SwitchProps

const AppSwitch = ({ label, ...props }: Props) => (
    <HStack
        justifyContent="space-between"
        alignItems="center"
        onTouchEnd={() => {
            if (props.onValueChange && typeof props.value !== 'undefined') {
                props.onValueChange(!props.value)
            }
        }}
    >
        <Text>{label}</Text>
        <Switch aria-label={label} {...props} />
    </HStack>
)

export default AppSwitch
