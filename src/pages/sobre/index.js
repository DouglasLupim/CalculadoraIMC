import React from 'react';
import { View, Text, StatusBar, TouchableOpacity } from 'react-native';

import styles from './styles';
import SobreComponent from '../components/sobre';

export default function Sobre() {
    return(
        <View style={styles.app}>
            <StatusBar barStyle="light-content" />
            <View style={styles.indicator} />
            
            <View style={styles.sobreContainer}>
                <Text style={styles.sobreText}>Sobre</Text>
            </View>

            <View>
                <Text>Blá blá blá</Text>
            </View>

            <SobreComponent 
            texto='Contato'
            fonte='normal'
            />
            <View style={styles.line} />
            <SobreComponent 
            texto='Conheça Nossos Planos'
            fonte='bold'
            />
            

        </View>
    );
}