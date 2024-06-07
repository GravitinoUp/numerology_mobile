import { View } from '@gluestack-ui/themed'
import { SerializedError } from '@reduxjs/toolkit'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'
import ContentLoader, { Rect } from 'react-content-loader/native'
import { AppColors } from '@/constants/theme'
import SplashScreen from '@/screens/splash/splash-screen'

type NumbersSkeletonProps = {
    error?: FetchBaseQueryError | SerializedError | undefined
    refetch?: () => void
}

const NumbersSkeleton = ({ error, refetch }: NumbersSkeletonProps) =>
    !error ? (
        <View px="$4">
            <ContentLoader
                title=""
                backgroundColor={AppColors.skeletonBackgroundColor}
                foregroundColor={AppColors.skeletonForegroundColor}
            >
                <Rect rx="20" ry="20" width="100%" height="180" />
                {/* <Rect x="12.5%" y="158" rx="20" ry="20" width="75%" height="44" /> */}
                <Rect y="240" rx="20" ry="20" width="100%" height="80" />
                <Rect y="332" rx="6" ry="6" width="100%" height="12" />
                <Rect y="352" rx="6" ry="6" width="80%" height="12" />
                <Rect y="372" rx="6" ry="6" width="80%" height="12" />

                <Rect y="400" rx="20" ry="20" width="100%" height="80" />
                <Rect y="492" rx="6" ry="6" width="100%" height="12" />
                <Rect y="512" rx="6" ry="6" width="80%" height="12" />
                <Rect y="532" rx="6" ry="6" width="80%" height="12" />
            </ContentLoader>
        </View>
    ) : (
        <SplashScreen error={error} refetch={refetch} />
    )

export default NumbersSkeleton
