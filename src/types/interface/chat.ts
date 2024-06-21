import { History } from '@/screens/main/ai-helper/constants'

export interface ChatQuery {
    messages?: History[]
    question: string
}

export interface Answer {
    answer: string
}
