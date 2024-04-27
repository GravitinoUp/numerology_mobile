import AsyncStorage from '@react-native-async-storage/async-storage'
import { createSlice } from '@reduxjs/toolkit'
import { storageKeys } from '@/constants/storage'
import { AuthInterface } from '@/types/interface/auth'

const initialState: AuthInterface = {
    isLogin: false,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAccessToken: (_, action) => {
            AsyncStorage.setItem(storageKeys.accessToken, action.payload)
        },
        setRefreshToken: (_, action) => {
            AsyncStorage.setItem(storageKeys.refreshToken, action.payload)
        },
    },
})

export const { setAccessToken, setRefreshToken } = authSlice.actions
export default authSlice.reducer
