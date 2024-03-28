import { useLoaderData, useParams } from "react-router-dom";
import { saveList, getStoredRead } from "../utility/localStorage";
import { saveListWish, getStoredWishList } from "../utility/localStorage";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";

const BookCard = () => {

    const bookCard = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const bookCards = bookCard.find(bookCard => bookCard.id === idInt);
    // console.log(bookCards);
    const [books, setBooks] = useState([]);

const handleRead = (book) =>{
    const stored = getStoredRead();
    console.log(stored);
    const bookIsExist = stored.find((bk) => bk === idInt);
    console.log(bookIsExist);
  
    if(!bookIsExist){
        saveList(idInt)
      setBooks([...books, book])
      toast.success('book added to read list'); 
    }
    else{
        toast.error('you have already read this book!');
        
    } 

}

const handleWishList = (book) =>{
    const storedRead = getStoredRead();
 
    const bookIsExistRead = storedRead.find((bk) => bk === idInt);

    const stored = getStoredWishList();
    const bookIsExist = stored.find((bk) => bk === idInt);
    if(!bookIsExist && !bookIsExistRead){
        saveListWish(idInt)
        setBooks([...books, book])
        
        toast.success('book added to read list');
       
    }

  
    else{

        toast.error('you have already read this book!');
    }
}


    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 my-20">
            <div className="flex justify-center items-center">
        <img className="lg:w-[260px]" src={bookCards.image} alt="" />
            </div>
            <div>
        <h2 className="text-3xl font-fontPlay">{bookCards.bookName}</h2>
        <h2>By: {bookCards.author}</h2>
        <br />
        <hr />
        <h3 className="text-xl">{bookCards.category}</h3>
       <br />
        <hr />
        <p>Review:  {bookCards.review}</p>
        <br />
        <hr />

        <h2 className="card-title mt-5">
      <button className="btn btn-sm text-lime-500">{bookCards.tags[0]}</button>
      <button className="btn btn-sm text-lime-500">{bookCards.tags[1]}</button>
        </h2>
        <br />
        <p>Number of Pages: <span className="font-bold mx-14">{bookCards.totalPages}</span></p>
        <p>Publisher: <span className="font-bold mx-14">{bookCards.publisher}</span></p>
        <p>Year of Publishing: <span className="font-bold mx-14">{bookCards.yearOfPublishing}</span></p>
        <p>Rating: <span className="font-bold mx-14">{bookCards.rating}</span></p>
        <br />
        <hr />
        <br />
    <button onClick={handleRead} className="btn btn-outline mr-4">Read</button>
    <button onClick={handleWishList} className="btn btn-accent">Wishlist</button>
            </div>
            <ToastContainer />
        </div>
    );
};

export default BookCard;