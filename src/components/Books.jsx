import { useEffect, useState } from "react";
import Book from "./Book";


const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(() =>{
        fetch('FakeData.json')
        .then(res => res.json())
        .then(data => setBooks(data));
    }, [])

    return (
       <div>
      <h2 className="text-5xl font-bold text-center my-20">Books</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {
            books.map(book => <Book key={book.id} book={book}></Book>)
        }
  
 </div>
            
  </div>
    );
};

export default Books;