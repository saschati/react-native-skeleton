import { NativeModules } from 'react-native'

const { HelloModule } = NativeModules

export interface HelloModule {
  sayHello(name: string): Promise<string>
}

export default HelloModule as HelloModule
