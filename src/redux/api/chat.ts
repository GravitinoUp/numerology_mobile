import { chatApi } from '.'
import { Answer, ChatQuery } from '@/types/interface/chat'

const chatBotApi = chatApi.injectEndpoints({
    endpoints: (builder) => ({
        getAnswer: builder.mutation<Answer, ChatQuery>({
            query: (body) => ({
                url: 'query',
                method: 'POST',
                body,
            }),
        }),
    }),
})

export const { useGetAnswerMutation } = chatBotApi
