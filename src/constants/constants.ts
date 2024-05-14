import { routes } from './routes'
import { CategoryInterface } from '@/types/interface/categories'

export const ACTIVE_OPACITY = 0.7

export const MAX_WIDTH = 340

export const phoneCountries = [
    { label: '+7', value: '+7' },
    { label: '+88', value: '+88' },
    { label: '+888', value: '+888' },
]

export const INPUT_LENGTH: { [page: string]: number } = {
    'house-calculation': 1,
    'guessing-number': 9,
}

export const categories: CategoryInterface[] = [
    {
        label: 'Карма. прошлая жизнь',
        image: require('@/assets/images/karma.png'),
        pages: [],
    },
    {
        label: 'Здоровье',
        image: require('@/assets/images/health.png'),
        pages: [
            {
                label: 'Нумерология здоровья',
                route: routes.NUMBERS,
                type: 'health',
            },
            {
                label: 'Группа крови и нумерология',
                route: routes.NUMBERS,
                type: 'blood',
            },
        ],
    },
    {
        label: 'Прогноз',
        image: require('@/assets/images/prediction.png'),
        pages: [],
    },
    {
        label: 'Нумерологические расчеты',
        image: require('@/assets/images/numerology_calculations.png'),
        pages: [
            {
                label: 'Расчет номера телефона',
                route: routes.INPUT_NUMBERS,
                type: 'phone-calculation',
            },
            {
                label: 'Расчет номера дома',
                route: routes.INPUT_NUMBERS,
                type: 'house-calculation',
            },
            {
                label: 'Прогноз',
                route: routes.NUMBERS,
                type: 'prediction',
            },
        ],
    },
    {
        label: 'Стиль по дате рождения',
        image: require('@/assets/images/birthdate_style.png'),
        pages: [],
    },
    {
        label: 'Совместимость',
        image: require('@/assets/images/compatibility.png'),
        pages: [],
    },
    {
        label: 'Цветограмма',
        image: require('@/assets/images/color_palette.png'),
        pages: [],
    },
    {
        label: 'Полезная нумерология',
        image: require('@/assets/images/useful_numerology.png'),
        pages: [
            {
                label: 'Формулы на все случаи жизни',
                route: routes.NUMBERS,
                type: 'formula',
            },
            {
                label: 'Подарки по числу судьбы',
                route: routes.NUMBERS,
                type: 'gift',
            },
            {
                label: 'Тотемное животное',
                route: routes.NUMBERS,
                type: 'animal',
            },
            {
                label: 'Числа удачи',
                route: routes.LUCKY_NUMBERS,
                type: 'lucky-numbers',
            },
            {
                label: 'Ангельская нумерология',
                route: routes.NUMBERS,
                type: 'angel',
            },
            {
                label: 'Профессии и самореализация',
                route: routes.NUMBERS,
                type: 'professions',
            },
            {
                label: 'Чтение мыслей по числам',
                route: routes.INPUT_NUMBERS,
                type: 'guessing-number',
            },
            {
                label: 'Кем были ваши предки',
                route: routes.NUMBERS,
                type: 'ancestors',
            },
        ],
    },
]
