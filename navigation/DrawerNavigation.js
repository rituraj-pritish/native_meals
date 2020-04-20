import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'

import TabNavigation from '../navigation/TabNavigation'
import FiltersScreen from '../screens/FiltersScreen'

const Drawer = createDrawerNavigator()

const DrawerNavigation = () => {
  return (
    // <NavigationContainer>
      <Drawer.Navigator initialRouteName='MealsFavsNavigator'>
        <Drawer.Screen name='MealsFavsNavigator' component={TabNavigation} />
        <Drawer.Screen name='FilterScreen' component={FiltersScreen} />
      </Drawer.Navigator>
    // </NavigationContainer>
  )
}

export default DrawerNavigation
