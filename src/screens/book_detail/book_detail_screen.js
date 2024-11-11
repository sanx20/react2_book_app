import React from 'react';
import { Alert, Button, Image, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { borrowBook } from '../../redux/book_slice';
import styles from './book_detail_screen_styles';

export default function BookDetailScreen({ route }) {
    const { book } = route.params;
    const dispatch = useDispatch();
    const borrowedBooks = useSelector(state => state.books.borrowedBooks);

    const isBookBorrowed = borrowedBooks.some(b => b.id === book.id);

    const handleBorrowBook = () => {
        if (borrowedBooks.length >= 3) {
            Alert.alert("Limit Reached", "You cannot borrow more than 3 books at a time.");
        } else if (!isBookBorrowed) {
            dispatch(borrowBook(book));
            Alert.alert("Success", `"${book.name}" has been borrowed!`);
        }
    };

    return (
        <View style={styles.container}>
            <Image source={{ uri: book.coverPage }} style={styles.coverImage} />
            <Text style={styles.bookName}>{book.name}</Text>
            <Text style={styles.authorName}>by {book.author}</Text>
            <Text style={styles.genre}>{book.genre}</Text>
            <Text style={styles.details}>Published: {book.publishedYear} | Pages: {book.pages}</Text>
            <Text style={styles.rating}>Rating: {book.rating}</Text>
            <Text style={styles.summary}>{book.summary}</Text>

            {isBookBorrowed ? (
                <Text style={styles.borrowedMessage}>This book is already borrowed!</Text>
            ) : (
                <Button title="Borrow Book" onPress={handleBorrowBook} color="#00796B" />
            )}
        </View>
    );
}
