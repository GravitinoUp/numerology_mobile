import { useRef, useState } from 'react'
import { VStack } from '@gluestack-ui/themed'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useTranslation } from 'react-i18next'
import PagerView from 'react-native-pager-view'
import OnboardPage from './components/onboard-page'
import AppButton from '@/components/ui/button'
import Pagination from '@/components/ui/pagination'
import Scaffold from '@/components/ui/scaffold'
import { AppColors } from '@/constants/colors'
import { routes } from '@/constants/routes'
import { storageKeys } from '@/constants/storage'
import { DefaultStackScreenProps } from '@/types/interface'
import { OnboardInterface } from '@/types/interface/onboard'

export default function OnboardScreen({ navigation }: DefaultStackScreenProps) {
    const { t } = useTranslation()

    const pages: OnboardInterface[] = [
        {
            onboard_name: 'PAGE 1',
            onboard_description: t('placeholder.long.default'),
            onboard_image: '',
        },
        {
            onboard_name: 'PAGE 2',
            onboard_description: t('placeholder.long.default'),
            onboard_image: '',
        },
        {
            onboard_name: 'PAGE 3',
            onboard_description: t('placeholder.long.default'),
            onboard_image: '',
        },
    ]

    const [currentPage, setCurrentPage] = useState(0)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const pagerRef = useRef<any>(null)

    return (
        <Scaffold style={{ paddingVertical: 24 }}>
            <Pagination currentPage={currentPage} pageCount={pages.length} />
            <PagerView
                style={{ flex: 1 }}
                ref={pagerRef}
                initialPage={currentPage}
                onPageSelected={(e) => setCurrentPage(e.nativeEvent.position)}
                useNext
                scrollEnabled
            >
                {pages.map((page, index) => (
                    <OnboardPage key={index} item={page} />
                ))}
            </PagerView>
            <VStack w="$full" alignItems="center">
                <VStack w="$full" maxWidth="$1/2" gap="$2">
                    <AppButton
                        onPress={async () => {
                            if (currentPage !== pages.length - 1 && pagerRef) {
                                pagerRef.current?.setPage(currentPage + 1)
                            } else {
                                await AsyncStorage.setItem(
                                    storageKeys.onboardDisabled,
                                    String(true)
                                )

                                navigation.navigate(routes.AUTH)
                            }
                        }}
                        text={
                            currentPage !== pages.length - 1
                                ? t('action.continue')
                                : t('auth.title')
                        }
                    />
                    <AppButton
                        textProps={{
                            color: AppColors.hint,
                            fontWeight: '$normal',
                            textAlign: 'right',
                        }}
                        bgColor={AppColors.transparent}
                        onPress={async () => {
                            await AsyncStorage.setItem(
                                storageKeys.onboardDisabled,
                                String(true)
                            )

                            if (currentPage !== pages.length - 1) {
                                navigation.navigate(routes.AUTH_NAV)
                            } else {
                                navigation.navigate(routes.REGISTER)
                            }
                        }}
                        text={
                            currentPage !== pages.length - 1
                                ? t('action.skip')
                                : t('register.title')
                        }
                    />
                </VStack>
            </VStack>
        </Scaffold>
    )
}
