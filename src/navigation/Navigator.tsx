import React, { memo } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import HomeTabs from './routers/MainTabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import WithoutTabsScreen from './screens/WithoutTabsScreen'
import { Routes } from '@/config/routes'

const Stack = createNativeStackNavigator()

const Navigator: React.FC = (): JSX.Element => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={Routes.Main} component={HomeTabs} />
        <Stack.Screen name={Routes.WithoutTabs} component={WithoutTabsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default memo(Navigator)
