import { CardStyle } from './style'
import React from 'react'
import { View } from 'react-native'

const CardComponent = ({ children }) => {
  return <View style={CardStyle.cardComponentStyle}>{children}</View>
}

export default CardComponent
