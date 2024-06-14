import { HStack, Text, VStack, View } from '@gluestack-ui/themed'
import { useTranslation } from 'react-i18next'
import { TouchableOpacity } from 'react-native'
import { AppColors, AppShapes } from '@/constants/theme'

type ProductCardProps = {
    label: string
    price: string
    description?: string
    onPress?: () => void
}

const ProductCard = ({
    label,
    price,
    description,
    onPress,
}: ProductCardProps) => {
    const { t } = useTranslation()

    return (
        <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
            <VStack
                p="$4"
                justifyContent="center"
                borderRadius={AppShapes.largeRadius}
                borderWidth="$1"
                borderColor={AppColors.border}
                backgroundColor={AppColors.background}
            >
                <Text fontSize="$lg" fontWeight="$bold" color={AppColors.text}>
                    {label}
                </Text>
                {description && (
                    <Text mt="$3" color={AppColors.hint}>
                        {description}
                    </Text>
                )}
                <HStack
                    mt="$3"
                    w="$full"
                    alignSelf="flex-end"
                    justifyContent="flex-end"
                >
                    <View
                        backgroundColor={AppColors.proColor}
                        px="$12"
                        py="$3"
                        rounded="$xl"
                    >
                        <Text fontWeight="$bold" color={AppColors.text}>
                            {`${t('action.buy')}${t('buy.for')} ${price}`}
                        </Text>
                    </View>
                </HStack>
            </VStack>
        </TouchableOpacity>
    )
}

export default ProductCard
