module.exports = {
    presets: ['module:@react-native/babel-preset'],
    plugins: [
        [
            'module-resolver',
            {
                root: ['.'],
                extensions: [
                    '.ios.ts',
                    '.ios.tsx',
                    '.android.ts',
                    '.android.tsx',
                    '.ts',
                    '.tsx',
                ],
                alias: {
                    '@': './src/',
                },
            },
        ],
        [
            'module:react-native-dotenv',
            {
                moduleName: '@env',
                path: '.env',
            },
        ],
    ],
}
