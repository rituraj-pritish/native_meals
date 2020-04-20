import React from 'react'
import { View, Text, StyleSheet, Button, FlatList } from 'react-native'

import { MEALS } from '../data/dummyData.js'
import MealList from '../components/MealList.js'

const CategoryMealsScreen = ({ route }) => {
  const { categoryId: catId } = route.params

  const meals = MEALS.filter(({ categoryId }) => categoryId.includes(catId))

  return <MealList meals={meals} />
}

const styles = StyleSheet.create({})

export default CategoryMealsScreen
