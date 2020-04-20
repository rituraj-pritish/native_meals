import React from 'react'
import {Platform} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import {
  createStackNavigator,
  CardStyleInterpolators
} from '@react-navigation/stack'

import colors from '../constants/colors'
import FavoritesScreen from '../screens/FavoritesScreen'
import MealDetailsScreen from '../screens/MealDetailsScreen'

const Stack = createStackNavigator()

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01
  }
}

const FavoritesNavigation = () => {
  return (
    // <NavigationContainer independent>
      <Stack.Navigator
        initialRouteName='Favorites'
        screenOptions={{
          headerStyle: {
            backgroundColor: Platform.OS === 'android' ? colors.primary : ''
          },
          headerTintColor: Platform.OS === 'android' ? '#fff' : colors.primary,
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          transitionSpec: {
            open: config,
            close: config
          },
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}
      >
        <Stack.Screen
          name='Favorites'
          component={FavoritesScreen}
        />
        <Stack.Screen
          name='MealDetails'
          component={MealDetailsScreen}
        />
      </Stack.Navigator>
    // </NavigationContainer>
  )
}

export default FavoritesNavigation
