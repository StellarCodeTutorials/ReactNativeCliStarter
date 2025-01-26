import { SafeAreaView, Text, View } from 'react-native'
import React from 'react'
import globalStyle from '../../assets/styles/globalStyles'

const HomeScreen = () => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <Text>HomeScreen 123</Text>
    </SafeAreaView>
  )
}

export default HomeScreen