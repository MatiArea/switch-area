import { StyleSheet } from 'react-native'

export const HeaderStyle = StyleSheet.create({
  headerContainerStyle: {
    height: '35%',
    shadowOffset: { height: 1, width: 1 },
    elevation: 5,
    shadowColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#57CC99',
    borderRadius: 40,
    borderWidth: 0.75,
    marginHorizontal: '2%',
    marginVertical: '2%',
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  textHeaderStyle: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },
})
