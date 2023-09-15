import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [FirstNome, setFirstNome] = useState(setFirstNome);
  const [SurName, setSurName] = useState(setSurName);
  const [Email, setEmail] = useState(setEmail);
  const [Senha, setSenha] = useState(setSenha);
  const [ConfirmarSenha, setConfirmarSenha] = useState(setConfirmarSenha);  
  
  return (

    <ScrollView>
      <Text style={styles.titulo}>Cadastro de Usuário</Text>
      
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={setFirstNome}
          placeholder="Primeiro Nome"
        />
        <Text>Nome: {FirstNome}</Text>

        <TextInput
          style={styles.input}
          onChangeText={setSurName}
          placeholder="Sobrenome"
        />
        <Text>Sobrenome: {SurName}</Text>

        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          placeholder="Email"
        />
        <Text>Email: {Email}</Text>

        <TextInput
          style={styles.input}
          onChangeText={setSenha}
          placeholder="Senha"
          secureTextEntry={true}
        />
        

        <TextInput
          style={styles.input}
          onChangeText={setConfirmarSenha}
          placeholder="Confirmar Senha"
          secureTextEntry={true}
        />
      

        <TouchableOpacity style={styles.botao}>
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

