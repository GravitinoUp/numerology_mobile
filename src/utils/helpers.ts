import { format } from 'date-fns'
import i18next from 'i18next'

export const formatDate = (
    date?: string | Date | null,
    includeTime?: boolean
) => {
    if (!date) {
        return ''
    }
    const newDate = new Date(date)
    return format(
        newDate,
        `${i18next.t('date.format')}${includeTime ? ' HH:mm' : ''}`
    )
}
