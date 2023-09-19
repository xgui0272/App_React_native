import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import axios from 'axios';
import { format } from 'date-fns';
import {styles} from './css/AppCss'


const App = () => {
  const [email, setEmail] = useState('');
  const [dados, setDados] = useState([]);

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const fetchData = () => {
    axios
      .get(`http://172.172.59.232:5000/showemail?email=${email}`)
      .then((response) => {
        
        setDados(response.data);
        console.log(dados);
      })
      .catch((error) => {
        console.error('Erro na requisição:', error);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <TextInput
          placeholder="Digite o email"
          value={email}
          onChangeText={handleEmailChange}
          style={{ marginBottom: 10, paddingHorizontal: 10, borderWidth: 1, width: 200 }}
        />
        <Button title="Buscar Dados" onPress={fetchData} />
      </View>
      
      
      {dados.map((item, index) => (
        <View key={item.id} style={styles.manutencao}>
          <Text style={styles.h2}>{item.titulo}</Text>
          <Text style={styles.text}>Data: {format(new Date(item.createdAt), 'dd/MM/yyyy')}</Text>
          <Text style={styles.textValor}>Valor: {parseFloat(item.valor / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</Text>
          <Text style={styles.textKm}>Km do veiculo: {item.km.toLocaleString('pt-BR')}</Text>
          <Button title="Acessar"/>
        </View>
        
      ))}
    </View>
  );
};

export default App;
