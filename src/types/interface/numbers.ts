export interface ResultInterface {
    result_uuid: string
    result_keys: string[]
    result_name: string
    result_content: string
    formula_type: FormulaTypeInterface
}

export interface FormulaTypeInterface {
    formula_type_id: number
    formula_type_name: string
    formula_type_description: string
}

export type PageType =
    | 'destiny-program'
    | 'strong-qualities'
    | 'fate-card'
    | 'weak-qualities'
    | 'planets'
    | 'karma'
    | 'health'
    | 'blood'
    | 'charts'
    | 'phone-calculation'
    | 'house-calculation'
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
    | 'guessing-number'
    | 'ancestors'
