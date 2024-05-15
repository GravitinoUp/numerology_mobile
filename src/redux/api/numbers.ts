import { api } from '.'
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
        getFateCard: builder.query<ResultInterface, void>({
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
