import React from 'react'
import { HStack, Text, VStack, View } from '@gluestack-ui/themed'
import { CheckIcon } from 'lucide-react-native'
import DashboardLabel from '../dashboard/dashboard-label'
import ProgressBar from '@/components/progress-bar/progress-bar'
import { AppColors } from '@/constants/theme'

type NumberCardProps = {
    number: number
    max?: number
    icon?: React.ReactNode
    title?: string
    label?: string
    description?: string
    color?: string
}

const NumberCard = ({
    number,
    max = 22,
    icon = <CheckIcon color={AppColors.background} />,
    title,
    label,
    description,
    color = AppColors.primary,
}: NumberCardProps) => (
    <VStack w="$full">
        {title && <DashboardLabel mb="$3">{title}</DashboardLabel>}
        <HStack alignItems="center" justifyContent="center">
            <View
                h="$12"
                w="$12"
                alignItems="center"
                justifyContent="center"
                bgColor={color}
                borderRadius="$full"
                mr="$2"
            >
                {icon}
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
            <Text mt="$2" color={AppColors.hint}>
                {description}
            </Text>
        )}
    </VStack>
)

export default NumberCard
