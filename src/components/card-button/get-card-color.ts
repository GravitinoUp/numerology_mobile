import { AppColors } from '@/constants/theme'
import { PageType } from '@/types/interface/numbers'

const getCardColor = (type: PageType) => {
    switch (type) {
        case 'destiny':
            return '#0085FF'
        case 'strong-qualities':
            return '#4B3DAA'
        case 'fate-card':
            return '#796095'
        case 'weak-qualities':
            return '#667176'
        case 'planets':
            return '#4F3F39'
        case 'karma':
            return ''
        case 'health':
            return '#2BB986'
        case 'blood':
            return '#D32F31'
        case 'charts':
            return ''
        case 'phone':
            return '#0085FF'
        case 'home':
            return '#4B3DAA'
        case 'prediction':
            return '#F29F15'
        case 'birthdate-style':
            return ''
        case 'compatibility':
            return ''
        case 'color-palette':
            return ''
        case 'formula':
            return '#0085FF'
        case 'gift':
            return '#CE5A51'
        case 'animal':
            return '#00A692'
        case 'lucky-numbers':
            return '#F29F15'
        case 'angel':
            return '#5EBBFF'
        case 'professions':
            return '#4B3016'
        case 'guessing-number':
            return '#4B3DAA'
        case 'ancestors':
            return '#FF7C7C'
        default:
            return AppColors.proColor
    }
}

export default getCardColor
