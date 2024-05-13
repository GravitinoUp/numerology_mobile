import { ComponentProps } from 'react'
import { Text, View } from '@gluestack-ui/themed'
import { AppColors } from '@/constants/theme'

type ViewProps = ComponentProps<typeof View>

const CategoryLabel = ({ ...props }: ViewProps) => (
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
