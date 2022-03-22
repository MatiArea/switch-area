import { Image, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

import { HeaderStyle } from './styles'

const Header = (props) => {
  return (
    <View style={HeaderStyle.headerContainerStyle}>
      <Image
        style={HeaderStyle.logo}
        source={require('../../../assets/images/question.png')}
      ></Image>
      <Text style={HeaderStyle.textHeaderStyle}>Adivina Adivinador</Text>
      <Image
        style={HeaderStyle.logo}
        source={require('../../../assets/images/question.png')}
      ></Image>
    </View>
  )
}

export default Header
