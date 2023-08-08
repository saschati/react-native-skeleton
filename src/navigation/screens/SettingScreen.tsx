import Layout from '@/Common/Layout'
import Button from '@/UI/Button/Button'
import { Routes } from '@/config/routes'
import useNavigator from '@/hooks/useNavigator'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const SettingScreen = () => {
  const { navigation } = useNavigator<Routes.Setting>()

  return (
    <Layout>
      <View style={styles.screen}>
        <Text>Setting Screen</Text>
        <Button title='Go to Without tabs' onPress={() => navigation.navigate(Routes.WithoutTabs)} />
        <Button title='Go back' onPress={() => navigation.goBack()} />
      </View>
    </Layout>
  )
}

const styles = StyleSheet.create({
  screen: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 8 },
})

export default SettingScreen
