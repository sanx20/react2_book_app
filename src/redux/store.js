import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './book_slice';

const store = configureStore({
    reducer: {
        books: bookReducer,
    },
});

export default store;
