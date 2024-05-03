import { ScrollView, Text, VStack, View } from '@gluestack-ui/themed'
import { useTranslation } from 'react-i18next'
import TopBar from '@/components/top-bar/top-bar'
import Scaffold from '@/components/ui/scaffold'
import { AppColors } from '@/constants/colors'
import { DefaultStackScreenProps } from '@/types/interface'

export default function FateCardsScreen({
    navigation,
}: DefaultStackScreenProps) {
    const { t } = useTranslation()

    return (
        <Scaffold>
            <TopBar title={t('section.fate.cards')} navigation={navigation} />
            <ScrollView>
                <VStack p="$4" gap="$10">
                    <Text
                        fontWeight="$bold"
                        color={AppColors.text}
                        textAlign="center"
                    >
                        CARD NAME
                    </Text>
                    <View
                        height={90}
                        width={60}
                        bgColor={AppColors.primary}
                        alignSelf="center"
                    />
                    <Text color={AppColors.text}>
                        {t('placeholder.long.default')}
                    </Text>
                </VStack>
            </ScrollView>
        </Scaffold>
    )
}
