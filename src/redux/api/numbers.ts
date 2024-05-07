import { api } from '.'
import { PageInterface, PageType } from '@/types/interface/numbers'

const numbersApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getNumbers: builder.query<PageInterface[], PageType>({
            query: (type) => ({
                url: `number/${type}`,
            }),
        }),
        getHealthNumerology: builder.query<PageInterface[], void>({
            query: () => ({
                url: 'number/health',
            }),
        }),
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
        getPlanets: builder.query<PageInterface[], void>({
            query: () => ({
                url: 'number/planets',
            }),
        }),
    }),
})

export const {
    useGetNumbersQuery,
    useGetHealthNumerologyQuery,
    useGetFateCardQuery,
    useGetProfessionsQuery,
    useGetPlanetsQuery,
} = numbersApi
