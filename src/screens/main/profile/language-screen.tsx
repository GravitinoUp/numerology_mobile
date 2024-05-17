import { useEffect, useState } from 'react'
import { RadioGroup } from '@gluestack-ui/themed'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useTranslation } from 'react-i18next'
import LanguageCard from './components/language-card'
import { EnglishIcon, RussianIcon } from '@/assets/icons/country'
import TopBar from '@/components/top-bar/top-bar'
import Scaffold from '@/components/ui/scaffold'
import AppScrollView from '@/components/ui/scroll-view'
import { MAX_WIDTH } from '@/constants/constants'
import { storageKeys } from '@/constants/storage'
import { useAppDispatch } from '@/hooks/use-app-dispatch'
import { api } from '@/redux/api'
import { DefaultStackScreenProps } from '@/types/interface'

export default function LanguageScreen({
    navigation,
}: DefaultStackScreenProps) {
    const { t, i18n } = useTranslation()

    const dispatch = useAppDispatch()

    const [language, setLanguage] = useState(i18n.language)

    useEffect(() => {
        if (language !== i18n.language) {
            i18n.changeLanguage(language)
            AsyncStorage.setItem(storageKeys.language, language)

            dispatch(api.util.resetApiState())
        }
    }, [language])

    return (
        <Scaffold>
            <TopBar
                title={t('settings.label.language')}
                navigation={navigation}
            />
            <AppScrollView
                contentContainerStyle={{ justifyContent: 'flex-start' }}
                maxWidth={MAX_WIDTH}
            >
                <RadioGroup value={language} py="$4" px="$5" gap="$5">
                    <LanguageCard
                        icon={<RussianIcon />}
                        label="Русский"
                        value="ru"
                        onChange={setLanguage}
                    />
                    <LanguageCard
                        icon={<EnglishIcon />}
                        label="English"
                        value="en"
                        onChange={setLanguage}
                    />
                </RadioGroup>
            </AppScrollView>
        </Scaffold>
    )
}
