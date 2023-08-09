import Layout from '@/Common/Layout'
import Button from '@/UI/Button/Button'
import { Routes } from '@/config/routes'
import useNavigator from '@/hooks/useNavigator'
import styles from '@/styles/screen'
import React from 'react'
import { Text, View } from 'react-native'

const SettingScreen = () => {
  const { navigation } = useNavigator<Routes.Setting>()

  return (
    <Layout>
      <View style={styles.screenCenter}>
        <Text>Setting Screen</Text>
        <Button title='Go to Without tabs' onPress={() => navigation.navigate(Routes.WithoutTabs)} />
        <Button title='Go back' onPress={() => navigation.goBack()} />
      </View>
    </Layout>
  )
}

export default SettingScreen
