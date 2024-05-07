import { StyleProp, TouchableOpacity, ViewStyle } from 'react-native'

type IconButtonProps = {
    style?: StyleProp<ViewStyle>
    icon: React.ReactNode
    onPress: () => void
}

const IconButton = ({ style, icon, onPress }: IconButtonProps) => (
    <TouchableOpacity
        style={[
            style,
            {
                width: 40,
                height: 40,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 100,
            },
        ]}
        activeOpacity={0.8}
        onPress={onPress}
    >
        {icon}
    </TouchableOpacity>
)

export default IconButton
