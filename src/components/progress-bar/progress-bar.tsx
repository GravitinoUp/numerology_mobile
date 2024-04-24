import { ComponentProps } from 'react'
import {
    HStack,
    Progress,
    ProgressFilledTrack,
    Text,
} from '@gluestack-ui/themed'
import { AppColors } from '@/constants/colors'

type ProgressProps = ComponentProps<typeof Progress>
type ProgressBarProps = {
    label?: string
    color?: string
} & ProgressProps

const ProgressBar = ({
    label,
    color = AppColors.primary,
    ...props
}: ProgressBarProps) => (
    <Progress
        height={8}
        borderRadius="$xl"
        justifyContent="center"
        bgColor={AppColors.track}
        w="$full"
        {...props}
    >
        <ProgressFilledTrack
            bgColor={color}
            position="absolute"
            borderRadius="$xl"
        />
        {label && (
            <HStack px="$4" alignItems="center" justifyContent="space-between">
                <Text fontWeight="$medium" color={AppColors.background}>
                    {label}
                </Text>
                {/* <HStack alignItems="center">
                    <Text
                        fontSize="$lg"
                        fontWeight="$medium"
                        color={AppColors.background}
                    >
                        {props.value}%
                    </Text>
                    <ChevronRightIcon ml="$1" color={AppColors.background} />
                </HStack> */}
            </HStack>
        )}
    </Progress>
)

export default ProgressBar
