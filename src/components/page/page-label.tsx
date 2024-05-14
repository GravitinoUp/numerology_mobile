import { ComponentProps } from 'react'
import { HStack, Text, View } from '@gluestack-ui/themed'
import getCardPrefix from '../card-button/get-card-prefix'
import { AppColors } from '@/constants/theme'
import { PageType } from '@/types/interface/numbers'

type ViewProps = ComponentProps<typeof View>
type PageLabelProps = {
    type?: PageType
} & ViewProps

const PageLabel = ({ type, ...props }: PageLabelProps) => (
    <HStack
        h="$11"
        w="$3/4"
        bgColor={AppColors.proColor}
        alignSelf="center"
        justifyContent="space-between"
        alignItems="center"
        borderRadius={64}
        zIndex={2}
        {...props}
    >
        {
            <View
                w="$10"
                h="$10"
                mr="$2"
                justifyContent="center"
                alignItems="center"
            >
                {type && getCardPrefix(type)}
            </View>
        }
        <Text
            fontWeight="$black"
            height="$10"
            verticalAlign="middle"
            color={AppColors.background}
            textTransform="uppercase"
            textAlign="center"
            flexShrink={1}
        >
            {props.children}
        </Text>
        <View w="$10" h="$10" ml="$2" />
    </HStack>
)

export default PageLabel
