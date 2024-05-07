import { ScrollView, VStack } from '@gluestack-ui/themed'
import { useTranslation } from 'react-i18next'
import CardButton from '../../../components/card-button/card-button'
import StatusCard from '@/components/status-card/status-card'
import TopBar from '@/components/top-bar/top-bar'
import Scaffold from '@/components/ui/scaffold'
import { routes } from '@/constants/routes'
import { useGetPageTypesQuery } from '@/redux/api/pages'
import SplashScreen from '@/screens/splash/splash-screen'
import { DefaultStackScreenProps } from '@/types/interface'
import { PageType } from '@/types/interface/numbers'

export default function DashboardScreen({
    navigation,
}: DefaultStackScreenProps) {
    const { t } = useTranslation()

    const {
        //data: pages = [],
        isFetching,
        isSuccess,
        error,
        refetch,
    } = useGetPageTypesQuery()

    const successLoad = !isFetching && isSuccess

    return (
        <Scaffold>
            <TopBar
                title={t(`route.dashboard`)}
                subtitle="Hi, Name Surname"
                suffix={<StatusCard pro />}
            />
            {successLoad ? (
                <ScrollView>
                    <VStack p="$4" gap="$4">
                        {/* {pages.map((value, index) => (
                            <CardButton
                                key={index}
                                label={value.page_type_name}
                                onPress={() => {}}
                            />
                        ))} */}
                        <CardButton
                            label={t('section.health.numerology')}
                            onPress={() =>
                                navigation.navigate(routes.NUMBERS, {
                                    title: t('section.health.numerology'),
                                    type: 'health' as PageType,
                                })
                            }
                        />
                        <CardButton
                            label={t('section.fate.cards')}
                            onPress={() =>
                                navigation.navigate(routes.FATE_CARDS)
                            }
                        />
                        <CardButton
                            label={t('section.professions')}
                            onPress={() =>
                                navigation.navigate(routes.NUMBERS, {
                                    title: t('section.professions'),
                                    type: 'professions' as PageType,
                                })
                            }
                        />
                        <CardButton
                            label={t('section.weaknesses')}
                            onPress={() =>
                                navigation.navigate(routes.NUMBERS, {
                                    title: t('section.weaknesses'),
                                    type: 'negative-traits' as PageType,
                                })
                            }
                        />
                        <CardButton
                            label={t('section.lucky.numbers')}
                            onPress={() =>
                                navigation.navigate(routes.LUCKY_NUMBERS)
                            }
                        />
                        <CardButton
                            label={t('section.planets')}
                            onPress={() => navigation.navigate(routes.PLANETS)}
                        />
                        <CardButton
                            label={t('section.ancestors')}
                            onPress={() =>
                                navigation.navigate(routes.NUMBERS, {
                                    title: t('section.ancestors'),
                                    type: 'ancestors' as PageType,
                                })
                            }
                        />
                    </VStack>
                </ScrollView>
            ) : (
                <SplashScreen error={error} refetch={refetch} />
            )}
        </Scaffold>
    )
}
