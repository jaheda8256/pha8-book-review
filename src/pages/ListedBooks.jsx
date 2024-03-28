import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredRead, getStoredWishList} from "../utility/localStorage";
import BookList from "../components/BookList";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ListedBooks = () => {
    
    const books = useLoaderData();

    const [readBook, setReadBook] = useState([]);

    useEffect(()=>{

      const storedId = getStoredRead();
      if(books.length > 0){
       const read = books.filter(book => storedId.includes(book.id))


    setReadBook(read);
   
      }
    }, [books])




const booked = useLoaderData();
 const [wishList, setWishList]= useState([]);
 
    useEffect(()=>{
        
      const stored = getStoredWishList();
      if(booked.length > 0){
       const readBooks = booked.filter(book => stored.includes(book.id))


    setWishList(readBooks);
       console.log(booked, stored, readBooks);
      }
    }, [booked])
    


    return (

        
       <div>

<div>
<div className="bg-base-300">
    <h1 className="font-bold text-4xl my-12 text-center p-4">Books</h1>
    </div>
</div>

<div className="text-center my-8">
<details className="dropdown">
  <summary className="m-1 btn bg-lime-500 text-white">open or close</summary>
  <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
    <li><a>Rating</a></li>
    <li><a>Number of pages</a></li>
    <li><a>Publisher year</a></li>
  </ul>
</details>
</div>
 <Tabs>
    <TabList>
      <Tab><span className="font-bold">Read Books</span></Tab>
      <Tab><span className="font-bold">Wishlist Books</span></Tab>
    </TabList>

    <TabPanel>
     
      {
          readBook.map(book => <BookList book={book} key={readBook.id}></BookList>)
            }
    </TabPanel>
    <TabPanel>
     
      {
           wishList.map(book => <BookList book={book} key={wishList.id}>
                </BookList>)

             }

    </TabPanel>
  </Tabs>
       </div> 
    );
};

export default ListedBooks;