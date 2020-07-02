import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    app: {
        flex: 1,
        backgroundColor: '#ecf0f1',
        alignItems: 'center',
    },

    tabelaContainer: {
        marginTop: 20,
        backgroundColor: '#dfe6e9',
        width: '90%',
        height: 400,
        borderRadius: 10,
    },

    tabelaTop: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2d3436',
        height: 50,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },

    tabelaTitle: {
        color: '#ecf0f1',
        fontWeight: 'bold',
    },

    line: {
        backgroundColor: '#b2bec3',
        opacity: 0.5,
        width: '100%',
        height: 1,
    },

    fecharContainer: {
        marginTop: 20,
        width: '50%',
    },
    
    fecharButton: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        backgroundColor: '#d63031',
        borderRadius: 50,
    },

    fecharText: {
        color: '#ecf0f1',
        fontWeight: 'bold',
    },
})

export default styles; 