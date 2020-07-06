import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function SobreComponent({ texto, fonte }) {
    return(
        <TouchableOpacity style={styles.sobreLabel}>
            <Text style={{fontWeight: fonte }}>{texto}</Text>
        </TouchableOpacity>
    );
}