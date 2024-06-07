import { Center, Text } from '@gluestack-ui/themed'
import { ListXIcon } from 'lucide-react-native'
import { AppColors } from '@/constants/theme'

type EmptyListProps = {
    text: string
}

const EmptyList = ({ text }: EmptyListProps) => (
    <Center flex={1} justifyContent="center">
        <ListXIcon size={48} color={AppColors.text} />
        <Text mt="$2" fontSize="$lg" color={AppColors.text}>
            {text}
        </Text>
    </Center>
)

export default EmptyList
