import React, {useState} from 'react';
import { Text, View, StyleSheet, SafeAreaView, Keyboard, TouchableWithoutFeedback }from 'react-native';
import { TextInput, Button } from 'react-native-paper';

export default function App() {

  const EsconderTeclado = ({children}) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );

  const [peso, setPeso] = useState('0');
  const [altura, setAltura] = useState('0');
  const [imc, setImc] = useState('0');
  const [legenda, setLegenda] = useState('Inderteminado');
  const [cor, setCor] = useState('#bdc3c7')

  calcularIMC = () => {
    const resultado = peso / (altura * altura);

    setImc(Math.ceil (resultado));
    if(resultado == '') {
      setLegenda('Inderteminado');
      setCor('#bdc3c7');
    } else if(resultado < 18.5) {
      setLegenda('Magreza');
      setCor('#e74c3c');
    } else if(resultado >= 18.5 && resultado < 25) {
      setLegenda('Normal');
      setCor('#2ecc71');
    } else if(resultado >= 25 && resultado < 30) {
      setLegenda('Sobrepeso');
      setCor('#f1c40f');
    } else if(resultado >= 30 && resultado < 40) {
      setLegenda('Obesidade');
      setCor('#e67e22');
    } else if(resultado >= 40) {
      setLegenda('Obesidade Grave');
      setCor('#e74c3c');
    }
  }

  return (
    <SafeAreaView style={styles.app}>
      
      <Text style={styles.legenda}>Seu IMC</Text>

      <View style={[styles.painel, {backgroundColor: cor}]}>
        <Text style={styles.resultado}>{imc}</Text>
        <Text style={styles.diagnostico}>{legenda}</Text>
      </View>
      
      <View>
          <TextInput
            keyboardType='numeric'
            theme={{colors: {primary: '#2980b9'}}}
            underlineColor='#3498db'
            label='Peso'
            style={styles.peso}
            onChangeText={p => setPeso(p.replace(',', '.'))}
          />
          <TextInput
            keyboardType='numeric'
            theme={{colors: {primary: '#2980b9'}}}
            underlineColor='#3498db'
            label='Altura'
            style={styles.altura}
            onChangeText={a => setAltura(a.replace(',', '.'))}
          />
        <Button 
        color='#2980b9'
        mode='contained' 
        onPress={calcularIMC}>
          Calcular
        </Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    justifyContent: 'center',
    padding: 10,
  },

  painel: {
    alignSelf: 'center',
    width: 150,
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
  },

  legenda: {
    textAlign: 'center',
    fontWeight: 'bold',
  },

  resultado: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 22,
  },

  diagnostico: {
    textAlign: 'center',
    fontSize: 16,
  },

  peso: {
    marginVertical: 10,
  },

  altura: {
    marginVertical: 10,
  },


});
