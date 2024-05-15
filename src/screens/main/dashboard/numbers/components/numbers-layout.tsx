import { useState } from 'react'
import { Text } from '@gluestack-ui/themed'
import { InfoIcon } from 'lucide-react-native'
import DescriptionActionsheet from '@/components/description-actionsheet/description-actionsheet'
import IconButton from '@/components/icon-button/icon-button'
import TopBar from '@/components/top-bar/top-bar'
import Scaffold from '@/components/ui/scaffold'
import { AppColors } from '@/constants/theme'
import { DefaultStackNavigationProp } from '@/types/interface'

type NumbersLayoutProps = {
    title?: string
    description?: string
    navigation: DefaultStackNavigationProp
    children: React.ReactNode
}

const NumbersLayout = ({
    title,
    description,
    navigation,
    children,
}: NumbersLayoutProps) => {
    const [actionsheetOpen, setActionsheetOpen] = useState(false)

    return (
        <Scaffold>
            <TopBar
                title={title}
                navigation={navigation}
                suffix={
                    description && (
                        <IconButton
                            icon={<InfoIcon color={AppColors.text} />}
                            onPress={() => setActionsheetOpen(true)}
                        />
                    )
                }
            />
            {children}
            {description && (
                <DescriptionActionsheet
                    actionsheetOpen={actionsheetOpen}
                    setActionsheetOpen={setActionsheetOpen}
                >
                    <Text color={AppColors.text}>{description}</Text>
                </DescriptionActionsheet>
            )}
        </Scaffold>
    )
}

export default NumbersLayout
