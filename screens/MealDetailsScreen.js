import React from 'react'
import { View,Text,StyleSheet } from 'react-native'

const MealDetailsScreen = ({navigation, route}) => {
  const {mealId} = route.params
  return (
    <View style={styles.screen} >
      <Text>MealDetails</Text>
      <Text>{mealId}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default MealDetailsScreen
