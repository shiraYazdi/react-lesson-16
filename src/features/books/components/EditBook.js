import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { saveEditedBook } from "../pages/bookSlice"

const EditBook = () => {
    let toEdit = useSelector(state=>state.bookSlice.selectedBookToEdit)
    let myDisp = useDispatch();
    const [details, setDetails] = useState({...toEdit});
    const change = (e) => {
      setDetails({...details, [e.target.name]: e.target.value})
    }
    const save = (e) => {
        e.preventDefault();
        myDisp(saveEditedBook(details))
    }
    return ( <form onSubmit={save}>
        edit book:
        <label>name</label>
        <input type="text" name="name" value={details.name} onChange={change}/>
        <label>author</label>
        <input type="text" name="author" value={details.author} onChange={change}/>
        <input type="submit" />
    </form> );
}
 
export default EditBook;