import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../pages/bookSlice"
const AddBook = () => {
    let myDisp = useDispatch();
    const [details, setDetails] = useState({});
    const change = (e) => {
      setDetails({...details, [e.target.name]: e.target.value})
    }
    const save = (e) => {
        e.preventDefault();
        myDisp(addBook(details))
    }
    return ( <form onSubmit={save}>
        add book:
        <label>name</label>
        <input type="text" name="name" value={details.name} onChange={change}/>
        <label>author</label>
        <input type="text" name="author" value={details.author} onChange={change}/>
        <label>cost</label>
        <input type="text" name="cost" value={details.cost} onChange={change}/>
        <label>img</label>
        <input type="text" name="img" value={details.img} onChange={change}/>
        <input type="submit" />
        
    </form>  );
}
 
export default AddBook;