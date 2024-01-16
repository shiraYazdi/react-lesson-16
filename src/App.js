import logo from './logo.svg';
import './App.css';
import  List  from "./features/books/components/List.js"
import  BookDetails  from './features/books/components/BookDetails.js';
import  EditBook  from "./features/books/components/EditBook"
import AddBook  from "./features/books/components/AddBook"
import { useSelector } from 'react-redux';

function App() {
  
  let selected = useSelector(st=>st.bookSlice.selectedBook);
  let selectedToEdit = useSelector(st=>st.bookSlice.selectedBookToEdit);
  return (<>
   
   <List/>
   {selected && <BookDetails/>}
   {selectedToEdit && <EditBook/>}
   <AddBook/>
   </>
   );
}

export default App;
