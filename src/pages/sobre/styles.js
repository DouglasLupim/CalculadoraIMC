import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    app: {
        flex: 1,
        backgroundColor: '#ecf0f1',
        alignItems: 'center',
    },

    sobreContainer: {
        marginTop: 20,
    },

    sobreText: {
        fontWeight: 'bold',
        fontSize: 20,
    },

    indicator: {
        width: 50,
        height: 5,
        backgroundColor: '#ccc',
        borderRadius: 50,
        alignSelf: 'center',
        marginTop: 5
    },

    line: {
        backgroundColor: '#b2bec3',
        opacity: 0.5,
        width: '100%',
        height: 1,
    },
})

export default styles; 