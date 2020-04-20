import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList
} from 'react-native'

import { CATEGORIES } from '../data/dummyData'

const CategoriesScreen = ({ navigation }) => {

  const renderGridItem = ({ item: { title, color, id } }) => {
    const handleTilePress = () => {
      navigation.navigate('CategoryMeals', {
        categoryId: id,
        category: title,
        color
      })
    }
    
    return (
      <TouchableOpacity
        style={{ ...styles.gridItem, backgroundColor: color }}
        onPress={handleTilePress}
      >
        <View>
          <Text
            style={styles.title}
            numberOfLines={2}
            style={styles.gridItemText}
          >
            {title}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <FlatList numColumns={2} data={CATEGORIES} renderItem={renderGridItem} />
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  gridItem: {
    flex: 1,
    margin: 20,
    height: 100,
    padding: 15,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22
  },
  gridItemText: {
    color: 'white',
    fontSize: 22
  }
})

export default CategoriesScreen
