import { StyleSheet } from 'react-native'

export const GameOverStyle = StyleSheet.create({
  container: {
    width: '75%',
    height: '70%',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#80ED99',
    borderRadius: 12,
    borderWidth: 1,
    elevation: 6,
  },
  confirmedText: {
    fontWeight: 'bold',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  cardTitle: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonsContainer: {
    width: '100%',
    marginVertical: '5%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
})
