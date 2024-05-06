import { api } from '.'
import { PageInterface } from '@/types/interface/numbers'

const numbersApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getFateCard: builder.query<PageInterface, void>({
            query: () => ({
                url: 'number/fate-card',
            }),
        }),
        getProfessions: builder.query<PageInterface[], void>({
            query: () => ({
                url: 'number/professions',
            }),
        }),
    }),
})

export const { useGetFateCardQuery, useGetProfessionsQuery } = numbersApi
