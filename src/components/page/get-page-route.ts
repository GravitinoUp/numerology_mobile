import { routes } from '@/constants/routes'
import { PageType } from '@/types/interface/numbers'

const getPageRoute = (type: PageType) => {
    switch (type) {
        case 'fate-card':
            return routes.NUMBERS // CARD
        case 'graph':
            return routes.CHARTS
        case 'blood-type':
            return routes.BLOOD_TYPE
        case 'phone-calculation':
            return routes.INPUT_NUMBERS
        case 'house-calculation':
            return routes.INPUT_NUMBERS
        case 'prediction':
            return routes.NUMBERS
        case 'birthday-style':
            return routes.DATE_NUMBERS
        case 'compatibility':
            return routes.COMPATIBILITY
        case 'color-graph':
            return routes.COLOR_GRAPH
        case 'fate-number-gifts':
            return routes.DATE_NUMBERS
        case 'totemic-animals':
            return routes.NUMBERS
        case 'lucky-numbers':
            return routes.LUCKY_NUMBERS
        case 'guessing-number':
            return routes.INPUT_NUMBERS
        case 'placeholder':
            return routes.PLACEHOLDER
        default:
            return routes.NUMBERS
    }
}

export default getPageRoute
