import { ImageSourcePropType } from 'react-native'
import { PageType } from './numbers'

export interface CategoryInterface {
    label: string
    image: ImageSourcePropType
    pages: {
        label: string
        route: string
        type: PageType
    }[]
}
