import { HStack, VStack } from '@gluestack-ui/themed'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { TouchableOpacity } from 'react-native'
import { AppColors } from '@/constants/theme'
import { ACTIVE_OPACITY } from '@/constants/constants'

const NavigationBar = ({ ...props }: BottomTabBarProps) => (
    <HStack bgColor={AppColors.background} hardShadow="5" alignItems="center">
        {props.state.routes.map((route, index) => {
            const isFocused = props.state.index === index

            const { options } = props.descriptors[route.key]
            const icon = options.tabBarIcon!({
                focused: isFocused,
                color: isFocused
                    ? AppColors.primary
                    : AppColors.primaryInactive,
                size: 32,
            })

            const onPress = () => {
                const event = props.navigation.emit({
                    type: 'tabPress',
                    target: route.key,
                    canPreventDefault: true,
                })

                if (!isFocused && !event.defaultPrevented) {
                    props.navigation.navigate(route.name, route.params)
                }
            }

            return (
                <TouchableOpacity
                    style={{ flex: 1, paddingVertical: 32 }}
                    key={route.key}
                    onPress={onPress}
                    activeOpacity={ACTIVE_OPACITY}
                >
                    <VStack alignItems="center">{icon}</VStack>
                </TouchableOpacity>
            )
        })}
    </HStack>
)

export default NavigationBar
