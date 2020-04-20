import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground
} from 'react-native'
import { useNavigation } from '@react-navigation/native'

const MealItem = ({
  title,
  id,
  duration,
  imageUrl,
  affordability,
  complexity
}) => {
  const navigation = useNavigation()
  const handleMealPress = () => {
    navigation.navigate('MealDetails', { mealId: id, title })
  }
  return (
    <TouchableOpacity style={styles.mealItem} onPress={handleMealPress}>
      <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
        <ImageBackground source={{ uri: imageUrl }} style={styles.bg}>
          <Text style={styles.title}>{title}</Text>
        </ImageBackground>
      </View>
      <View style={{ ...styles.mealRow, ...styles.mealDetails }}>
        <Text>{duration} m</Text>
        <Text>{affordability}</Text>
        <Text>{complexity}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    width: '100%',
    borderRadius: 10,
    marginVertical: 10,
    overflow: 'hidden'
  },
  mealRow: {
    flexDirection: 'row'
  },
  mealHeader: {
    height: 150
  },
  title: {
    fontFamily: 'open-sans-bold',
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0.5)',
    fontSize: 15,
    padding: 10,
    textAlign: 'center'
  },
  mealDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#e6dfdf'
  },
  bg: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end'
  }
})

export default MealItem
