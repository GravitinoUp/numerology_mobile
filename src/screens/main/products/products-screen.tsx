import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { initConnection, useIAP } from 'react-native-iap'
import ProductCard from '../profile/components/product-card'
import TopBar from '@/components/top-bar/top-bar'
import Scaffold from '@/components/ui/scaffold'
import AppScrollView from '@/components/ui/scroll-view'
import { MAX_WIDTH } from '@/constants/constants'
import { useAppToast } from '@/hooks/use-toast'
import SplashScreen from '@/screens/splash/splash-screen'
import { DefaultStackScreenProps } from '@/types/interface'

export default function ProductsScreen({
    navigation,
}: DefaultStackScreenProps) {
    const { t } = useTranslation()
    const { showSuccessToast, showErrorToast } = useAppToast()
    const {
        initConnectionError,
        products,
        getProducts,
        requestPurchase,
        currentPurchase,
        currentPurchaseError,
    } = useIAP()

    const getGooglePlayProducts = async () => {
        await getProducts({ skus: ['com.gravitino.test'] })
    }

    useEffect(() => {
        getGooglePlayProducts()
    }, [])

    const handlePurchase = async (sku: string) => {
        const initResult = await initConnection()
        if (initResult) {
            await requestPurchase({ skus: [sku] })
        } else {
            showErrorToast({
                label: 'INIT ERROR',
            })
        }
    }

    useEffect(() => {
        if (initConnectionError) {
            showErrorToast({
                label: `${initConnectionError.message}`,
            })
        }
    }, [initConnectionError])

    useEffect(() => {
        if (currentPurchaseError) {
            showErrorToast({
                label: `${currentPurchaseError.message}`,
            })
        }
    }, [currentPurchaseError])

    useEffect(() => {
        if (currentPurchase) {
            showSuccessToast({ label: 'SUCCESS' })
        }
    }, [currentPurchase])

    useEffect(() => {
        console.log(products)
    }, [products])

    return (
        <Scaffold>
            <TopBar
                title={t('settings.label.products')}
                navigation={navigation}
            />
            {products.length > 0 ? (
                <AppScrollView
                    contentContainerStyle={{ justifyContent: 'flex-start' }}
                    maxWidth={MAX_WIDTH}
                >
                    {products.map((value, index) => (
                        <ProductCard
                            key={index}
                            label={value.title}
                            price={value.price}
                            description={value.description}
                            onPress={() => handlePurchase(value.productId)}
                        />
                    ))}
                </AppScrollView>
            ) : (
                <SplashScreen />
            )}
        </Scaffold>
    )
}
