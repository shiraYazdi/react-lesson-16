import { useSelector } from "react-redux";

const BookDetails = () => {

    const selectedBook = useSelector(state => state.bookSlice.selectedBook)
    return (
        <div>
            debugger;
            details of selected book:
            <h3>{selectedBook.name}</h3>
            <h3>{selectedBook.author}</h3>
            <h3>{selectedBook.cost}</h3>
            <img src={selectedBook.img}></img>
        </div>
    );
}

export default BookDetails;