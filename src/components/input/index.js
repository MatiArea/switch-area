import { TextInput, View } from 'react-native'

import { InputStyle } from './styles'
import React from 'react'

const Input = ({ handleOnChange, ...props }) => {
  return (
    <View style={InputStyle.container}>
      <TextInput {...props} style={InputStyle.input} onChangeText={handleOnChange} />
    </View>
  )
}

export default Input
