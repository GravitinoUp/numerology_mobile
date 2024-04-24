import { ComponentProps } from 'react'
import { Input, InputField, InputSlot, Text } from '@gluestack-ui/themed'
import {
    GestureResponderEvent,
    StyleProp,
    StyleSheet,
    TouchableOpacity,
    View,
    ViewStyle,
} from 'react-native'
import { AppColors } from '@/constants/colors'

type InputFieldProps = ComponentProps<typeof InputField>
type TextProps = ComponentProps<typeof Text>

type AppInputProps = {
    style?: StyleProp<ViewStyle>
    value: string
    onChangeText?: (text: string) => void
    required?: boolean
    hint?: string
    hintStyle?: TextProps
    trailingIcon?: React.JSX.Element
    onTrailingIconPress?: () => void
    leadingIcon?: React.JSX.Element
    onTouchEnd?: ((event: GestureResponderEvent) => void) | undefined
} & InputFieldProps

const AppInput = ({
    style,
    value,
    onChangeText,
    required = false,
    hint,
    hintStyle = {
        fontSize: '$sm',
        color: AppColors.text,
    },
    minHeight,
    leadingIcon,
    trailingIcon,
    onTrailingIconPress,
    onTouchEnd,
    ...props
}: AppInputProps) => (
    <View style={style}>
        {hint && (
            <Text mb="$1">
                <Text {...hintStyle}>{hint}</Text>
                {required && (
                    <Text {...hintStyle} color={AppColors.error}>
                        {' *'}
                    </Text>
                )}
            </Text>
        )}
        <Input
            variant="rounded"
            h={props.multiline ? undefined : 52}
            minHeight={minHeight}
            borderColor={AppColors.border}
            $focus-borderColor={AppColors.borderActive}
            $invalid-borderColor={AppColors.error}
            borderRadius="$lg"
            borderWidth={1.5}
            onTouchEnd={onTouchEnd}
            isReadOnly={props.readOnly}
        >
            {leadingIcon && (
                <InputSlot style={styles.leading}>{leadingIcon}</InputSlot>
            )}
            <InputField
                value={value}
                onChangeText={onChangeText}
                fontSize={14}
                color={AppColors.text}
                px={16}
                {...props}
            />
            {trailingIcon && (
                <TouchableOpacity
                    style={styles.trailing}
                    onPress={onTrailingIconPress}
                >
                    {trailingIcon}
                </TouchableOpacity>
            )}
        </Input>
    </View>
)

const styles = StyleSheet.create({
    leading: {
        paddingLeft: 16,
        justifyContent: 'center',
    },
    trailing: {
        paddingHorizontal: 16,
        justifyContent: 'center',
    },
    hintText: {
        fontSize: 14,
        color: AppColors.text,
        paddingBottom: 6,
    },
})

export default AppInput
