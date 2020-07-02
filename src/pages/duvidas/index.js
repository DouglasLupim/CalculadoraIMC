import React from 'react';
import { View, Text, TouchableOpacity, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import Tabela from '../components/tabela';

export default function Duvidas() {
    const navigation = useNavigation();

    return(
        <View style={styles.app}>
            <StatusBar barStyle="light-content" />
            <View style={styles.tabelaContainer}>
                <View style={styles.tabelaTop}>
                    <Text style={styles.tabelaTitle}>Tabela de IMC</Text>
                </View>
                <Tabela 
                    color='#d63031'
                    categoria='Abaixo do Peso'
                    imc='Abaixo de 18,5'
                />
                <View style={styles.line} />
                <Tabela
                    color='#55efc4'
                    categoria='Peso Normal'
                    imc='Entre 18,5 e 24,9'
                />
                <View style={styles.line} />
                <Tabela
                    color='#fdcb6e'
                    categoria='Sobrepeso'
                    imc='Entre 25 e 29,9'
                />
                <View style={styles.line} />
                <Tabela
                    color='#fab1a0'
                    categoria='Obesidade I'
                    imc='Entre 30 e 34,9'
                />
                <View style={styles.line} />
                <Tabela
                    color='#e17055'
                    categoria='Obesidade II'
                    imc='Entre 35 e 39,9'
                />
                <View style={styles.line} />
                <Tabela
                    color='#d63031'
                    categoria='Obesidade III'
                    imc='Maior ou Igual à 40'
                />
            </View>

            <View style={styles.fecharContainer}>
                <TouchableOpacity style={styles.fecharButton} onPress={()=>navigation.goBack()}>
                    <Text style={styles.fecharText}>Fechar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
