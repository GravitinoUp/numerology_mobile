import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import enNs1 from './locales/en.json'
import ruNs1 from './locales/ru.json'

i18next.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    fallbackLng: 'en',
    defaultNS: 'ns1',
    resources: {
        ru: {
            ns1: ruNs1,
        },
        en: {
            ns1: enNs1,
        },
    },
})

export default i18next
