import React from 'react';
import { FlatList, Text, View, Image, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { returnBook } from '../../redux/book_slice';
import { MaterialIcons } from '@expo/vector-icons';
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
                        <Image source={{ uri: item.coverPage }} style={styles.coverImage} />
                        <View style={styles.textContainer}>
                            <Text style={styles.bookName}>{item.name}</Text>
                            <Text style={styles.authorName}>by {item.author}</Text>
                            <TouchableOpacity
                                style={styles.returnButton}
                                onPress={() => dispatch(returnBook(item.id))}
                            >
                                <Text style={styles.returnButtonText}>Return Book</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
                contentContainerStyle={styles.listContainer}
                ListEmptyComponent={
                    <View style={styles.emptyContainer}>
                        <MaterialIcons name="library-books" size={64} color="#757575" />
                        <Text style={styles.emptyText}>No books borrowed yet!</Text>
                    </View>
                }
            />
        </View>
    );
}
