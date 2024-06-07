import { Center, Text } from '@gluestack-ui/themed'
import { useTranslation } from 'react-i18next'
import NumbersLayout from './components/numbers-layout'
import { Logo } from '@/assets/icons/logo'
import AppScrollView from '@/components/ui/scroll-view'
import { MAX_WIDTH } from '@/constants/constants'
import { AppColors } from '@/constants/theme'
import { DefaultStackScreenProps } from '@/types/interface'

export default function PlaceholderScreen({
    navigation,
}: DefaultStackScreenProps) {
    const { t } = useTranslation()

    return (
        <NumbersLayout navigation={navigation}>
            <AppScrollView maxWidth={MAX_WIDTH}>
                <Center px="$9">
                    <Logo />
                    <Text
                        color={AppColors.text}
                        textAlign="center"
                        fontSize="$2xl"
                        fontWeight="$bold"
                    >
                        {t('under.development')}
                    </Text>
                    <Text
                        mt="$2"
                        color={AppColors.hint}
                        textAlign="center"
                        fontSize="$lg"
                    >
                        {t('under.development.description')}
                    </Text>
                </Center>
            </AppScrollView>
        </NumbersLayout>
    )
}
