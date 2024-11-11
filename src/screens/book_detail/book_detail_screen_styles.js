import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#F1F1F1',
    },
    coverImage: {
        width: '100%',
        height: 300,
        borderRadius: 8,
        marginBottom: 20,
    },
    bookName: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#212121',
        marginBottom: 8,
    },
    authorName: {
        fontSize: 18,
        color: '#757575',
        marginBottom: 8,
    },
    genre: {
        fontSize: 14,
        color: '#00796B',
        marginBottom: 8,
    },
    details: {
        fontSize: 14,
        color: '#757575',
        marginBottom: 10,
    },
    rating: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFC107',
        marginBottom: 10,
    },
    summary: {
        fontSize: 14,
        color: '#424242',
        marginBottom: 20,
    },
    borrowedMessage: {
        marginTop: 15,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#D32F2F',
        textAlign: 'center',
    },

});
