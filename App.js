import { useState } from 'react';
import { 
  SafeAreaView, 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  Alert, 
  Pressable 
} from 'react-native';


export default function App() {
  const [firtsNumber, onChangeFirstNumber] = useState();
  const [number2, onChangeNumber2] = useState();
  const [result, setResult] = useState('');
  const [tipo, setTipo] = useState('');
  
  function calcular(firtsNumber, number2, tipo){
    if (isNaN(parseInt(firtsNumber)) || isNaN(parseInt(number2))) {
      Alert.alert('Atenção','Tem quer ser um número');
    } else {
      var resultado = '';
      switch(tipo){
        case 'adicao': 
          resultado = parseInt(firtsNumber) + parseInt(number2);
          break;
        case 'subtracao': 
          resultado = parseInt(firtsNumber) - parseInt(number2);
          break;
        case 'multiplicacao': 
        resultado = parseInt(firtsNumber) * parseInt(number2);
        break;
        case 'divisao': 
          resultado = parseInt(firtsNumber) / parseInt(number2);
          break;
      }
      setResult(resultado);     
      setTipo(tipo);
    }
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
        <Pressable style={styles.button} onPress={() => calcular(firtsNumber,number2,'adicao')}>
          <Text style={styles.buttonText}>Adição</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => calcular(firtsNumber,number2,'subtracao')} >
          <Text  style={styles.buttonText}>Subtração</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => calcular(firtsNumber,number2, 'divisao')} >
          <Text  style={styles.buttonText}>Divisão</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => calcular(firtsNumber,number2,'multiplicacao')} >
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
    marginTop: '5rem',
    
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    backgroundColor: '#43e',
    padding: 8,
    margin: 10,
    width: 140,
    height: 45,  
    flex: .05,
    justifyContent: 'center',
    alignItems: 'center', 
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  text: {
    color: '#000',
    width: 120,
    height: 16,
  }
});
