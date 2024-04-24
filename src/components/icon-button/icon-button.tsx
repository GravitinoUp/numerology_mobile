import { StyleProp, TouchableOpacity, ViewStyle } from 'react-native'

type IconButtonProps = {
    style?: StyleProp<ViewStyle>
    icon: React.ReactNode
    onPress: () => void
}

const IconButton = ({ style, icon, onPress }: IconButtonProps) => (
    <TouchableOpacity
        style={[style, { padding: 16 }]}
        activeOpacity={0.8}
        onPress={onPress}
    >
        {icon}
    </TouchableOpacity>
)

export default IconButton
