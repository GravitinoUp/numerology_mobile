import { useEffect, useRef, useState } from 'react'
import { Center, HStack, Text } from '@gluestack-ui/themed'
import { CommonActions } from '@react-navigation/native'
import { useTranslation } from 'react-i18next'
import { StyleSheet, TextInput } from 'react-native'
import { Logo } from '@/assets/icons/logo'
import TopBar from '@/components/top-bar/top-bar'
import AppButton from '@/components/ui/button'
import Scaffold from '@/components/ui/scaffold'
import AppScrollView from '@/components/ui/scroll-view'
import { AppColors } from '@/constants/theme'
import { MAX_WIDTH } from '@/constants/constants'
import { routes } from '@/constants/routes'
import { useAppDispatch } from '@/hooks/use-app-dispatch'
import { useAuthMutation } from '@/redux/api/auth'
import { useCreateUserMutation } from '@/redux/api/users'
import { setAccessToken, setRefreshToken } from '@/redux/reducers/authSlice'
import { DefaultStackScreenProps, ErrorInterface } from '@/types/interface'
import { UserPayloadInterface } from '@/types/interface/users'

export default function VerifyCodeScreen({
    navigation,
    route,
}: DefaultStackScreenProps) {
    const registerData = (
        route.params as { registerData: UserPayloadInterface }
    ).registerData

    const codeRef1 = useRef<TextInput>(null)
    const codeRef2 = useRef<TextInput>(null)
    const codeRef3 = useRef<TextInput>(null)
    const codeRef4 = useRef<TextInput>(null)
    const codeRef5 = useRef<TextInput>(null)
    const codeRef6 = useRef<TextInput>(null)

    const [code1, setCode1] = useState('')
    const [code2, setCode2] = useState('')
    const [code3, setCode3] = useState('')
    const [code4, setCode4] = useState('')
    const [code5, setCode5] = useState('')
    const [code6, setCode6] = useState('')

    const [error, setError] = useState<string | null>(null)

    const { t } = useTranslation()

    const dispatch = useAppDispatch()
    const [
        authUser,
        {
            data: authData,
            error: authError,
            isSuccess: authSuccess,
            isLoading: authLoading,
        },
    ] = useAuthMutation()

    const [
        registerUser,
        {
            error: registerError,
            isSuccess: registerSuccess,
            isLoading: registerLoading,
        },
    ] = useCreateUserMutation()

    const onSubmit = (code: number) => {
        setError(null)
        registerUser({
            ...registerData,
            code: code,
        })
    }

    useEffect(() => {
        if (registerSuccess) {
            authUser({
                phone: registerData.phone,
                password: registerData.password,
            })
        }
    }, [registerSuccess])

    useEffect(() => {
        if (authSuccess) {
            dispatch(setAccessToken(authData?.accessToken))
            dispatch(setRefreshToken(authData?.refreshToken))

            navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [{ name: routes.NAVIGATION }],
                })
            )
        }
    }, [authSuccess])

    useEffect(() => {
        if (registerError || authError) {
            const errorData = (registerError || authError) as ErrorInterface

            setError(
                errorData.data?.message
                    ? errorData.data?.message
                    : t('error.default')
            )
        }
    }, [registerError])

    return (
        <Scaffold>
            <TopBar navigation={navigation} />
            <AppScrollView maxWidth={MAX_WIDTH}>
                <Center justifyContent="center" mb="$4">
                    <Logo />
                </Center>
                <Text
                    fontSize="$2xl"
                    fontWeight="$bold"
                    color={AppColors.primary}
                    textAlign="center"
                >
                    {t('register.title')}
                </Text>
                <Text mt="$2" my="$8" color={AppColors.text} textAlign="center">
                    {t('register.description')}
                </Text>
                <HStack justifyContent="center" gap="$2">
                    <TextInput
                        ref={codeRef1}
                        style={styles.codeInput}
                        keyboardType="numeric"
                        maxLength={1}
                        value={code1}
                        onChangeText={(text) => {
                            if (text.length > 0) {
                                codeRef2.current?.focus()
                            }
                            setCode1(text)
                        }}
                    />
                    <TextInput
                        ref={codeRef2}
                        style={styles.codeInput}
                        keyboardType="numeric"
                        maxLength={1}
                        value={code2}
                        onChangeText={(text) => {
                            if (text.length > 0) {
                                codeRef3.current?.focus()
                            }
                            setCode2(text)
                        }}
                        onKeyPress={(e) => {
                            if (
                                code2.length === 0 &&
                                e.nativeEvent.key === 'Backspace'
                            ) {
                                codeRef1.current?.focus()
                            }
                        }}
                    />
                    <TextInput
                        ref={codeRef3}
                        style={styles.codeInput}
                        keyboardType="numeric"
                        maxLength={1}
                        value={code3}
                        onChangeText={(text) => {
                            if (text.length > 0) {
                                codeRef4.current?.focus()
                            }
                            setCode3(text)
                        }}
                        onKeyPress={(e) => {
                            if (
                                code3.length === 0 &&
                                e.nativeEvent.key === 'Backspace'
                            ) {
                                codeRef2.current?.focus()
                            }
                        }}
                    />
                    <TextInput
                        ref={codeRef4}
                        style={styles.codeInput}
                        keyboardType="numeric"
                        maxLength={1}
                        value={code4}
                        onChangeText={(text) => {
                            if (text.length > 0) {
                                codeRef5.current?.focus()
                            }
                            setCode4(text)
                        }}
                        onKeyPress={(e) => {
                            if (
                                code4.length === 0 &&
                                e.nativeEvent.key === 'Backspace'
                            ) {
                                codeRef3.current?.focus()
                            }
                        }}
                    />
                    <TextInput
                        ref={codeRef5}
                        style={styles.codeInput}
                        keyboardType="numeric"
                        maxLength={1}
                        value={code5}
                        onChangeText={(text) => {
                            if (text.length > 0) {
                                codeRef6.current?.focus()
                            }
                            setCode5(text)
                        }}
                        onKeyPress={(e) => {
                            if (
                                code5.length === 0 &&
                                e.nativeEvent.key === 'Backspace'
                            ) {
                                codeRef4.current?.focus()
                            }
                        }}
                    />
                    <TextInput
                        ref={codeRef6}
                        style={styles.codeInput}
                        keyboardType="numeric"
                        maxLength={1}
                        onChangeText={(text) => {
                            if (text.length > 0) {
                                onSubmit(
                                    Number(
                                        `${code1}${code2}${code3}${code4}${code5}${text}`
                                    )
                                )
                            }
                            setCode6(text)
                        }}
                        onKeyPress={(e) => {
                            if (
                                code6.length === 0 &&
                                e.nativeEvent.key === 'Backspace'
                            ) {
                                codeRef5.current?.focus()
                            }
                        }}
                    />
                </HStack>
                <Text mt="$1" textAlign="center" color={AppColors.error}>
                    {error}
                </Text>
                <Center>
                    <AppButton
                        w="$1/2"
                        mt="$8"
                        onPress={() => {
                            onSubmit(
                                Number(
                                    `${code1}${code2}${code3}${code4}${code5}${code6}`
                                )
                            )
                        }}
                        text={t('action.verify')}
                        isLoading={registerLoading || authLoading}
                    />
                </Center>
            </AppScrollView>
        </Scaffold>
    )
}

const styles = StyleSheet.create({
    codeInput: {
        width: 46,
        height: 46,
        borderRadius: 8,
        borderColor: AppColors.border,
        borderWidth: 1.5,
        textAlign: 'center',
        color: AppColors.text,
    },
})
