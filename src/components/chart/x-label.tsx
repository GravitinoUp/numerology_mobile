import { Text, View } from '@gluestack-ui/themed'
import { AppColors } from '@/constants/theme'

export const XLabel = ({ value }: { value: string }) => (
    <View w={70} ml="$2">
        <Text color={AppColors.primary}>{value}</Text>
    </View>
)
