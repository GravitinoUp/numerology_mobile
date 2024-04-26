import { DEFAULT_HOST } from '@env'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { getJWTtokens } from '@/utils/helpers'

export const api = createApi({
    reducerPath: 'api',
    refetchOnReconnect: true,
    baseQuery: fetchBaseQuery({
        baseUrl: DEFAULT_HOST,
        prepareHeaders: async (headers) => {
            const { accessToken } = await getJWTtokens()

            if (accessToken) {
                headers.set('Authorization', `Bearer ${accessToken}`)
            }

            return headers
        },
    }),
    tagTypes: [],
    endpoints: () => ({}),
})
