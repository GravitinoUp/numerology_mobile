import { FormControlErrorText } from '@gluestack-ui/themed'

interface AppFormControlErrorTextProps {
    error?: string
}

const AppFormControlErrorText = ({ error }: AppFormControlErrorTextProps) => (
    <FormControlErrorText>{error}</FormControlErrorText>
)

export default AppFormControlErrorText
