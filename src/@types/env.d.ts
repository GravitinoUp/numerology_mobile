declare module 'react-native-config' {
    export interface NativeConfig {
        DEFAULT_HOST?: string
    }

    export const Config: NativeConfig
    export default Config
}
