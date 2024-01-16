import { configureStore } from '@reduxjs/toolkit'
import bookSlice from '../features/books/pages/bookSlice'

export const store = configureStore({
    reducer: { bookSlice: bookSlice }
})
