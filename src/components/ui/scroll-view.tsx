import { ComponentProps, LegacyRef } from 'react'
import { VStack } from '@gluestack-ui/themed'
import { ScrollView, StyleSheet } from 'react-native'

type ScrollViewProps = ComponentProps<typeof ScrollView>
type AppScrollViewProps = {
    ref?: LegacyRef<ScrollView> | undefined
    maxWidth?: number
} & ScrollViewProps

const AppScrollView = ({ maxWidth, ref, ...props }: AppScrollViewProps) => (
    <ScrollView
        {...props}
        ref={ref}
        contentContainerStyle={[styles.scrollView, props.contentContainerStyle]}
        keyboardShouldPersistTaps="handled"
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
