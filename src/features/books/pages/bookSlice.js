import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    arr:
        [{ id: 111, name: "the last normal", author: "Ruti Kepler", cost: 61, img: "https://yefe.co.il/wp-content/uploads/2020/02/%D7%94%D7%A0%D7%95%D7%A8%D7%9E%D7%9C%D7%99-%D7%94%D7%93%D7%9E%D7%99%D7%94-216x325.gif" },
        { id: 222, name: "mahalalel", author: "Maya Keinan", cost: 78, img: "https://yefe.co.il/wp-content/uploads/2020/02/%D7%9E%D7%94%D7%9C%D7%9C%D7%90%D7%9C-%D7%93%D7%A0%D7%99-%D7%94%D7%93%D7%9E%D7%99%D7%94-216x325.gif" },
        { id: 333, name: "stations", author: "Dvory Rand", cost: 66, img: "https://www.sifreiorhachaim.co.il/wp-content/uploads/2020/11/2072317-1.jpg" }],
    selectedBook: null,
    selectedBookToEdit: null

}

export const bookSlice = createSlice({
    name: 'book',
    initialState: initialState,
    reducers: {
        addBook: (state, action) => {
            state.arr.push(action.payload);
        },
        showBook: (state, action) => {
            state.selectedBook = action.payload;
        },
        deleteBook: (state, action) => {
            state.arr = state.arr.filter(item => item.id != action.payload)
        }
        , editBook: (state, action) => {
            state.selectedBookToEdit = action.payload;
        },
        saveEditedBook: (state, action) => {
            let copy = state.arr.map(item => {
                if (item.id !== action.payload.id)
                    return item;
                return action.payload;
            })
            let newSelectedBook;
            if (state.selectedBook.id === action.payload.id)
                newSelectedBook = action.payload;
            else
                newSelectedBook = state.selectedBook;
            state.selectedBook = newSelectedBook;
            state.selectedBookToEdit = null;
            state.arr = copy;
        }
    }
})
export const { addBook, deleteBook, editBook, saveEditedBook, showBook } = bookSlice.actions
export default bookSlice.reducer
