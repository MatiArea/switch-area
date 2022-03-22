import { Button, Image, Text, View } from 'react-native'

import CardComponent from '../../components/card'
import { GameOverStyle } from './styles'
import React from 'react'

const GameOverScreen = ({ rounds, choice, onRestart }) => {
  return (
    <View style={{ height: '70%', marginVertical: '5%' }}>
      <View style={GameOverStyle.container}>
        <CardComponent>
          <Image
            style={GameOverStyle.logo}
            source={require('../../../assets/images/game-over.png')}
          ></Image>
          <Text>¡Tu numero es: {choice}!</Text>
          <Text>Intentos: {rounds}</Text>
          <View style={GameOverStyle.buttonsContainer}>
            <Button title="Reiniciar" onPress={onRestart} />
          </View>
        </CardComponent>
      </View>
    </View>
  )
}

export default GameOverScreen
