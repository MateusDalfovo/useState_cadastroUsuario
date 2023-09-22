import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import React = require('react');
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [FirstNome, setFirstNome] = useState('');
  const [SurName, setSurName] = useState('');
  const [Email, setEmail] = useState('');
  const [Senha, setSenha] = useState('');
  const [ConfirmarSenha, setConfirmarSenha] = useState('');  
  
  function handleUserAdd() {
    console.log(
        "Nome Completo:" + FirstNome
        + "\nEmail: " + Email
    )
}

  return (

    <ScrollView>
      <Text style={styles.titulo}>Cadastro de Usuário</Text>
      
      <View style={styles.container}>
        <TextInput
          style={styles.input} 
          placeholder="Primeiro Nome"

          onChangeText={setFirstNome}
          value={FirstNome}
        />
        <Text>Nome: {FirstNome}</Text>

        <TextInput
          style={styles.input}         
          placeholder="Sobrenome"

          value = {SurName}
          onChangeText={setSurName}
        />
        <Text>Sobrenome: {SurName}</Text>

        <TextInput
          style={styles.input}
          placeholder="Email"

          value={Email}
          onChangeText={setEmail}
        />
        <Text>Email: {Email}</Text>

        <TextInput
          style={styles.input}    
          placeholder="Senha"
          secureTextEntry={true}
          
          value={Senha}
          onChangeText={setSenha}
        />
        

        <TextInput
          style={styles.input} 
          placeholder="Confirmar Senha"
          secureTextEntry={true}

          value={ConfirmarSenha}
          onChangeText={setConfirmarSenha}
        />
      

        <TouchableOpacity style={styles.botao} onPress={handleUserAdd}>
          <Text style={styles.textBotao}>Cadastrar</Text>
        </TouchableOpacity>



      </View >
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },

  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 60,
    textAlign: 'center',
    color: '#00589F',

  },

  input: {
    marginTop: '15%',
    padding: '4%',
    width: 350,
    backgroundColor: '#ebebeb',
    color: '#7d7d7d',
    fontSize: 16,
    borderRadius: 10,
  },

  botao: {
    marginTop: 50,
    marginBottom: 175,
    width: 210,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00589F',
    borderRadius: 150,
  },

  textBotao: {
    fontSize: 15,
    color: 'white',
  },
});
function setCadastro(FirstNome: any) {
  throw new Error('Function not implemented.');
}

