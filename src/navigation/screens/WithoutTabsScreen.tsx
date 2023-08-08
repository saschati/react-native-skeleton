import Layout from '@/Common/Layout'
import Button from '@/UI/Button/Button'
import { Routes } from '@/config/routes'
import useNavigator from '@/hooks/useNavigator'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const WithoutTabsScreen = () => {
  const { navigation } = useNavigator<Routes.WithoutTabs>()

  return (
    <Layout>
      <View style={styles.screen}>
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

const styles = StyleSheet.create({
  screen: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 8 },
})

export default WithoutTabsScreen
