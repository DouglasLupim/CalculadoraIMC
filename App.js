import React, {useState} from 'react';
import { Text, View, StyleSheet, SafeAreaView, Keyboard, TouchableOpacity }from 'react-native';
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
  const [cor, setCor] = useState('#dfe6e9')

  calcularIMC = () => {
    const resultado = peso / (altura * altura);

    setImc(Math.ceil (resultado));
    if(peso == '' && altura == '') {
      setLegenda('Inderteminado');
      setCor('#dfe6e9');
      setImc('0');
    } else if(resultado < 18.5) {
      setLegenda('Magreza');
      setCor('#d63031');
    } else if(resultado >= 18.5 && resultado < 25) {
      setLegenda('Normal');
      setCor('#55efc4');
    } else if(resultado >= 25 && resultado < 30) {
      setLegenda('Sobrepeso');
      setCor('#fdcb6e');
    } else if(resultado >= 30 && resultado < 40) {
      setLegenda('Obesidade');
      setCor('#e17055');
    } else if(resultado >= 40) {
      setLegenda('Obesidade Grave');
      setCor('#d63031');
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

        <View>
          <TouchableOpacity>
            <Text>DÚVIDAS? CONSULTE A TABELA</Text>
          </TouchableOpacity>
        </View>

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
