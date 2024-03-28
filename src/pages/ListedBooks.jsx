import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
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

 const [tabs, setTabs] = useState(0);

 const handleTab = id =>{
    setTabs(id);
 }

    return (
        <div>
            
            <div className="bg-base-300">
            <h1 className="font-bold text-4xl my-12 text-center p-4">Books</h1>

 </div>

 {/* dropdown */}
 <div className="text-center my-20">
 <details className="dropdown">
  <summary className="m-1 btn bg-lime-500 text-white">open or close</summary>
  <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</details>
 </div>

{/* tabs */}
 <div className="flex items-center mx-4 overflow-x-auto overflow-y-hidden  flex-nowrap dark:bg-gray-100 dark:text-gray-800">

	<div  className={tabs === 0 ? 'read-list' : 'wishlist'}>
    <button onClick={() => handleTab(0)} >
		
	<span className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b dark:border-gray-600 dark:text-gray-600">Read Books</span>
	</button>
    </div>



	<div className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border border-b-0 rounded-t-lg dark:border-gray-600 dark:text-gray-900">
    <div className={tabs === 0 ? 'read-list' : 'wishlist'}>
    <button onClick={() => handleTab(1)}  >
		
        <span>Wishlist Books</span>
        </button>
    </div>
    </div>
	
	
</div>

             {
                readBook.map(book => <BookList book={book} key={readBook.id}></BookList>)
            }

        </div>
    );
};

export default ListedBooks;