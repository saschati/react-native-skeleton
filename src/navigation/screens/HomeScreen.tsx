import Layout from '@/Common/Layout'
import Button from '@/UI/Button/Button'
import { Routes } from '@/config/routes'
import useNavigator from '@/hooks/useNavigator'
import styles from '@/styles/screen'
import React from 'react'
import { Text, View } from 'react-native'

const HomeScreen = () => {
  const { navigation } = useNavigator<Routes.Home>()

  return (
    <Layout>
      <View style={styles.screenCenter}>
        <Text>Home Screen</Text>
        <Button
          title='Go to Details'
          onPress={() => {
            navigation.navigate(Routes.Details)
          }}
        />
      </View>
    </Layout>
  )
}

export default HomeScreen
