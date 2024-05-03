import { Fragment, useState } from 'react'
import { ScrollView, Text, VStack, View } from '@gluestack-ui/themed'
import { InfoIcon } from 'lucide-react-native'
import { useTranslation } from 'react-i18next'
import DescriptionActionsheet from '@/components/description-actionsheet/description-actionsheet'
import IconButton from '@/components/icon-button/icon-button'
import TopBar from '@/components/top-bar/top-bar'
import Scaffold from '@/components/ui/scaffold'
import { AppColors } from '@/constants/colors'
import { useGetFateCardQuery } from '@/redux/api/numbers'
import SplashScreen from '@/screens/splash/splash-screen'
import { DefaultStackScreenProps } from '@/types/interface'

export default function FateCardsScreen({
    navigation,
}: DefaultStackScreenProps) {
    const { t } = useTranslation()

    const [actionsheetOpen, setActionsheetOpen] = useState(false)

    const {
        data: fateCard,
        isFetching,
        isSuccess,
        error,
        refetch,
    } = useGetFateCardQuery()

    const successLoad = !isFetching && isSuccess

    return (
        <Scaffold>
            <TopBar
                title={t('section.fate.cards')}
                navigation={navigation}
                suffix={
                    successLoad && (
                        <IconButton
                            icon={<InfoIcon color={AppColors.text} />}
                            onPress={() => setActionsheetOpen(true)}
                        />
                    )
                }
            />
            {successLoad ? (
                <Fragment>
                    <ScrollView>
                        <VStack p="$4" gap="$10">
                            <Text
                                fontWeight="$bold"
                                color={AppColors.text}
                                textAlign="center"
                            >
                                {fateCard.page_name}
                            </Text>
                            <View
                                height={90}
                                width={60}
                                bgColor={AppColors.primary}
                                alignSelf="center"
                            />
                            <Text color={AppColors.text}>
                                {t('placeholder.long.default')}
                            </Text>
                        </VStack>
                    </ScrollView>
                    <DescriptionActionsheet
                        actionsheetOpen={actionsheetOpen}
                        setActionsheetOpen={setActionsheetOpen}
                    >
                        <Text color={AppColors.text}>
                            {t('placeholder.long.default')}
                        </Text>
                    </DescriptionActionsheet>
                </Fragment>
            ) : (
                <SplashScreen error={error} refetch={refetch} />
            )}
        </Scaffold>
    )
}
