import { ComponentProps } from 'react'
import { StyleProp, ViewStyle } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AppColors } from '@/constants/theme'

type SafeAreaViewProps = ComponentProps<typeof SafeAreaView>
type ScaffoldProps = {
    style?: StyleProp<ViewStyle>
} & SafeAreaViewProps

const Scaffold = ({ style, ...props }: ScaffoldProps) => (
    <SafeAreaView
        style={[
            {
                flex: 1,
                backgroundColor: AppColors.background,
            },
            style,
        ]}
        {...props}
    >
        {props.children}
    </SafeAreaView>
)

export default Scaffold
