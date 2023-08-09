import Layout from '@/Common/Layout'
import Button from '@/UI/Button'
import { Routes } from '@/config/routes'
import useNavigator from '@/hooks/useNavigator'
import styles from '@/styles/screen'
import React from 'react'
import { Text, View } from 'react-native'

const DetailsScreen = () => {
  const { navigation } = useNavigator<Routes.Details>()

  return (
    <Layout>
      <View style={styles.screenCenter}>
        <Text>Details Screen</Text>
        <Button title='Go to Setting' onPress={() => navigation.navigate(Routes.Setting)} />
        <Button title='Go back' onPress={() => navigation.goBack()} />
      </View>
    </Layout>
  )
}

export default DetailsScreen
