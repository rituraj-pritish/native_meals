import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'

import MealItem from '../components/MealItem.js'

const MealList = ({ meals }) => {
  const renderMeals = ({ item }) => <MealItem {...item} />

  return (
    <View style={styles.screen}>
      <FlatList data={meals} renderItem={renderMeals} style={styles.list} />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 10
  },
  category: {
    textAlign: 'center',
    fontSize: 20,
    marginTop: 10,
    fontWeight: 'bold',
    fontFamily: 'open-sans'
  },
  list: {
    width: '100%'
  }
})

export default MealList
