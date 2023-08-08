module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          // components
          '@/components': './src/components',
          '@/Domain': './src/components/Domain',
          '@/Native': './src/components/Native',
          '@/UI': './src/components/UI',
          '@/Common': './src/components/Common',
          // app
          '@/app': './src/app',
          '@/config': './src/app/config',
          '@/redux': './src/app/store/redux',
          // assets
          '@/assets': './src/assets/img',
          '@/img': './src/assets/img',
          // navigation
          '@/navigation': './src/navigation',
          '@/routers': './src/navigation/routers',
          '@/screens': './src/navigation/screens',
          // other
          '@/helpers': './src/helpers',
          '@/hooks': './src/hooks',
          '@/nativeModules': './src/nativeModules',
          '@/types': './src/types',
          '@/utils': './src/utils',
        },
      },
    ],
    ['transform-inline-environment-variables'],
    [
      'module:react-native-dotenv',
      {
        envName: 'APP_ENV',
        moduleName: '@env',
        path: '.env',
        blocklist: null,
        allowlist: null,
        safe: false,
        allowUndefined: true,
        verbose: false,
      },
    ],
    ['@babel/plugin-proposal-private-methods', { loose: true }],
  ],
}
