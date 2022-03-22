import { Alert, Button, Text, View } from 'react-native'
import React, { useCallback, useEffect, useRef, useState } from 'react'

import CardComponent from '../../components/card'
import { ResultGameStyle } from './styles'

const ResultScreen = ({ userOptions, onGameOver }) => {
  const generateRandomBetween = useCallback(
    (min, max, exclude) => {
      min = Math.ceil(min)
      max = Math.floor(max)
      const rndNum = Math.floor(Math.random() * (max - min)) + min
      if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude)
      } else return rndNum
    },
    [currentHigh, currentLow, currentGuess, userOptions]
  )

  const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, userOptions))
  const [rounds, setRounds] = useState(0)
  const currentLow = useRef(1)
  const currentHigh = useRef(100)

  useEffect(() => {
    if (currentGuess === userOptions) onGameOver(rounds)
  }, [currentGuess, userOptions, onGameOver])

  const nextGuess = (direction) => {
    if (
      (direction === 'menor' && currentGuess < userOptions) ||
      (direction === 'mayor' && currentGuess > userOptions)
    ) {
      Alert.alert('Creo que: ', 'No estas diciendo la verdad', [
        { text: 'Cancelar' },
        { text: 'Continuar' },
      ])
    }
    if (direction === 'menor') {
      currentHigh.current = currentGuess
    } else {
      currentLow.current = currentGuess
    }
    const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess)
    setCurrentGuess(nextNumber)
    setRounds((current) => current + 1)
  }

  return (
    <View style={{ height: '70%', marginVertical: '15%' }}>
      <View style={ResultGameStyle.container}>
        <CardComponent>
          <Text style={ResultGameStyle.cardTitle}>La suposición del oponentes</Text>
          <Text style={ResultGameStyle.confirmedText}>{currentGuess}</Text>
          <View style={ResultGameStyle.buttonsContainer}>
            <Button title="Menor" onPress={() => nextGuess('menor')} color="#22577A" />
            <Button title="Mayor" onPress={() => nextGuess('mayor')} color="#22577A" />
          </View>
        </CardComponent>
      </View>
    </View>
  )
}

export default ResultScreen
