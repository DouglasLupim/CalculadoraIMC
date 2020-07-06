import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    app: {
        flex: 1,
        backgroundColor: '#ecf0f1',
        justifyContent: 'center',
    },

    painel: {
        justifyContent: 'center',
        alignSelf: 'center',
        width: 150,
        height: 100,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
    },

    legenda: {
        margin: '10%',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 15,
    },

    resultado: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 25,
    },

    diagnostico: {
        textAlign: 'center',
        fontSize: 15,
    },

    labelContainer: {
        marginTop: '10%',
        alignItems: 'center',
    },

    label: {
        margin: '1%',
        width: '60%',
        height: 55,
        backgroundColor: '#dfe6e9',
    },

    calcularContainer: {
        alignItems: 'center',
    },

    calcularButton: {
        marginTop: '10%',
        width: '60%',
        borderRadius: 50,
    },

    duvidaContainer: {
        alignItems: 'center',
    },

    duvidaButton: {
        marginBottom: '20%',
        top: 100,
    },

    duvidaText: {      
        fontWeight: 'bold',
    },

    sobreContainer: {
        top: 50,
    },
    
    sobreButton: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    sobreText: {
        fontWeight: 'bold',
    },
})

export default styles; 