import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F1F1F1',
    },
    listContainer: {
        padding: 10,
    },
    card: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        padding: 10,
        marginBottom: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 3,
    },
    coverImage: {
        width: 60,
        height: 90,
        borderRadius: 4,
    },
    textContainer: {
        flex: 1,
        marginLeft: 15,
        justifyContent: 'center',
    },
    bookName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#212121',
    },
    authorName: {
        fontSize: 14,
        color: '#757575',
    },
    genre: {
        fontSize: 12,
        color: '#00796B',
        marginTop: 5,
    },
});
