import { ComponentProps, Fragment } from 'react'
import { HStack, Text, VStack, View } from '@gluestack-ui/themed'
import { StatusBar } from 'react-native'
import BackButton from '../back-button/back-button'
import { AppColors } from '@/constants/colors'
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
}: TopBarProps) => (
    <Fragment>
        <StatusBar
            backgroundColor={AppColors.background}
            barStyle="dark-content"
        />
        <HStack
            h={80}
            bgColor={AppColors.background}
            alignItems="center"
            justifyContent="space-between"
            px={!navigation ? '$4' : undefined}
            borderBottomLeftRadius="$2xl"
            borderBottomRightRadius="$2xl"
            {...props}
        >
            <HStack alignItems="center">
                {navigation && (
                    <View px="$4">
                        <BackButton navigation={navigation} />
                    </View>
                )}
                {!subtitle ? (
                    <Text
                        fontSize="$xl"
                        fontWeight="$medium"
                        color={AppColors.text}
                    >
                        {title}
                    </Text>
                ) : (
                    <VStack>
                        <Text
                            fontSize="$xl"
                            fontWeight="$medium"
                            color={AppColors.text}
                        >
                            {title}
                        </Text>
                        <Text fontSize="$sm" color={AppColors.text}>
                            {subtitle}
                        </Text>
                    </VStack>
                )}
            </HStack>
            {suffix}
        </HStack>
    </Fragment>
)

export default TopBar
