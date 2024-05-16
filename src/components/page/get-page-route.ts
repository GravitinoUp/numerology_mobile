import { routes } from '@/constants/routes'
import { PageType } from '@/types/interface/numbers'

const getPageRoute = (type: PageType) => {
    switch (type) {
        case 'fate-card':
            return routes.NUMBERS // CARD
        case 'charts':
            return routes.NUMBERS // CHARTS
        case 'phone-calculation':
            return routes.INPUT_NUMBERS
        case 'house-calculation':
            return routes.INPUT_NUMBERS
        case 'prediction':
            return routes.NUMBERS
        case 'birthdate-style':
            return routes.NUMBERS
        case 'compatibility':
            return routes.NUMBERS
        case 'color-palette':
            return routes.NUMBERS
        case 'gift':
            return routes.NUMBERS
        case 'animal':
            return routes.NUMBERS
        case 'lucky-numbers':
            return routes.NUMBERS
        case 'guessing-number':
            return routes.INPUT_NUMBERS
        default:
            return routes.NUMBERS
    }
}

export default getPageRoute
