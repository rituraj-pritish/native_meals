import React from 'react'
import { HeaderButton } from 'react-navigation-header-buttons'
import { Ionicons } from '@expo/vector-icons'

import colors from '../constants/colors'
import { Platform } from 'react-native'

const CustomHeaderButtons = props => {
  return (
    <HeaderButton
      IconComponent={Ionicons}
      iconSize={23}
      color={Platform.OS === 'android' ? 'white' : colors.primary}
      {...props}
    />
  )
}

export default CustomHeaderButtons
