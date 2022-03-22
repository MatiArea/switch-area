import {
  Button,
  KeyboardAvoidingView,
  Modal,
  ScrollView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native'
import React, { useState } from 'react'

import CardComponent from '../../components/card'
import Input from '../../components/input'
import { StartGameStyle } from './styles'

const StartGameScreen = ({ onStartGame }) => {
  const [inputValue, setInputValue] = useState('')
  const [confirmed, setConfirmed] = useState(false)
  const [selectedNumber, setSelectedNumber] = useState('')

  const onChangeTextInput = (text) => {
    setInputValue(text.replace(/[^0-9]/g, ''))
  }

  const resetInput = () => {
    setInputValue('')
  }

  const confirmInput = () => {
    const chosenNumber = parseInt(inputValue)
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      return
    }
    setConfirmed(true)
    setSelectedNumber(chosenNumber)
    setInputValue('')
  }

  return (
    <View style={[StartGameStyle.containerView, { height: '40%', marginVertical: '15%' }]}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? '' : 'height'}
          style={StartGameStyle.containerView}
        >
          <CardComponent>
            <View style={StartGameStyle.cardContainer}>
              <Text>Empieza el Juego</Text>
              <View style={{ width: '80%', justifyContent: 'center', alignItems: 'center' }}>
                <Text>Elija un número</Text>
                <Input
                  blurOnSubmit
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardType="number-pad"
                  maxLength={2}
                  placeholder="Ingrese un Nro"
                  placeholderBackgroungColor={'red'}
                  handleOnChange={(value) => onChangeTextInput(value)}
                  returnKeyType="done"
                  value={inputValue}
                />
              </View>
              <View style={StartGameStyle.containerButtons}>
                <Button title="Reiniciar" onPress={() => resetInput()} color="#22577A" />
                <Button title="Iniciar" onPress={() => confirmInput()} color="#22577A" />
              </View>
            </View>
          </CardComponent>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
      <Modal
        animationType="slide"
        transparent={true}
        visible={confirmed}
        onRequestClose={() => {
          setConfirmed(!confirmed)
        }}
      >
        <View style={StartGameStyle.modalView}>
          <CardComponent>
            <View style={StartGameStyle.cardContainer}>
              <Text style={StartGameStyle.modalTextHeader}>Tu Selección</Text>
              <Text style={StartGameStyle.modalText}>{selectedNumber}</Text>
              <View>
                <Button
                  title="Empezar Juego"
                  onPress={() => {
                    setConfirmed(!confirmed)
                    onStartGame(selectedNumber)
                  }}
                  color="#22577A"
                />
              </View>
            </View>
          </CardComponent>
        </View>
      </Modal>
    </View>
  )
}

export default StartGameScreen
