import { Dispatch, SetStateAction } from 'react'
import { VStack } from '@gluestack-ui/themed'
import AppActionsheet from '../ui/actionsheet'

type DescriptionActionsheetProps = {
    title: string
    children: React.ReactNode
    actionsheetOpen: boolean
    setActionsheetOpen: Dispatch<SetStateAction<boolean>>
}

const DescriptionActionsheet = ({
    title,
    children,
    actionsheetOpen,
    setActionsheetOpen,
}: DescriptionActionsheetProps) => (
    <AppActionsheet
        title={title}
        isOpen={actionsheetOpen}
        onClose={() => setActionsheetOpen(false)}
    >
        <VStack p="$4">{children}</VStack>
    </AppActionsheet>
)

export default DescriptionActionsheet
