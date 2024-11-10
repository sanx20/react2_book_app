import React from 'react';
import { Button, Image, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { borrowBook } from '../../redux/book_slice';

export default function BookDetailScreen({ route }) {
    const { book } = route.params;
    const dispatch = useDispatch();
    const borrowedBooks = useSelector(state => state.books.borrowedBooks);

    const handleBorrowBook = () => {
        if (!borrowedBooks.some(b => b.id === book.id)) {
            dispatch(borrowBook(book));
        } else {
            alert("You have already borrowed this book.");
        }
    };

    return (
        <View>
            <Image source={{ uri: book.coverPage }} style={{ width: 100, height: 150 }} />
            <Text>{book.name}</Text>
            <Text>{book.author}</Text>
            <Text>{book.rating}</Text>
            <Text>{book.summary}</Text>
            <Button title="Borrow Book" onPress={handleBorrowBook} />
        </View>
    );
}
