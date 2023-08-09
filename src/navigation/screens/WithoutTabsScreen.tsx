import Layout from '@/Common/Layout'
import Button from '@/UI/Button/Button'
import { Routes } from '@/config/routes'
import useNavigator from '@/hooks/useNavigator'
import styles from '@/styles/screen'
import React from 'react'
import { Text, View } from 'react-native'

const WithoutTabsScreen = () => {
  const { navigation } = useNavigator<Routes.WithoutTabs>()

  return (
    <Layout>
      <View style={styles.screenCenter}>
        <Text>WithoutTabs Screen</Text>
        <Button
          title='Go to Home'
          onPress={() => {
            navigation.navigate(Routes.Main, { screen: Routes.MainHome, params: { screen: Routes.Home } })
          }}
        />
        <Button
          title='Go back'
          onPress={() => {
            navigation.goBack()
          }}
        />
      </View>
    </Layout>
  )
}

export default WithoutTabsScreen
