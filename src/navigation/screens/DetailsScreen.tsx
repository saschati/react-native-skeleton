import Layout from '@/Common/Layout'
import Button from '@/UI/Button'
import { Routes } from '@/config/routes'
import useNavigator from '@/hooks/useNavigator'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const DetailsScreen = () => {
  const { navigation } = useNavigator<Routes.Details>()

  return (
    <Layout>
      <View style={styles.screen}>
        <Text>Details Screen</Text>
        <Button title='Go to Setting' onPress={() => navigation.navigate(Routes.Setting)} />
        <Button title='Go back' onPress={() => navigation.goBack()} />
      </View>
    </Layout>
  )
}

const styles = StyleSheet.create({
  screen: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 8 },
})

export default DetailsScreen
