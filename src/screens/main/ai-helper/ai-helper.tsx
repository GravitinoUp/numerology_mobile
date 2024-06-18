import { useRef, useState } from 'react'
import { HStack, Text, VStack } from '@gluestack-ui/themed'
import { SendIcon } from 'lucide-react-native'
import { useTranslation } from 'react-i18next'
import { Image, ScrollView } from 'react-native'
import ChatMessage from './components/chat-message'
import { History } from './constants'
import IconButton from '@/components/icon-button/icon-button'
import TopBar from '@/components/top-bar/top-bar'
import AppInput from '@/components/ui/input'
import Scaffold from '@/components/ui/scaffold'
import { AppColors } from '@/constants/theme'

export default function AIHelper() {
    const { t } = useTranslation()

    const ref = useRef<ScrollView>(null)
    const [question, setQuestion] = useState('')

    const [history, setHistory] = useState<History[]>([
        { type: 'answer', message: 'Задайте свой запрос' },
        { type: 'question', message: 'Что означает число 6 в нумерологии?' },
        {
            type: 'answer',
            message:
                'Число 6 в нумерологии, значение числа и его влияние на человека Числа имеют особую энергию, которая оказывает влияние на нашу жизнь и характер. В нумерологии число 6 считается одним из наиболее гармоничных и стабильных чисел. Оно символизирует гармонию, семью, ответственность и заботу о других.',
        },
        {
            type: 'question',
            message: 'В каком разделе можно найти числа удачи?',
        },
        { type: 'answer', message: 'Ответ чат-бота' },
        {
            type: 'question',
            message:
                'Какие профессии подойдут человеку, который родился 01.01.1999?',
        },
        { type: 'answer', message: 'Ответ чат-бота' },
        { type: 'question', message: 'Вопрос пользователя' },
        { type: 'answer', message: 'Ответ чат-бота' },
        { type: 'question', message: 'Вопрос пользователя' },
    ])

    return (
        <Scaffold style={{ backgroundColor: AppColors.primary }}>
            <TopBar title={t('route.ai')} softShadow="4" />
            <ScrollView
                ref={ref}
                contentContainerStyle={{
                    flexGrow: 1,
                    justifyContent: 'flex-end',
                    paddingVertical: 8,
                }}
                onContentSizeChange={() => ref.current?.scrollToEnd()}
            >
                <VStack mx="$4" gap="$4">
                    {history.map((value, index) => (
                        <HStack
                            maxWidth="$5/6"
                            alignSelf={
                                value.type === 'answer'
                                    ? 'flex-start'
                                    : 'flex-end'
                            }
                            px="$3"
                            py="$2"
                            rounded="$2xl"
                            key={index}
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
                                            <Text
                                                fontWeight="$semibold"
                                                color={'#0085FF'}
                                            >
                                                Чат-GPT
                                            </Text>
                                            <Text
                                                fontSize="$sm"
                                                color={AppColors.hint}
                                            >
                                                Ответ на вопрос
                                            </Text>
                                        </VStack>
                                    </HStack>
                                ) : (
                                    <Text
                                        fontWeight="$semibold"
                                        color={AppColors.chatColor}
                                    >
                                        Вы
                                    </Text>
                                )}
                                <VStack flexShrink={1}>
                                    <Text
                                        color={AppColors.text}
                                        flexWrap="wrap"
                                    >
                                        {value.message}
                                    </Text>
                                </VStack>
                            </VStack>
                        </HStack>
                    ))}
                    {false && (
                        <ChatMessage
                            value={{
                                type: 'answer',
                                message: 'Ищу ответ на вопрос...',
                            }}
                        />
                    )}
                </VStack>
            </ScrollView>
            <HStack p="$2" gap="$2" alignItems="center">
                <AppInput
                    value={question}
                    onChangeText={setQuestion}
                    style={{ flex: 1, overflow: 'hidden' }}
                    inputStyle={{
                        backgroundColor: '#003361',
                        borderColor: AppColors.transparent,
                        '$focus-borderColor': AppColors.transparent,
                        borderCurve: 'continuous',
                        borderRadius: '$2xl',
                    }}
                    color={AppColors.background}
                    placeholder={'Задайте вопрос нейросети'}
                    placeholderTextColor={'#70bbff'}
                    required
                />
                <IconButton
                    style={{ backgroundColor: AppColors.transparent }}
                    icon={<SendIcon color={AppColors.background} />}
                    onPress={() => {
                        setHistory([
                            ...history,
                            { type: 'question', message: question },
                        ])
                        setQuestion('')
                    }}
                />
            </HStack>
        </Scaffold>
    )
}
