import { useEffect, useRef, useState } from 'react'
import { HStack, VStack } from '@gluestack-ui/themed'
import { SendIcon } from 'lucide-react-native'
import { useTranslation } from 'react-i18next'
import { ScrollView } from 'react-native'
import ChatMessage from './components/chat-message'
import { History } from './constants'
import IconButton from '@/components/icon-button/icon-button'
import TopBar from '@/components/top-bar/top-bar'
import AppInput from '@/components/ui/input'
import Scaffold from '@/components/ui/scaffold'
import { AppColors } from '@/constants/theme'
import useErrorToast from '@/hooks/use-error-toast'
import { useGetAnswerMutation } from '@/redux/api/chat'

export default function AIHelper() {
    const { t } = useTranslation()

    const ref = useRef<ScrollView>(null)
    const [question, setQuestion] = useState('')

    const [history, setHistory] = useState<History[]>([])

    const [getAnswer, { data, error, isSuccess, isLoading }] =
        useGetAnswerMutation()

    useEffect(() => {
        if (isSuccess) {
            setHistory([
                ...history,
                { role: 'assistant', content: data.answer },
            ])
        }
    }, [isSuccess])

    useErrorToast(error)

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
                keyboardShouldPersistTaps="handled"
            >
                <VStack mx="$4" gap="$4">
                    {history.map((value, index) => (
                        <ChatMessage key={index} value={value} />
                    ))}
                    {isLoading && (
                        <ChatMessage
                            value={{
                                role: 'assistant',
                                content: 'Ищу ответ на вопрос...',
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
                        if (question.trim() !== '') {
                            const userQuestion: History = {
                                role: 'user',
                                content: question,
                            }

                            getAnswer({
                                messages: history,
                                question: userQuestion.content,
                            })

                            setHistory([...history, userQuestion])
                            setQuestion('')
                        }
                    }}
                />
            </HStack>
        </Scaffold>
    )
}
