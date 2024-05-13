import { HStack, Text, VStack, View } from '@gluestack-ui/themed'
import { AppColors } from '@/constants/theme'

type MatrixCardProps = {
    items: { label: string; value: number; color: string }[]
}

const MatrixCard = ({ items }: MatrixCardProps) => (
    <VStack w="$full">
        <HStack>
            <Text>
                {items.map(({ label }, index) => (
                    <Text
                        color={AppColors.text}
                        fontWeight="$medium"
                        fontSize="$lg"
                        key={index}
                    >
                        {label}
                        {index !== items.length - 1 && '/'}
                    </Text>
                ))}
            </Text>
        </HStack>
        <HStack gap="$2" p={'$6'}>
            {items.map((item, index) => (
                <VStack
                    alignItems="center"
                    style={{ flex: item.value }}
                    key={index}
                >
                    <Text
                        fontWeight="$medium"
                        color={AppColors.hint}
                        numberOfLines={1}
                    >{`${item.label} (${item.value})`}</Text>
                    <View
                        my="$2"
                        h="$1"
                        w="$1"
                        borderRadius="$full"
                        bgColor={item.color}
                    />
                    <View
                        h="$2"
                        w="$full"
                        borderRadius="$full"
                        bgColor={item.color}
                    />
                </VStack>
            ))}
        </HStack>
    </VStack>
)

export default MatrixCard
