import { api } from '.'
import { PageInterface, PageType } from '@/types/interface/numbers'

const numbersApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getNumbers: builder.query<
            PageInterface[],
            { type: PageType; query?: string | number }
        >({
            query: ({ type, query }) => ({
                url: `number/${type}?query=${query}`,
            }),
        }),
        getSingleNumber: builder.query<
            PageInterface,
            { type: PageType; query?: string | number }
        >({
            query: ({ type, query }) => ({
                url: `number/${type}?query=${query}`,
            }),
        }),
        getFateCard: builder.query<PageInterface, void>({
            query: () => ({
                url: 'number/fate-card',
            }),
        }),
    }),
})

export const {
    useGetNumbersQuery,
    useGetSingleNumberQuery,
    useGetFateCardQuery,
} = numbersApi
