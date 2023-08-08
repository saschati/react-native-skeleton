import React from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import { AuthProvider } from '@/Domain/Auth'
import { store } from '@/redux/store'
import Navigator from '@/navigation/Navigator'

export default () => {
  return (
    <ReduxProvider store={store}>
      <AuthProvider>
        <Navigator />
      </AuthProvider>
    </ReduxProvider>
  )
}
