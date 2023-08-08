import Layout from '@/Common/Layout'
import Button from '@/UI/Button/Button'
import { Routes } from '@/config/routes'
import useNavigator from '@/hooks/useNavigator'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const HomeScreen = () => {
  const { navigation } = useNavigator<Routes.Home>()

  return (
    <Layout>
      <View style={styles.screen}>
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

const styles = StyleSheet.create({
  screen: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 8 },
})

export default HomeScreen
