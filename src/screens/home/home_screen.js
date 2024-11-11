import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FlatList, Text, TouchableOpacity, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../database/firebase_config';
import { setBooks } from '../../redux/book_slice';
import styles from './home_screen_styles';

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
        <View style={styles.container}>
            <FlatList
                data={books}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('BookDetail', { book: item })} style={styles.card}>
                        <Image source={{ uri: item.coverPage }} style={styles.coverImage} />
                        <View style={styles.textContainer}>
                            <Text style={styles.bookName}>{item.name}</Text>
                            <Text style={styles.authorName}>by {item.author}</Text>
                            <Text style={styles.genre}>{item.genre}</Text>
                        </View>
                    </TouchableOpacity>
                )}
                contentContainerStyle={styles.listContainer}
            />
        </View>
    );
}
