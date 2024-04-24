import { View } from '@gluestack-ui/themed'
import { TouchableOpacity } from 'react-native'
import ChevronLeft from '@/assets/icons/chevron-left'
import { AppColors } from '@/constants/colors'
import { ACTIVE_OPACITY } from '@/constants/constants'

const BackButton = ({ navigation }: { navigation: any }) => (
    <View bgColor={AppColors.background} borderRadius="$full" softShadow="1">
        <TouchableOpacity
            activeOpacity={ACTIVE_OPACITY}
            onPress={navigation.goBack}
        >
            <View p="$3">
                <ChevronLeft />
            </View>
        </TouchableOpacity>
    </View>
)

export default BackButton
