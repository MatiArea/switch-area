import { StyleSheet } from 'react-native'

export const StartGameStyle = StyleSheet.create({
  containerView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#C7F9CC',
  },
  containerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginVertical: '4%',
  },
  modalView: {
    marginVertical: 100,
    marginHorizontal: '2%',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  cardContainer: {
    width: '90%',
    height: '90%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#80ED99',
    borderRadius: 12,
    borderWidth: 1,
    elevation: 6,
  },
  modalTextHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  modalText: {
    fontSize: 18,
  },
})
