import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../database/firbase_config';
import { setBooks } from '../../redux/book_slice';

export default function HomeScreen() {
    const dispatch = useDispatch();
    const books = useSelector(state => state.books.books);
    const navigation = useNavigation();

    useEffect(() => {
        const fetchBooks = async () => {
            const booksCollection = await getDocs(collection(db, 'books'));
            const booksData = booksCollection.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            dispatch(setBooks(booksData));
        };
        fetchBooks();
    }, [dispatch]);

    return (
        <FlatList
            data={books}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
                <TouchableOpacity onPress={() => navigation.navigate('BookDetail', { book: item })}>
                    <View>
                        <Text>{item.name}</Text>
                        <Text>{item.author}</Text>
                    </View>
                </TouchableOpacity>
            )}
        />
    );
}
