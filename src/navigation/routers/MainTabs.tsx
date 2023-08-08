import React, { memo } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeStack from './HomeStack'
import SettingScreen from '@/screens/SettingScreen'
import { Routes } from '@/config/routes'

const Tab = createBottomTabNavigator()

const StackNavigator: React.FC = (): JSX.Element => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name={Routes.MainHome} component={HomeStack} />
      <Tab.Screen name={Routes.Setting} component={SettingScreen} />
    </Tab.Navigator>
  )
}

export default memo(StackNavigator)
