import { Center, Spinner, Text, VStack } from '@gluestack-ui/themed'
import { SerializedError } from '@reduxjs/toolkit'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'
import { useTranslation } from 'react-i18next'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Logo } from '@/assets/icons/logo'
import AppButton from '@/components/ui/button'
import { MAX_WIDTH } from '@/constants/constants'
import { AppColors } from '@/constants/theme'
import { ErrorInterface } from '@/types/interface'

type SplashScreenProps = {
    error?: FetchBaseQueryError | SerializedError | undefined
    refetch?: () => void
}

export default function SplashScreen({ error, refetch }: SplashScreenProps) {
    const { t } = useTranslation()

    const errorData = error as ErrorInterface

    return (
        <SafeAreaView
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: AppColors.background,
            }}
        >
            <Center mt="$6" mb="$10">
                <Logo />
            </Center>
            {!error && <Spinner size="large" color={AppColors.primary} />}
            {error && (
                <VStack w="$full" maxWidth={MAX_WIDTH} alignItems="center">
                    <Text color={AppColors.text} textAlign="center">
                        {errorData && errorData.data
                            ? errorData.data?.message
                            : t('error.default')}
                    </Text>
                    {typeof refetch !== 'undefined' && (
                        <AppButton
                            mt="$4"
                            w="$1/2"
                            onPress={refetch}
                            text={t('action.retry')}
                        />
                    )}
                </VStack>
            )}
        </SafeAreaView>
    )
}
