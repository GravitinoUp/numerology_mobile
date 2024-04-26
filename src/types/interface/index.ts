import { ParamListBase } from '@react-navigation/native'
import {
    NativeStackNavigationProp,
    NativeStackScreenProps,
} from '@react-navigation/native-stack'

export type DefaultStackScreenProps = NativeStackScreenProps<ParamListBase>

export type DefaultStackNavigationProp =
    NativeStackNavigationProp<ParamListBase>

export interface ErrorInterface {
    status: number
    data?: ErrorDataInterface
}

export interface ErrorDataInterface {
    text: string
    url: string
    method: string
    error: string
    statusCode: number
}
