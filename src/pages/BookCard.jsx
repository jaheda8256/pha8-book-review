import { useLoaderData, useParams } from "react-router-dom";


const BookCard = () => {

    const bookCard = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const bookCards = bookCard.find(bookCard => bookCard.id === idInt);
    console.log(bookCards);
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 my-20">
            <div className="flex justify-center items-center">
        <img className="lg:w-[270px]" src={bookCards.image} alt="" />
            </div>
            <div>
        <h2 className="text-3xl">{bookCards.bookName}</h2>
        <h2>By: {bookCards.author}</h2>
        <br />
        <hr />
        <h3 className="text-xl">{bookCards.category}</h3>
       <br />
        <hr />
        <p>{bookCards.review}</p>
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
    <button className="btn btn-outline mr-4">Default</button>
    <button className="btn btn-accent">Accent</button>
            </div>
        </div>
    );
};

export default BookCard;