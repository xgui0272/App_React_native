// styles.js

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  search: {
    marginTop: 50,
  },
  manutencao: {
    marginTop: 20,
    borderWidth: 1.5,
    borderColor: 'rgb(25, 12, 207)',
    borderRadius: 10,
    padding: 15,
    width: 330,
    alignItems: 'center'
    
  },
  h2: {
    color: '#000',
    fontSize: 20
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  textValor: {
    color: 'rgb(15, 160, 34)',
    fontWeight: 'bold'
  },
  textKm: {
    color: 'black',
    fontWeight: 'bold'
  },
  button: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
  },
});
