import { Dimensions, StyleSheet } from 'react-native'

const { width, height } = Dimensions.get('window')

export const ResultGameStyle = StyleSheet.create({
  container: {
    width: '75%',
    height: '50%',
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
    marginVertical: '10%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
})
