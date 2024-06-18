import { HStack, Text, VStack } from '@gluestack-ui/themed'
import { Image } from 'react-native'
import { History } from '../constants'
import { AppColors } from '@/constants/theme'

type ChatMessageProps = {
    value: History
}

const ChatMessage = ({ value }: ChatMessageProps) => (
    <HStack
        maxWidth="$5/6"
        alignSelf={value.type === 'answer' ? 'flex-start' : 'flex-end'}
        px="$3"
        py="$2"
        rounded="$2xl"
        backgroundColor={AppColors.background}
        gap="$2"
    >
        <VStack gap="$1">
            {value.type === 'answer' ? (
                <HStack gap="$2" alignItems="center">
                    <Image
                        style={{
                            width: 40,
                            height: 40,
                            borderRadius: 999,
                            overflow: 'hidden',
                        }}
                        source={require('@/assets/images/matrix-77.png')}
                    />
                    <VStack>
                        <Text fontWeight="$semibold" color={'#0085FF'}>
                            Чат-GPT
                        </Text>
                        <Text fontSize="$sm" color={AppColors.hint}>
                            Ответ на вопрос
                        </Text>
                    </VStack>
                </HStack>
            ) : (
                <Text fontWeight="$semibold" color={AppColors.chatColor}>
                    Вы
                </Text>
            )}
            <VStack flexShrink={1}>
                <Text color={AppColors.text} flexWrap="wrap">
                    {value.message}
                </Text>
            </VStack>
        </VStack>
    </HStack>
)

export default ChatMessage
