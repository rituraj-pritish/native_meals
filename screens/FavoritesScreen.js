import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MealList from '../components/MealList'

import { MEALS } from '../data/dummyData'

const FavoritesScreen = () => {
  const meals = MEALS.slice(0, 5)
  return <MealList meals={meals} />
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default FavoritesScreen
