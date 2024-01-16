import { deleteBook, editBook, showBook} from "../pages/bookSlice";
    
import { useDispatch } from "react-redux";

const Book = ({ oneBook }) => {
    let dispatch = useDispatch()
    return (
        <div>
            <h2>{oneBook.name}</h2>
            <input onClick={() => { dispatch(deleteBook(oneBook.id)) }} type="button" value="delete" />
            <input onClick={() => { dispatch(editBook(oneBook)) }} type="button" value="edit" />
            <input onClick={() => { dispatch(showBook(oneBook)) }} type="button" value="show details" />
        </div>);
}

export default Book;