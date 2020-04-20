import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'

import MealsNavigation from '../navigation/MealsNavigation'
import colors from '../constants/colors'
import FavoritesNavigation from './FavoritesNavigation'
import { NavigationContainer } from '@react-navigation/native'

const Tab = createBottomTabNavigator()

const TabNavigation = () => {
  return (
    // <NavigationContainer independent>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: colors.secondary
        }}
        initialRouteName='Meals'
      >
        <Tab.Screen
          options={{
            tabBarIcon: () => (
              <Ionicons
                name='ios-restaurant'
                size={23}
                color={colors.secondary}
              />
            )
          }}
          name='Meals'
          component={MealsNavigation}
        />
        <Tab.Screen
          options={{
            tabBarIcon: () => (
              <Ionicons name='ios-star' size={23} color={colors.secondary} />
            )
          }}
          name='FavoriteMeals'
          component={FavoritesNavigation}
        />
      </Tab.Navigator>
    // </NavigationContainer>
  )
}

export default TabNavigation
