import { api } from '.'
import { FetchResultInterface } from '@/types/interface'
import { UserPayloadInterface } from '@/types/interface/users'

const usersApi = api.injectEndpoints({
    endpoints: (builder) => ({
        createUser: builder.mutation<
            FetchResultInterface,
            UserPayloadInterface
        >({
            query: (body) => ({
                url: 'auth',
                method: 'POST',
                body,
            }),
        }),
    }),
})

export const { useCreateUserMutation } = usersApi
