import React from 'react'
import { Platform } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import {
  createStackNavigator,
  CardStyleInterpolators
} from '@react-navigation/stack'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { useNavigation } from '@react-navigation/native'

import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailsScreen from '../screens/MealDetailsScreen'
import HeaderButton from '../components/HeaderButton'

import colors from '../constants/colors'

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

const MealsNavigation = () => {
  const navigation = useNavigation()
  return (
    <NavigationContainer independent>
      <Stack.Navigator
        initialRouteName='Categories'
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
          name='Categories'
          component={CategoriesScreen}
          options={{
            title: 'Meals Categories',
            headerLeft: () => (
              <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                  title='Menu'
                  iconName='ios-menu'
                  iconSize={35}
                  onPress={() => navigation.toggleDrawer()}
                />
              </HeaderButtons>
            )
          }}
        />
        <Stack.Screen
          name='CategoryMeals'
          component={CategoryMealsScreen}
          options={({ route }) => ({
            title: route.params.category
          })}
        />
        <Stack.Screen
          name='MealDetails'
          component={MealDetailsScreen}
          options={({ route }) => ({
            title: route.params.title,
            headerRight: () => (
              <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title='Favorite' iconName='ios-star' />
              </HeaderButtons>
            )
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MealsNavigation
