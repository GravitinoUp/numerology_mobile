import { ComponentProps, Fragment } from 'react'
import { HStack, Text, VStack, View } from '@gluestack-ui/themed'
import { Platform, StatusBar } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import BackButton from '../back-button/back-button'
import { AppColors } from '@/constants/theme'
import { DefaultStackNavigationProp } from '@/types/interface'

type HStackProps = ComponentProps<typeof HStack>
type TopBarProps = {
    title?: string
    subtitle?: string
    suffix?: React.ReactNode
    navigation?: DefaultStackNavigationProp
} & HStackProps

const TopBar = ({
    title,
    subtitle,
    suffix,
    navigation,
    ...props
}: TopBarProps) => {
    const insets = useSafeAreaInsets()

    return (
        <Fragment>
            <StatusBar
                backgroundColor={AppColors.background}
                barStyle="dark-content"
            />
            <HStack
                h={80}
                bgColor={AppColors.background}
                alignItems="center"
                justifyContent={
                    !navigation && !suffix ? 'center' : 'space-between'
                }
                px="$4"
                borderBottomLeftRadius="$2xl"
                borderBottomRightRadius="$2xl"
                zIndex={10}
                {...props}
                marginTop={
                    props.position === 'absolute' && Platform.OS === 'ios'
                        ? insets.top
                        : undefined
                }
            >
                {navigation && <BackButton navigation={navigation} />}
                {!subtitle ? (
                    <Text
                        fontSize="$lg"
                        fontWeight="$medium"
                        color={AppColors.text}
                        flexShrink={1}
                        textAlign="center"
                    >
                        {title}
                    </Text>
                ) : (
                    <VStack>
                        <Text
                            fontSize="$lg"
                            fontWeight="$medium"
                            color={AppColors.text}
                            flexShrink={1}
                        >
                            {title}
                        </Text>
                        <Text
                            fontSize="$sm"
                            color={AppColors.text}
                            flexShrink={1}
                        >
                            {subtitle}
                        </Text>
                    </VStack>
                )}
                {navigation && !suffix && <View w="$10" h="$10" />}
                {suffix && <View>{suffix}</View>}
            </HStack>
        </Fragment>
    )
}

export default TopBar
