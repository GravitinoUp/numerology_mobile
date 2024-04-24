import { Text } from '@gluestack-ui/themed'
import { useTranslation } from 'react-i18next'
import { SafeAreaView } from 'react-native-safe-area-context'
import { LogoLarge } from '@/assets/icons/logo'
import { AppColors } from '@/constants/colors'

export default function SplashScreen() {
    const { t } = useTranslation()

    return (
        <SafeAreaView
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: AppColors.background,
            }}
        >
            <LogoLarge />
            <Text fontSize="$2xl" fontWeight="$black" color={AppColors.text}>
                {t('app.name')}
            </Text>
        </SafeAreaView>
    )
}
