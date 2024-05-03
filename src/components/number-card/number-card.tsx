import { HStack, Text, VStack, View } from '@gluestack-ui/themed'
import { CheckIcon } from 'lucide-react-native'
import ProgressBar from '@/components/progress-bar/progress-bar'
import { AppColors } from '@/constants/colors'

type NumberCardProps = {
    number: number
    max?: number
    label?: string
    description?: string
    color?: string
}

const NumberCard = ({
    number,
    max = 31,
    label,
    description,
    color = AppColors.primary,
}: NumberCardProps) => (
    <VStack w="$full">
        <HStack justifyContent="center">
            <View bgColor={color} borderRadius="$full" p="$3" mr="$2">
                <CheckIcon color={AppColors.background} />
            </View>
            <VStack style={{ flex: 1 }} gap="$1">
                <Text>
                    <Text
                        fontSize="$xl"
                        fontWeight="$bold"
                        color={AppColors.text}
                    >
                        {`${number} `}
                    </Text>
                    {label && (
                        <Text
                            fontWeight="$medium"
                            color={AppColors.primaryInactive}
                        >
                            {label}
                        </Text>
                    )}
                </Text>
                <ProgressBar value={number} max={max} color={color} />
            </VStack>
        </HStack>
        {description && (
            <Text mt="$2" color={AppColors.text}>
                {description}
            </Text>
        )}
    </VStack>
)

export default NumberCard
