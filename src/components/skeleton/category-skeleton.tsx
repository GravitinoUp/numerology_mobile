import { View } from '@gluestack-ui/themed'
import { SerializedError } from '@reduxjs/toolkit'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'
import ContentLoader, { Rect } from 'react-content-loader/native'
import { AppColors } from '@/constants/theme'
import SplashScreen from '@/screens/splash/splash-screen'

type CategorySkeletonProps = {
    error?: FetchBaseQueryError | SerializedError | undefined
    refetch?: () => void
}

const CategorySkeleton = ({ error, refetch }: CategorySkeletonProps) =>
    !error ? (
        <View px="$6" pt="$6">
            <ContentLoader
                title=""
                backgroundColor={AppColors.skeletonBackgroundColor}
                foregroundColor={AppColors.skeletonForegroundColor}
            >
                <Rect rx="20" ry="20" width="100%" height="80" />
                <Rect y="100" rx="20" ry="20" width="100%" height="80" />
                <Rect y="200" rx="20" ry="20" width="100%" height="80" />
                <Rect y="300" rx="20" ry="20" width="100%" height="80" />
                <Rect y="400" rx="20" ry="20" width="100%" height="80" />
            </ContentLoader>
        </View>
    ) : (
        <SplashScreen error={error} refetch={refetch} />
    )

export default CategorySkeleton
