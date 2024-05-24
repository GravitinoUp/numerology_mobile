import { ComponentProps } from 'react'
import {
    Select,
    SelectPortal,
    SelectBackdrop,
    SelectContent,
    SelectDragIndicatorWrapper,
    SelectDragIndicator,
    SelectItem,
    ChevronDownIcon,
    Icon,
    SelectInput,
    SelectTrigger,
    SelectScrollView,
    Text,
} from '@gluestack-ui/themed'
import i18next from 'i18next'
import { StyleProp, StyleSheet, TextStyle, View, ViewStyle } from 'react-native'
import { AppColors } from '@/constants/theme'

export interface SelectItemInterface {
    label: string
    value: string
    isDisabled?: boolean
}

type SelectProps = ComponentProps<typeof Select>
type Props = {
    style?: StyleProp<ViewStyle>
    hint?: string
    hintStyle?: StyleProp<TextStyle>
    items: SelectItemInterface[]
    selectedValue: string
    onValueChange: (value: string) => void
} & SelectProps

const AppSelect = ({
    style,
    items,
    selectedValue,
    onValueChange,
    hint,
    hintStyle,
    placeholder = i18next.t('placeholder.select.value'),
    h = 52,
    ...props
}: Props) => (
    <View style={style}>
        {hint && <Text style={[styles.hintText, hintStyle]}>{hint}</Text>}
        <Select
            h={h}
            {...props}
            initialLabel={
                items.find((item) => item.value === selectedValue)?.label
            }
            selectedValue={selectedValue}
            onValueChange={onValueChange}
        >
            <SelectTrigger
                h={h}
                pl="$4"
                pr="$2"
                variant="rounded"
                borderRadius="$lg"
            >
                <SelectInput px="$0" placeholder={placeholder} />
                <Icon as={ChevronDownIcon} />
            </SelectTrigger>
            <SelectPortal>
                <SelectBackdrop />
                <SelectContent px={0} maxHeight="$full">
                    <SelectDragIndicatorWrapper>
                        <SelectDragIndicator />
                    </SelectDragIndicatorWrapper>
                    <Text
                        my="$1"
                        color={AppColors.text}
                        fontSize="$lg"
                        fontWeight="$semibold"
                    >
                        {placeholder}
                    </Text>
                    <SelectScrollView persistentScrollbar>
                        {items.map((item, index) => (
                            <SelectItem
                                key={`select-item-${index}`}
                                borderRadius="$none"
                                p="$4"
                                {...item}
                            />
                        ))}
                    </SelectScrollView>
                </SelectContent>
            </SelectPortal>
        </Select>
    </View>
)

const styles = StyleSheet.create({
    hintText: {
        fontSize: 14,
        color: AppColors.hint,
        paddingBottom: 6,
    },
    dropdown: {
        paddingHorizontal: 8,
        paddingVertical: 8,
        borderRadius: 16,
        borderWidth: 1.5,
        borderColor: AppColors.border,
        zIndex: 1,
    },
    dropDownContainerStyle: {
        borderRadius: 16,
        backgroundColor: AppColors.background,
        borderWidth: 1.5,
        borderColor: AppColors.border,
    },
    labelStyle: {
        flex: 0,
        paddingHorizontal: 10,
        paddingVertical: 2,
        borderRadius: 8,
        backgroundColor: AppColors.card,
        borderWidth: 1.5,
        borderColor: AppColors.border,
        fontSize: 16,
        color: AppColors.text,
    },
    listItemContainerStyle: {
        zIndex: 99,
    },
    listItemLabelStyle: {
        fontSize: 16,
        color: AppColors.text,
    },
})

export default AppSelect
