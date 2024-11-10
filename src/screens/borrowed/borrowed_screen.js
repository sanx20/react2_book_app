import React from 'react';
import { Button, FlatList, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { returnBook } from '../../redux/book_slice';

export default function BorrowedScreen() {
    const borrowedBooks = useSelector(state => state.books.borrowedBooks);
    const dispatch = useDispatch();

    return (
        <FlatList
            data={borrowedBooks}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
                <View>
                    <Text>{item.name}</Text>
                    <Text>{item.author}</Text>
                    <Button title="Return Book" onPress={() => dispatch(returnBook(item.id))} />
                </View>
            )}
        />
    );
}
