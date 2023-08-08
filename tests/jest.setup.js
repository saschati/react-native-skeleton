import 'react-native-gesture-handler/jestSetup'

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
)

const mockedNavigation = jest.fn()
jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: () => ({
      navigate: mockedNavigation,
    }),
  }
})
jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter')

//! https://stackoverflow.com/a/50793993/11419254
jest.useFakeTimers()
