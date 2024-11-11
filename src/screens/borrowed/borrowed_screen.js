import React from 'react';
import { Button, FlatList, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { returnBook } from '../../redux/book_slice';
import styles from './borrowed_screen_styles';

export default function BorrowedScreen() {
    const borrowedBooks = useSelector(state => state.books.borrowedBooks);
    const dispatch = useDispatch();

    return (
        <View style={styles.container}>
            <FlatList
                data={borrowedBooks}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Text style={styles.bookName}>{item.name}</Text>
                        <Text style={styles.authorName}>by {item.author}</Text>
                        <Button title="Return Book" onPress={() => dispatch(returnBook(item.id))} color="#D32F2F" />
                    </View>
                )}
                contentContainerStyle={styles.listContainer}
                ListEmptyComponent={<Text style={styles.emptyText}>No books borrowed yet!</Text>}
            />
        </View>
    );
}
