import { Text, View } from '@gluestack-ui/themed'
import { AppColors } from '@/constants/colors'
import { OnboardInterface } from '@/types/interface/onboard'

type OnboardPageProps = {
    item: OnboardInterface
}

const OnboardPage = ({ item }: OnboardPageProps) => (
    <View alignItems="center" p="$4">
        <View w="$full" h="$1/2" bgColor={AppColors.primary} />
        <Text
            textAlign="center"
            my="$4"
            fontSize="$lg"
            fontWeight="$bold"
            color={AppColors.text}
        >
            {item.onboard_name}
        </Text>
        <Text textAlign="center" color={AppColors.hint}>
            {item.onboard_description}
        </Text>
    </View>
)

export default OnboardPage
