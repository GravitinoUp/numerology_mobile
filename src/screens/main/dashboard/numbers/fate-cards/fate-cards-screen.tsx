import { Text, VStack, Image, Center, ScrollView } from '@gluestack-ui/themed'
import { useTranslation } from 'react-i18next'
import NumbersLayout from '../components/numbers-layout'
import DashboardLabel from '@/components/dashboard/dashboard-label'
import { AppColors } from '@/constants/colors'
import { useGetFateCardQuery } from '@/redux/api/numbers'
import SplashScreen from '@/screens/splash/splash-screen'
import { DefaultStackScreenProps } from '@/types/interface'

export default function FateCardsScreen({
    navigation,
}: DefaultStackScreenProps) {
    const { t } = useTranslation()

    const {
        data: fateCard,
        isFetching,
        isSuccess,
        error,
        refetch,
    } = useGetFateCardQuery()

    const successLoad = !isFetching && isSuccess

    return (
        <NumbersLayout title={t('section.fate.cards')} navigation={navigation}>
            {successLoad ? (
                <ScrollView>
                    <VStack p="$4" gap="$10">
                        <DashboardLabel
                            fontSize="$lg"
                            fontWeight="$bold"
                            color={AppColors.text}
                            textAlign="center"
                        >
                            {fateCard.page_name}
                        </DashboardLabel>
                        {fateCard.page_image !== '' && (
                            <Center>
                                <Image
                                    source={fateCard?.page_image}
                                    alt=""
                                    h={135}
                                    w={90}
                                />
                            </Center>
                        )}
                        <Text color={AppColors.text}>
                            {fateCard.page_content}
                        </Text>
                    </VStack>
                </ScrollView>
            ) : (
                <SplashScreen error={error} refetch={refetch} />
            )}
        </NumbersLayout>
    )
}
