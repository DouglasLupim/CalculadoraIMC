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

    indicator: {
        width: 50,
        height: 5,
        backgroundColor: '#ccc',
        borderRadius: 50,
        alignSelf: 'center',
            marginTop: 5
    },
})

export default styles; 