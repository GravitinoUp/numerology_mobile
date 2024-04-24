import { HStack, Text, VStack, View } from '@gluestack-ui/themed'
import { CheckIcon } from 'lucide-react-native'
import { useTranslation } from 'react-i18next'
import ProgressBar from '@/components/progress-bar/progress-bar'
import { AppColors } from '@/constants/colors'

type NumberCardProps = {
    number: number
    color?: string
}

const NumberCard = ({ number, color = AppColors.primary }: NumberCardProps) => {
    const { t } = useTranslation()

    return (
        <VStack w="$full">
            <HStack alignItems="center">
                <View bgColor={color} borderRadius="$full" p="$3" mr="$2">
                    <CheckIcon color={AppColors.background} />
                </View>
                <VStack style={{ flex: 1 }} gap="$1">
                    <Text>
                        <Text fontSize="$lg" fontWeight="$bold">
                            {`${number} `}
                        </Text>
                        <Text
                            fontWeight="$medium"
                            color={AppColors.primaryInactive}
                        >
                            Label
                        </Text>
                    </Text>
                    <ProgressBar value={number} color={color} />
                </VStack>
            </HStack>
            <Text mt="$4" color={AppColors.hint}>
                {t('placeholder.long.default')}
            </Text>
        </VStack>
    )
}

export default NumberCard
