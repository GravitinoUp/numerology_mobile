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
                url: 'users',
                method: 'POST',
                body,
            }),
        }),
        checkUserExists: builder.mutation<
            FetchResultInterface,
            { phone: string }
        >({
            query: (body) => ({
                url: 'users/check-exists',
                method: 'POST',
                body,
            }),
        }),
    }),
})

export const { useCreateUserMutation, useCheckUserExistsMutation } = usersApi
