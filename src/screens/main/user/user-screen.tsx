import { ScrollView, Text, VStack } from '@gluestack-ui/themed'
import { SettingsIcon } from 'lucide-react-native'
import { useTranslation } from 'react-i18next'
import { TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import BirthdayCard from './components/birthday-card'
import ProgressBar from '@/components/progress-bar/progress-bar'
import SectionTitle from '@/components/section/section-title'
import TopBar from '@/components/top-bar/top-bar'
import { AppColors } from '@/constants/colors'
import { routes } from '@/constants/routes'
import { DefaultStackScreenProps } from '@/types/interface'
import { UserData, UserType } from '@/types/interface/user'

export default function UserScreen({
    navigation,
    route,
}: DefaultStackScreenProps) {
    const { t } = useTranslation()

    const type: UserType = route.params
        ? (route.params as { type: UserType }).type
        : 'you'

    const userData: UserData =
        type === 'you'
            ? {
                  name: 'First',
                  lastName: 'Surname',
                  birthday: new Date(2000, 1, 28),
              }
            : {
                  name: 'Second',
                  lastName: 'Surname',
                  birthday: new Date(1998, 3, 24),
              }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TopBar
                title={t(`route.${type}`)}
                subtitle="Name Surname"
                suffix={
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => navigation.navigate(routes.SETTINGS)}
                    >
                        <SettingsIcon color={AppColors.background} />
                    </TouchableOpacity>
                }
            />
            <ScrollView px="$4">
                <BirthdayCard mt="$4" birthday={userData.birthday} />
                <VStack gap="$2">
                    <SectionTitle mt="$4" mb="$2">
                        Section 1
                    </SectionTitle>
                    <ProgressBar label="MATCH 1" value={50} />
                    <ProgressBar label="MATCH 2" value={24} />
                    <ProgressBar label="MATCH 3" value={98} />
                    <SectionTitle mt="$4" mb="$2">
                        Section 2
                    </SectionTitle>
                    <Text>{t('placeholder.long.default')}</Text>
                    <SectionTitle mt="$4" mb="$2">
                        Section 3
                    </SectionTitle>
                    <Text>{t('placeholder.long.default')}</Text>
                </VStack>
            </ScrollView>
        </SafeAreaView>
    )
}
