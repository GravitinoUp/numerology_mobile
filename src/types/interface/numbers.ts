export interface PageInterface {
    page_uuid: string
    page_type_id: number
    page_keys: string[]
    page_title?: string
    page_name: string
    page_image: string
    page_content: string
}

export interface PageTypeInterface {
    page_type_id: number
    page_type_name: string
    page_type_description: string
}

export type PageType =
    | 'destiny'
    | 'strong-qualities'
    | 'fate-card'
    | 'weak-qualities'
    | 'planets'
    | 'karma'
    | 'health'
    | 'blood'
    | 'charts'
    | 'phone'
    | 'home'
    | 'prediction'
    | 'birthdate-style'
    | 'compatibility'
    | 'color-palette'
    | 'formula'
    | 'gift'
    | 'animal'
    | 'lucky-numbers'
    | 'angel'
    | 'professions'
    | 'mind'
    | 'ancestors'
