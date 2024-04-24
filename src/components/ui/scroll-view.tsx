import { ComponentProps } from 'react'
import { VStack } from '@gluestack-ui/themed'
import { ScrollView, StyleSheet } from 'react-native'

type ScrollViewProps = ComponentProps<typeof ScrollView>
type AppScrollViewProps = {
    maxWidth?: number
} & ScrollViewProps

const AppScrollView = ({ maxWidth, ...props }: AppScrollViewProps) => (
    <ScrollView
        {...props}
        contentContainerStyle={[styles.scrollView, props.contentContainerStyle]}
    >
        <VStack w="$full" maxWidth={maxWidth}>
            {props.children}
        </VStack>
    </ScrollView>
)

const styles = StyleSheet.create({
    scrollView: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 8,
    },
})

export default AppScrollView
