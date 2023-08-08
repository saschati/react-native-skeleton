import React, { memo } from 'react'
import HomeScreen from '@/screens/HomeScreen'
import DetailsScreen from '@/screens/DetailsScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Routes } from '@/config/routes'

const Stack = createNativeStackNavigator()

const StackNavigator: React.FC = (): JSX.Element => {
  return (
    <Stack.Navigator screenOptions={{ animation: 'slide_from_right' }}>
      <Stack.Screen name={Routes.Home} component={HomeScreen} options={{ title: 'Overview' }} />
      <Stack.Screen name={Routes.Details} component={DetailsScreen} />
    </Stack.Navigator>
  )
}

export default memo(StackNavigator)
