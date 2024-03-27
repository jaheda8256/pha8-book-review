import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getStoredRead } from "../utility/localStorage";
import BookList from "../components/BookList";


const ListedBooks = () => {
    
    const books = useLoaderData();

    const [readBook, setReadBook] = useState([]);

    useEffect(()=>{

      const storedId = getStoredRead();
      if(books.length > 0){
       const read = books.filter(book => storedId.includes(book.id))


    setReadBook(read);
   
      }
    }, [])


    return (
        <div>
             <h1>listed book: {readBook.length}</h1>
            <div className="bg-base-300">
            <h1 className="font-bold text-4xl my-12 text-center p-4">Books</h1>

 </div>


 <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden  flex-nowrap dark:bg-gray-100 dark:text-gray-800">
	<button  className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b dark:border-gray-600 dark:text-gray-600">
		
		<span>Read Books</span>
	</button>
	<button   className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border border-b-0 rounded-t-lg dark:border-gray-600 dark:text-gray-900">
		
		<span>Wishlist Books</span>
	</button>
	
	
</div>

             {
                readBook.map(book => <BookList book={book} key={readBook.id}></BookList>)
            }

        </div>
    );
};

export default ListedBooks;