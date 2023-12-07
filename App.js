import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, TextInput, Button, TouchableHighlight, Pressable } from 'react-native';


export default function App() {
  const [firtsNumber, onChangeFirstNumber] = useState();
  const [number2, onChangeNumber2] = useState();
  const [result, setResult] = useState('');
  const [tipo, setTipo] = useState('');

  function changeAdicao(firtsNumber, number2){
    let resultado = parseInt(firtsNumber) + parseInt(number2);
    setResult(resultado);     
    setTipo('Adição');
  }
  function changeSubtracao(firtsNumber, number2){
    let resultado = parseInt(firtsNumber) - parseInt(number2);
    setResult(resultado);     
    setTipo('Subtração');
  }
  function changeDivisao(firtsNumber, number2){
    let resultado = parseInt(firtsNumber) / parseInt(number2);
    setResult(resultado);     
    setTipo('Divisão');
  }
  function changeMultiplicacao(firtsNumber, number2){
    let resultado = parseInt(firtsNumber) * parseInt(number2);
    setResult(resultado);     
    setTipo('Multiplicação');
  }
  
  return (
    
    <SafeAreaView style={styles.container}>
      <View style={styles.statusBar} >
       <Text style={styles.statusText}>Calculadora</Text>
      </View>
        <View style={styles.content}>
          <Text>Digite um Número</Text>
          <TextInput
          id='1'
          style={styles.input}
          onChangeText={onChangeFirstNumber}
          value={firtsNumber}
          placeholder="Digite um número"
          inputMode="numeric"
        />
          <TextInput
          id='2'
          style={styles.input}
          onChangeText={onChangeNumber2}
          value={number2}
          placeholder="Digite um número"
          inputMode="numeric"
        />
        <Pressable style={styles.button} onPress={e => changeAdicao(firtsNumber,number2)}>
          <Text style={styles.buttonText}>Adição</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={e => changeSubtracao(firtsNumber,number2)} >
          <Text  style={styles.buttonText}>Subtração</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={e => changeDivisao(firtsNumber,number2)} >
          <Text  style={styles.buttonText}>Divisão</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={e => changeMultiplicacao(firtsNumber,number2)} >
          <Text  style={styles.buttonText}>Multiplicação</Text>
        </Pressable>

         <Text >O resultado da {tipo} é {result}</Text>   
       
      </View>
    </SafeAreaView>
  );

}

const styles = StyleSheet.create({
  container: {
   flex: 1,
    
  },
  statusBar: {
    flex: .1,
    backgroundColor: '#43e',
    alignContent: 'center',
    justifyContent: 'center',
    
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    backgroundColor: '#43e',
    padding: '1rem',
    margin: '.5rem',
    width: '8rem',
    height: '3rem',  
    flex: .05,
    justifyContent: 'center',
    alignItems: 'center', 
  },
  buttonText: {
    color: '#fff',
    fontSize: '1rem',
  },
  text: {
    color: '#000',
    width: '8rem',
    height: '1rem',
  }
});
