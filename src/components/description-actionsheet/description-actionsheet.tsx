import { Dispatch, SetStateAction } from 'react'
import { VStack } from '@gluestack-ui/themed'
import { useTranslation } from 'react-i18next'
import AppActionsheet from '../ui/actionsheet'

type DescriptionActionsheetProps = {
    children: React.ReactNode
    actionsheetOpen: boolean
    setActionsheetOpen: Dispatch<SetStateAction<boolean>>
}

const DescriptionActionsheet = ({
    children,
    actionsheetOpen,
    setActionsheetOpen,
}: DescriptionActionsheetProps) => {
    const { t } = useTranslation()

    return (
        <AppActionsheet
            title={t('description')}
            isOpen={actionsheetOpen}
            onClose={() => setActionsheetOpen(false)}
        >
            <VStack p="$4">{children}</VStack>
        </AppActionsheet>
    )
}

export default DescriptionActionsheet
