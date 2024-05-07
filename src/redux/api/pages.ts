import { api } from '.'
import { PageTypeInterface } from '@/types/interface/numbers'

const pagesApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getPageTypes: builder.query<PageTypeInterface[], void>({
            query: () => ({
                url: 'page-type/all',
            }),
        }),
    }),
})

export const { useGetPageTypesQuery } = pagesApi
