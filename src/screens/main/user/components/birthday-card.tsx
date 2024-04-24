import { ComponentProps } from 'react'
import { HStack, Text, VStack } from '@gluestack-ui/themed'
import { useTranslation } from 'react-i18next'
import { AppColors } from '@/constants/colors'

type VStackProps = ComponentProps<typeof VStack>
type BirthdayCardProps = {
    birthday: Date
} & VStackProps

const BirthdayCard = ({ birthday, ...props }: BirthdayCardProps) => {
    const { t } = useTranslation()

    return (
        <VStack
            p="$4"
            backgroundColor={AppColors.card}
            borderRadius="$xl"
            {...props}
        >
            <Text mb="$4" fontSize="$2xl" fontWeight="$bold" textAlign="center">
                {t('birthday')}
            </Text>
            <HStack alignItems="center" justifyContent="space-evenly">
                <VStack alignItems="center">
                    <Text fontSize="$2xl" fontWeight="$bold">
                        {birthday.getDate()}
                    </Text>
                    <Text fontSize="$lg">{t('day')}</Text>
                </VStack>
                <VStack alignItems="center">
                    <Text fontSize="$2xl" fontWeight="$bold">
                        {birthday.getMonth()}
                    </Text>
                    <Text fontSize="$lg">{t('month')}</Text>
                </VStack>
                <VStack alignItems="center">
                    <Text fontSize="$2xl" fontWeight="$bold">
                        {birthday.getFullYear()}
                    </Text>
                    <Text fontSize="$lg">{t('year')}</Text>
                </VStack>
            </HStack>
        </VStack>
    )
}

export default BirthdayCard
