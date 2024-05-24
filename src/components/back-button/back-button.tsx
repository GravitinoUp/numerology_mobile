import { View } from '@gluestack-ui/themed'
import { TouchableOpacity } from 'react-native'
import DropShadow from 'react-native-drop-shadow'
import ChevronLeft from '@/assets/icons/chevron-left'
import { ACTIVE_OPACITY } from '@/constants/constants'
import { AppColors } from '@/constants/theme'
import { DefaultStackNavigationProp } from '@/types/interface'

const BackButton = ({
    navigation,
}: {
    navigation: DefaultStackNavigationProp
}) => (
    <DropShadow
        style={{
            shadowColor: '#091219',
            shadowOffset: {
                width: 0,
                height: 4,
            },
            shadowOpacity: 0.2,
            shadowRadius: 10,
        }}
    >
        <TouchableOpacity
            activeOpacity={ACTIVE_OPACITY}
            onPress={navigation.goBack}
        >
            <View
                w="$10"
                h="$10"
                bgColor={AppColors.background}
                borderRadius="$full"
                justifyContent="center"
                alignItems="center"
            >
                <ChevronLeft />
            </View>
        </TouchableOpacity>
    </DropShadow>
)

export default BackButton
