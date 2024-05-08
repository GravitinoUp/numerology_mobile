import { ComponentProps } from 'react'
import { Text, View } from '@gluestack-ui/themed'
import { AppColors } from '@/constants/colors'

type TextProps = ComponentProps<typeof Text>

const CategoryLabel = ({ ...props }: TextProps) => (
    <View
        px="$5"
        py="$2"
        bgColor={AppColors.proColor}
        alignSelf="center"
        borderRadius={64}
        zIndex={2}
        {...props}
    >
        <Text
            fontSize="$lg"
            fontWeight="$black"
            color={AppColors.text}
            textTransform="uppercase"
        >
            {props.children}
        </Text>
    </View>
)

export default CategoryLabel
