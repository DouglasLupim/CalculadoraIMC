import React, {useState} from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, TouchableWithoutFeedback, Keyboard, StatusBar } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import Duvidas from '../duvidas';

export default function Inicio() {
    const navigation = useNavigation();

    const [peso, setPeso] = useState('0');
    const [altura, setAltura] = useState('0');
    const [imc, setImc] = useState('0');
    const [legenda, setLegenda] = useState('Indeterminado');
    const [cor, setCor] = useState('#dfe6e9');
    const [modalvisible, setModalvisible] = useState(false);

    calcularIMC = () => {
        const resultado = peso / (altura * altura);

        setImc(Math.ceil (resultado));

        if(peso == '' && altura == '') {
            setLegenda('Indeterminado');
            setCor('#dfe6e9');
            setImc('0');
            alert('Digite seu Peso e Altura');
        } else if(resultado < 18.5) {
            setLegenda('Abaixo do Peso');
            setCor('#d63031');
        } else if(resultado < 25) {
            setLegenda('Peso Normal');
            setCor('#55efc4');
        } else if(resultado < 30) {
            setLegenda('Sobrepeso');
            setCor('#fdcb6e');
        } else if(resultado < 35) {
            setLegenda('Obesidade I');
            setCor('#fab1a0');
        } else if(resultado < 40) {
            setLegenda('Obesidade II');
            setCor('#e17055');
        } else if(resultado >= 40) {
            setLegenda('Obesidade III');
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
                <TouchableOpacity style={styles.duvidaButton} onPress={()=>navigation.navigate('Duvida')}>
                    <Text style={styles.duvidaText}>Dúvidas? Consulte a Tabela</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.sobreContainer}>
                <TouchableOpacity style={styles.sobreButton} onPress={()=>navigation.navigate('Sobre')}>
                    <Text style={styles.sobreText}>Sobre nós</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
