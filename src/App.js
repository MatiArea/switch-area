import React, { useState } from 'react'
import { SafeAreaView, StatusBar, StyleSheet, useColorScheme } from 'react-native'

import { Colors } from 'react-native/Libraries/NewAppScreen'
import GameOverScreen from './screens/gameOverScreen'
import Header from './components/header'
import ResultScreen from './screens/resultScreen'
import StartGameScreen from './screens/startGameScreen'

const App = () => {
  const [userNumberSelect, setUserNumberSelect] = useState()
  const [guessRoundsLeft, setGuessRoundsLeft] = useState(0)

  const startGameFunction = (selectedNumber) => {
    setUserNumberSelect(selectedNumber)
  }

  const restartGame = () => {
    setGuessRoundsLeft(0)
    setUserNumberSelect(null)
  }
  const gameOverFunction = (numRounds) => {
    setGuessRoundsLeft(numRounds)
  }

  const isDarkMode = useColorScheme() === 'dark'

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  }

  let body = <StartGameScreen onStartGame={startGameFunction} />

  if (userNumberSelect && guessRoundsLeft <= 0) {
    body = <ResultScreen userOptions={userNumberSelect} onGameOver={gameOverFunction} />
  } else if (guessRoundsLeft > 0) {
    body = (
      <GameOverScreen rounds={guessRoundsLeft} choice={userNumberSelect} onRestart={restartGame} />
    )
  }

  return (
    <SafeAreaView style={{ ...backgroundStyle, height: '100%', backgroundColor: '#C7F9CC' }}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Header />
      {body}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
})

export default App
