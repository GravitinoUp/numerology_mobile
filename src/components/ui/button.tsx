import React, { ComponentProps, Fragment } from 'react'
import { Button, ButtonSpinner, ButtonText } from '@gluestack-ui/themed'
import { StyleProp, ViewStyle } from 'react-native'
import { AppColors } from '@/constants/theme'

type ButtonProps = ComponentProps<typeof Button>
type ButtonTextProps = ComponentProps<typeof ButtonText>
type AppButtonProps = {
    onPress: () => void
    style?: StyleProp<ViewStyle>
    text: string
    textProps?: ButtonTextProps
    prefixIcon?: React.ReactNode
    suffixIcon?: React.ReactNode
    isLoading?: boolean
} & ButtonProps

const AppButton = ({
    style,
    text,
    textProps: textStyle = {
        fontSize: 15,
        fontWeight: '$bold',
        color: AppColors.textOnPrimary,
    },
    prefixIcon,
    suffixIcon,
    backgroundColor = AppColors.primary,
    borderColor = '#00000000',
    isLoading = false,
    ...props
}: AppButtonProps) => (
    <Button
        key={props.key}
        style={style}
        h={52}
        backgroundColor={backgroundColor}
        borderColor={borderColor}
        borderRadius="$lg"
        $disabled-opacity="$75"
        {...props}
        isDisabled={props.isDisabled || isLoading}
    >
        {!isLoading && (
            <Fragment>
                {prefixIcon}
                <ButtonText mx="$1" textAlign={'center'} {...textStyle}>
                    {text}
                </ButtonText>
                {suffixIcon}
            </Fragment>
        )}
        {isLoading && <ButtonSpinner ml="$2" />}
    </Button>
)

export default AppButton
