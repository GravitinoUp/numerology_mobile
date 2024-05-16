import {
    CircleIcon,
    HStack,
    Radio,
    RadioIcon,
    RadioIndicator,
    Text,
} from '@gluestack-ui/themed'
import { TouchableOpacity } from 'react-native'
import { ACTIVE_OPACITY } from '@/constants/constants'
import { AppColors } from '@/constants/theme'

type LanguageCardProps = {
    label: string
    value: string
    onChange: (value: string) => void
}

const LanguageCard = ({ label, value, onChange }: LanguageCardProps) => (
    <TouchableOpacity
        activeOpacity={ACTIVE_OPACITY}
        onPress={() => onChange(value)}
    >
        <HStack justifyContent="space-between">
            <HStack>
                <Text fontWeight="$bold" color={AppColors.text}>
                    {label}
                </Text>
            </HStack>
            <Radio value={value} size="lg" onPress={() => onChange(value)}>
                <RadioIndicator>
                    <RadioIcon as={CircleIcon} />
                </RadioIndicator>
            </Radio>
        </HStack>
    </TouchableOpacity>
)

export default LanguageCard
