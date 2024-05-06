import { Fragment, useState } from 'react'
import { ScrollView, Text, VStack } from '@gluestack-ui/themed'
import { InfoIcon } from 'lucide-react-native'
import { useTranslation } from 'react-i18next'
import DescriptionActionsheet from '@/components/description-actionsheet/description-actionsheet'
import IconButton from '@/components/icon-button/icon-button'
import NumberCard from '@/components/number-card/number-card'
import TopBar from '@/components/top-bar/top-bar'
import Scaffold from '@/components/ui/scaffold'
import { AppColors } from '@/constants/colors'
import { useGetProfessionsQuery } from '@/redux/api/numbers'
import SplashScreen from '@/screens/splash/splash-screen'
import { DefaultStackScreenProps } from '@/types/interface'

export default function ProfessionsScreen({
    navigation,
}: DefaultStackScreenProps) {
    const { t } = useTranslation()

    const [actionsheetOpen, setActionsheetOpen] = useState(false)

    const {
        data: professions = [],
        isFetching,
        isSuccess,
        error,
        refetch,
    } = useGetProfessionsQuery()

    const successLoad = !isFetching && isSuccess

    return (
        <Scaffold>
            <TopBar
                title={t('section.professions')}
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
                        <VStack p="$4" gap="$4">
                            {professions.map((value, index) => (
                                <NumberCard
                                    key={index}
                                    color="#2D9CDB"
                                    number={Number(value.page_keys[0])}
                                    max={22}
                                    label={value.page_name}
                                    description={value.page_content}
                                />
                            ))}
                            {/* <DashboardLabel>
                        Группа профессий по судьбе 1
                    </DashboardLabel>
                    */}
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
