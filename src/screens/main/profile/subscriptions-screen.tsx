import { VStack } from '@gluestack-ui/themed'
import { Text } from '@gluestack-ui/themed'
import { useTranslation } from 'react-i18next'
import SubscriptionCard from './components/subscription-card'
import TopBar from '@/components/top-bar/top-bar'
import Scaffold from '@/components/ui/scaffold'
import AppScrollView from '@/components/ui/scroll-view'
import TextButton from '@/components/ui/text-button'
import { MAX_WIDTH } from '@/constants/constants'
import { AppColors } from '@/constants/theme'
import { DefaultStackScreenProps } from '@/types/interface'

export default function SubscriptionsScreen({
    navigation,
}: DefaultStackScreenProps) {
    const { t } = useTranslation()

    return (
        <Scaffold>
            <TopBar
                title={t('settings.label.subscriptions')}
                navigation={navigation}
            />
            <AppScrollView
                contentContainerStyle={{ justifyContent: 'flex-start' }}
                maxWidth={MAX_WIDTH}
            >
                <VStack py="$4" px="$5" gap="$5">
                    <Text fontWeight="$bold" color={AppColors.text}>
                        {t('active.subscriptions')}
                    </Text>
                    <SubscriptionCard label={'Подписка PRO на 1 месяц'} />
                    <TextButton
                        text={t('action.unsubscribe')}
                        textAlign="center"
                        fontWeight="$medium"
                        color={AppColors.error}
                        onPress={() => {}}
                    />
                    <Text fontWeight="$bold" color={AppColors.text}>
                        {t('action.subscribe')}
                    </Text>
                    <SubscriptionCard
                        label={'Подписка PRO на 1 месяц'}
                        description="99 рублей"
                    />
                    <SubscriptionCard
                        label={'Подписка PRO на 3 месяца'}
                        description="299 рублей"
                        selected
                    />
                    <SubscriptionCard
                        label={'Подписка PRO на 1 год'}
                        description="2499 рублей"
                    />
                </VStack>
            </AppScrollView>
        </Scaffold>
    )
}
