import { Fragment, useState } from 'react'
import { Center, HStack, Text, VStack, View } from '@gluestack-ui/themed'
import { useTranslation } from 'react-i18next'
import { Dimensions, Image } from 'react-native'
import Config from 'react-native-config'
import DatePicker from 'react-native-date-picker'
import DropShadow from 'react-native-drop-shadow'
import NumbersLayout from '../components/numbers-layout'
import PlusIcon from '@/assets/icons/plus'
import DescriptionActionsheet from '@/components/description-actionsheet/description-actionsheet'
import ExpandableCard from '@/components/expandable-card/expandable-card'
import IconButton from '@/components/icon-button/icon-button'
import PageLabel from '@/components/page/page-label'
import AppButton from '@/components/ui/button'
import AppScrollView from '@/components/ui/scroll-view'
import { MEDIUM_MAX_WIDTH } from '@/constants/constants'
import { AppColors, AppShapes } from '@/constants/theme'
import { useGetCompatibilityQuery } from '@/redux/api/numbers'
import { useGetCurrentUserQuery } from '@/redux/api/users'
import SplashScreen from '@/screens/splash/splash-screen'
import { DefaultStackScreenProps } from '@/types/interface'
import { PageInterface } from '@/types/interface/pages'
import { formatDateISO } from '@/utils/helpers'

export default function CompatibilityScreen({
    navigation,
    route,
}: DefaultStackScreenProps) {
    const { t } = useTranslation()
    const routeParams = route.params as PageInterface

    const [actionsheetOpen, setActionsheetOpen] = useState(false)
    const [actionsheetDate, setActionsheetDate] = useState(new Date())

    const [secondDate, setSecondDate] = useState<Date | undefined>(undefined)

    const { data: user } = useGetCurrentUserQuery()

    const { data, isFetching, isSuccess, error, refetch } =
        useGetCompatibilityQuery(
            {
                first_partner_date: formatDateISO(
                    user
                        ? new Date(
                              user!.person.birthday_year,
                              user!.person.birthday_year,
                              user!.person.birthday_year
                          )
                        : new Date()
                ),
                second_partner_date: formatDateISO(secondDate),
            },
            { skip: !secondDate }
        )

    const successLoad = !isFetching && isSuccess

    return (
        <Fragment>
            <NumbersLayout
                description={routeParams.page_description}
                navigation={navigation}
            >
                <AppScrollView
                    contentContainerStyle={{ justifyContent: 'flex-start' }}
                    maxWidth={MEDIUM_MAX_WIDTH}
                >
                    <Image
                        style={{
                            height: Dimensions.get('window').height * 0.3,
                            maxHeight: 280,
                            backgroundColor: AppColors.primary,
                            borderRadius: AppShapes.largeRadius,
                            marginHorizontal: 16,
                        }}
                        source={{
                            uri: `${Config.DEFAULT_HOST}${routeParams.page_image}`,
                        }}
                    />
                    <PageLabel
                        bgColor={routeParams.color}
                        type={routeParams.key}
                        top={-22}
                    >
                        {routeParams.page_name}
                    </PageLabel>
                    <VStack p="$4" gap="$4">
                        <HStack justifyContent="center" gap={-8}>
                            <DropShadow
                                style={{
                                    shadowColor: '#091219',
                                    shadowOffset: {
                                        width: 0,
                                        height: 2,
                                    },
                                    shadowOpacity: 0.2,
                                    shadowRadius: 3,
                                }}
                            >
                                <IconButton
                                    style={{ width: 54, height: 54 }}
                                    icon={
                                        <Text
                                            fontWeight="$bold"
                                            color={AppColors.text}
                                        >
                                            {t('you')}
                                        </Text>
                                    }
                                    onPress={() => {}}
                                />
                            </DropShadow>
                            <DropShadow
                                style={{
                                    shadowColor: '#091219',
                                    shadowOffset: {
                                        width: 0,
                                        height: 2,
                                    },
                                    shadowOpacity: 0.2,
                                    shadowRadius: 3,
                                }}
                            >
                                <IconButton
                                    style={{ width: 54, height: 54 }}
                                    icon={<PlusIcon />}
                                    onPress={() => setActionsheetOpen(true)}
                                />
                            </DropShadow>
                        </HStack>
                        {secondDate ? (
                            successLoad ? (
                                data.map((value, index) => (
                                    <ExpandableCard
                                        key={index}
                                        prefix={
                                            <Text
                                                fontWeight="$bold"
                                                color={AppColors.text}
                                            >
                                                {value.result_keys[0]}
                                            </Text>
                                        }
                                        result={value}
                                        adaptive={false}
                                    />
                                ))
                            ) : (
                                <SplashScreen error={error} refetch={refetch} />
                            )
                        ) : (
                            <Center>
                                <Text
                                    fontSize="$lg"
                                    fontWeight="$medium"
                                    color={AppColors.hint}
                                    textAlign="center"
                                >
                                    {t('select.date')}
                                </Text>
                            </Center>
                        )}
                    </VStack>
                </AppScrollView>
            </NumbersLayout>
            <DescriptionActionsheet
                title={t('select.date')}
                actionsheetOpen={actionsheetOpen}
                setActionsheetOpen={setActionsheetOpen}
            >
                <View
                    mt="$8"
                    borderRadius="$lg"
                    borderColor={AppColors.border}
                    borderWidth="$1"
                    alignItems="center"
                >
                    <DatePicker
                        mode="date"
                        theme="light"
                        date={actionsheetDate}
                        onDateChange={setActionsheetDate}
                    />
                </View>
                <AppButton
                    mt="$10"
                    text={t('action.save')}
                    onPress={() => {
                        setSecondDate(actionsheetDate)
                        setActionsheetOpen(false)
                    }}
                />
            </DescriptionActionsheet>
        </Fragment>
    )
}
