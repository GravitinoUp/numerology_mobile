import { api } from '.'
import { GraphLineInterface } from '@/types/interface/graph'
import { ResultInterface, PageType } from '@/types/interface/numbers'

const numbersApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getNumbers: builder.query<
            ResultInterface[],
            { type: PageType; query?: string | number }
        >({
            query: ({ type, query }) => ({
                url: `number/${type}?query=${query}`,
            }),
        }),
        getSingleNumber: builder.query<
            ResultInterface,
            { type: PageType; query?: string | number }
        >({
            query: ({ type, query }) => ({
                url: `number/${type}?query=${query}`,
            }),
        }),
        getCompatibility: builder.query<
            ResultInterface[],
            { first_partner_date: string; second_partner_date: string }
        >({
            query: (body) => ({
                url: `number/compatibility`,
                method: 'POST',
                body,
            }),
        }),
        getGraphs: builder.query<GraphLineInterface[], void>({
            query: () => ({
                url: `number/graphs`,
            }),
        }),
        getLuckyNumbers: builder.query<number[], void>({
            query: () => ({
                url: 'number/lucky-numbers',
            }),
        }),
    }),
})

export const {
    useGetNumbersQuery,
    useGetSingleNumberQuery,
    useGetCompatibilityQuery,
    useGetGraphsQuery,
    useGetLuckyNumbersQuery,
} = numbersApi
