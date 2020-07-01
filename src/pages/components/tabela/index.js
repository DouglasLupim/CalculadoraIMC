import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';
import { FontAwesome } from '@expo/vector-icons';

export default function Tabela({ color, categoria, imc }) {
    return(
        <View style={styles.tabelaLabel}>
            <View style={styles.iconLabel}>
                <FontAwesome name="circle" size={24} color={color} />
            </View>
            <View style={styles.categoriaLabel}>
                <Text>{categoria}</Text>
            </View>
            <View style={styles.imcLabel}>
                <Text>{imc}</Text>
            </View>
        </View>
    );
}