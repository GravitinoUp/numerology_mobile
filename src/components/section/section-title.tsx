import { ComponentProps } from 'react'
import { Text } from '@gluestack-ui/themed'

type TextProps = ComponentProps<typeof Text>
type SectionTitleProps = {
    children: string
} & TextProps

const SectionTitle = ({ children, ...props }: SectionTitleProps) => (
    <Text fontSize="$2xl" fontWeight="$medium" {...props}>
        {children}
    </Text>
)

export default SectionTitle
