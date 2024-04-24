import { Center, Text, VStack } from '@gluestack-ui/themed'
import { useTranslation } from 'react-i18next'
import { Logo } from '@/assets/icons/logo'
import ProfileIcon from '@/assets/icons/profile'
import AppButton from '@/components/ui/button'
import Scaffold from '@/components/ui/scaffold'
import AppScrollView from '@/components/ui/scroll-view'
import { AppColors } from '@/constants/colors'
import { MAX_WIDTH } from '@/constants/constants'
import { routes } from '@/constants/routes'

export default function AuthNavScreen({ navigation }: any) {
    const { t } = useTranslation()

    return (
        <Scaffold>
            <AppScrollView maxWidth={MAX_WIDTH}>
                <Center justifyContent="center" mb="$4">
                    <Logo />
                </Center>
                <Text
                    fontSize="$2xl"
                    fontWeight="$bold"
                    color={AppColors.primary}
                    textAlign="center"
                >
                    {t('auth.hello.title')}
                </Text>
                <Text mt="$3" mb="$8" color={AppColors.hint} textAlign="center">
                    {t('auth.hello.description')}
                </Text>
                <VStack gap="$4">
                    <AppButton
                        onPress={() => navigation.navigate(routes.AUTH)}
                        text={t('auth.title')}
                        prefixIcon={
                            <ProfileIcon color={AppColors.background} />
                        }
                    />
                    <AppButton
                        onPress={() => navigation.navigate(routes.REGISTER)}
                        text={t('register.title')}
                        textProps={{ color: AppColors.text }}
                        bgColor={AppColors.trialColor}
                    />
                </VStack>
            </AppScrollView>
        </Scaffold>
    )
}
