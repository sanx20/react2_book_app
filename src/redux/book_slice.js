import { createSlice } from '@reduxjs/toolkit';
import uuid from 'react-uuid';

const booksSlice = createSlice({
    name: 'books',
    initialState: {
        books: [],
        borrowedBooks: []
    },
    reducers: {
        setBooks: (state, action) => {
            state.books = action.payload;
        },
        borrowBook: (state, action) => {
            if (state.borrowedBooks.length < 3) {
                state.borrowedBooks.push(action.payload);
            } else {
                alert("You can't borrow more than 3 books at a time.");
            }
        },
        returnBook: (state, action) => {
            state.borrowedBooks = state.borrowedBooks.filter(book => book.id !== action.payload);
        }
    }
});

export const { setBooks, borrowBook, returnBook } = booksSlice.actions;
export default booksSlice.reducer;
