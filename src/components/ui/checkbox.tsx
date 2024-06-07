import { ComponentProps } from 'react'
import {
    CheckIcon,
    Checkbox,
    CheckboxIcon,
    CheckboxIndicator,
    CheckboxLabel,
} from '@gluestack-ui/themed'
import { AppColors } from '@/constants/theme'

type CheckboxProps = ComponentProps<typeof Checkbox>
type Props = {
    label: string
} & CheckboxProps

const AppCheckbox = ({ label, ...props }: Props) => (
    <Checkbox size="md" aria-label={label} {...props}>
        <CheckboxIndicator
            borderColor={AppColors.primary}
            $active-bgColor={
                props.isChecked ? AppColors.primary : AppColors.transparent
            }
            $base-bgColor={AppColors.transparent}
            $checked-bgColor={AppColors.primary}
            mr={'$2'}
        >
            <CheckboxIcon as={CheckIcon} />
        </CheckboxIndicator>
        <CheckboxLabel fontSize="$sm" color={AppColors.text}>
            {label}
        </CheckboxLabel>
    </Checkbox>
)

export default AppCheckbox
