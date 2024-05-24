import { ComponentProps } from 'react'
import {
    Actionsheet,
    ActionsheetBackdrop,
    ActionsheetContent,
    ActionsheetDragIndicator,
    ActionsheetDragIndicatorWrapper,
    Text,
    VStack,
} from '@gluestack-ui/themed'
import { StyleProp, ViewStyle } from 'react-native'
import { AppColors } from '../../constants/theme'

type ActionsheetContentProps = ComponentProps<typeof ActionsheetContent>
type Props = {
    style?: StyleProp<ViewStyle>
    title?: string
    children?: React.ReactNode
    isOpen: boolean
    onClose: () => void
} & ActionsheetContentProps

const AppActionsheet = ({
    style,
    title,
    children,
    isOpen,
    onClose,
    ...props
}: Props) => (
    <Actionsheet isOpen={isOpen} onClose={onClose} zIndex={999}>
        <ActionsheetBackdrop />
        <ActionsheetContent backgroundColor={AppColors.background} {...props}>
            <ActionsheetDragIndicatorWrapper>
                <ActionsheetDragIndicator />
            </ActionsheetDragIndicatorWrapper>
            {title && (
                <Text
                    mt="$1"
                    fontSize="$lg"
                    fontWeight="$semibold"
                    color={AppColors.text}
                    textAlign="center"
                >
                    {title}
                </Text>
            )}
            <VStack style={style} width="100%" justifyContent={'center'}>
                {children}
            </VStack>
        </ActionsheetContent>
    </Actionsheet>
)

export default AppActionsheet
