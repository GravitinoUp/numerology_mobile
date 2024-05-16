import { useEffect } from 'react'
import { SerializedError } from '@reduxjs/toolkit'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'
import { useTranslation } from 'react-i18next'
import { useAppToast } from './use-toast'
import { ErrorInterface } from '@/types/interface'

export default function useErrorToast(
    error?: FetchBaseQueryError | SerializedError | undefined
) {
    const { t } = useTranslation()
    const toast = useAppToast()

    useEffect(() => {
        if (error) {
            const errorData = error as ErrorInterface

            toast.showErrorToast({
                label: errorData.data
                    ? errorData.data.message
                    : t('error.default'),
            })
        }
    }, [error])
}
