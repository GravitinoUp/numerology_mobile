import { ParamListBase } from '@react-navigation/native'
import {
    NativeStackNavigationProp,
    NativeStackScreenProps,
} from '@react-navigation/native-stack'

export type DefaultStackScreenProps = NativeStackScreenProps<ParamListBase>

export type DefaultStackNavigationProp =
    NativeStackNavigationProp<ParamListBase>
