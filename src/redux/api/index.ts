import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import i18next from 'i18next'
import Config from 'react-native-config'
import { getJWTtokens } from '@/utils/helpers'

export const api = createApi({
    reducerPath: 'api',
    refetchOnReconnect: true,
    baseQuery: fetchBaseQuery({
        baseUrl: Config.DEFAULT_HOST,
        prepareHeaders: async (headers) => {
            const { accessToken } = await getJWTtokens()

            headers.set('Accept-Language', i18next.language)
            if (accessToken) {
                headers.set('Authorization', `Bearer ${accessToken}`)
            }

            return headers
        },
    }),
    tagTypes: ['User'],
    endpoints: () => ({}),
})

export const chatApi = createApi({
    reducerPath: 'chat-api',
    refetchOnReconnect: true,
    baseQuery: fetchBaseQuery({
        baseUrl: Config.CHAT_HOST,
    }),
    tagTypes: ['Chat'],
    endpoints: () => ({}),
})
