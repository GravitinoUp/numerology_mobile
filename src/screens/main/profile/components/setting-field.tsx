import { Text, VStack } from '@gluestack-ui/themed'
import { TouchableOpacity } from 'react-native'
import { AppColors } from '@/constants/theme'

type SettingFieldProps = {
    label: string
    description: string
    onPress: () => void
}

const SettingField = ({ label, description, onPress }: SettingFieldProps) => (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
        <VStack
            justifyContent="center"
            h="$20"
            px="$4"
            py="$2"
            borderBottomWidth="$1"
            borderBottomColor={AppColors.borderActive}
        >
            <Text mb="$1" fontSize="$lg" fontWeight="$medium">
                {label}
            </Text>
            <Text fontSize="$sm" numberOfLines={2} color={AppColors.hint}>
                {description}
            </Text>
        </VStack>
    </TouchableOpacity>
)

export default SettingField
