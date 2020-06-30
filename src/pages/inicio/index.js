import React, {useState} from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Modal, StatusBar  } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

import styles from './styles';
import Duvidas from '../duvidas';

export default function Inicio() {
    const [peso, setPeso] = useState('0');
    const [altura, setAltura] = useState('0');
    const [imc, setImc] = useState('0');
    const [legenda, setLegenda] = useState('Inderteminado');
    const [cor, setCor] = useState('#dfe6e9');
    const [modalvisible, setModalvisible] = useState(false);

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
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={styles.app}>
            <StatusBar barStyle="dark-content" />
            <Text style={styles.legenda}>Seu IMC</Text>

            <View style={[styles.painel, {backgroundColor: cor}]}>
            <Text style={styles.resultado}>{imc}</Text>
            <Text style={styles.diagnostico}>{legenda}</Text>
            </View>
            
            <View style={styles.labelContainer}>
                <TextInput
                keyboardType='numeric'
                theme={{colors: {primary: '#2d3436'}}}
                underlineColor='#2d3436'
                label='Peso'
                style={styles.label}
                onChangeText={p => setPeso(p.replace(',', '.'))}
                />
                <TextInput
                keyboardType='numeric'
                theme={{colors: {primary: '#2d3436'}}}
                underlineColor='#2d3436'
                label='Altura'
                style={styles.label}
                onChangeText={a => setAltura(a.replace(',', '.'))}
                />
            </View>

            <View style={styles.calcularContainer}>
                <Button 
                style={styles.calcularButton}
                color='#2d3436'
                mode='contained' 
                onPress={calcularIMC}>
                Calcular
                </Button>
            </View>

            <View style={styles.duvidaContainer}>
                <TouchableOpacity style={styles.duvidaButton} onPress={()=>setModalvisible(true)}>
                    <Text style={styles.duvidaText}>Dúvidas? Consulte a Tabela.</Text>
                </TouchableOpacity>
            </View>

            <Modal
            presentationStyle
            animationType={"slide"} 
            visible={modalvisible}>
                <Duvidas />
            </Modal>
        </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
