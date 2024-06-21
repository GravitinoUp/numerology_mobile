import { HStack, Text, VStack } from '@gluestack-ui/themed'
import { useTranslation } from 'react-i18next'
import { Image } from 'react-native'
import { History } from '../constants'
import { AppColors } from '@/constants/theme'

type ChatMessageProps = {
    value: History
}

const ChatMessage = ({ value }: ChatMessageProps) => {
    const { t } = useTranslation()

    return (
        <HStack
            maxWidth="$5/6"
            alignSelf={value.role === 'assistant' ? 'flex-start' : 'flex-end'}
            px="$3"
            py="$2"
            rounded="$2xl"
            backgroundColor={AppColors.background}
            gap="$2"
        >
            <VStack gap="$1">
                {value.role === 'assistant' ? (
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
                                {t('route.ai')}
                            </Text>
                            <Text fontSize="$sm" color={AppColors.hint}>
                                {t('answer')}
                            </Text>
                        </VStack>
                    </HStack>
                ) : (
                    <Text fontWeight="$semibold" color={AppColors.chatColor}>
                        {t('you')}
                    </Text>
                )}
                <VStack flexShrink={1}>
                    <Text color={AppColors.text} flexWrap="wrap">
                        {value.content}
                    </Text>
                </VStack>
            </VStack>
        </HStack>
    )
}

export default ChatMessage
