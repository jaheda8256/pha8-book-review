import { Link } from "react-router-dom";

const BookList = ({book}) => {

    const {id, bookName, image, author, tags, publisher, totalPages, category, rating, yearOfPublishing} = book;
    return (
        <div>
         
<div className="card card-side bg-base-100 shadow-xl border my-4">
  <figure className="flex justify-center bg-gray-200 rounded-xl items-center ml-20 p-16 lg:w-[240px]"><img src={image} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title text-2xl">{bookName}</h2>
    <p>By: {author}</p>

  <div className="flex items-center gap-8">
  <div>
   <h2 className="card-title lg:mt-5">
      <button className="btn btn-sm text-lime-500">{tags[0]}</button>
      <button className="btn btn-sm text-lime-500">{tags[1]}</button>
        </h2>
   </div>
       <div className="flex">

       <div>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
</svg>

       </div>
       <p>Year of Publishing: <span className="font-bold">{yearOfPublishing}</span></p>

    
       </div>
  </div>
       <div className="flex gap-8">
       <div >
        <div className="flex gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
</svg>

       <p>Publisher: <span className="font-bold mr-2">{publisher}</span></p>
       </div>
       </div>
        <div className="flex gap-2">
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m6.75 12-3-3m0 0-3 3m3-3v6m-1.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
</svg>

            </div>
        <p>Page: <span className="font-bold">{totalPages}</span></p>
        </div>
       </div>
       <hr />
    <div className="card-actions my-2">
      
   <button className="btn btn-sm px-8 bg-blue-200
    text-blue-400">{category}</button>
     <button className="btn btn-sm px-8 bg-orange-200
      text-orange-400">{rating}</button>
    <Link to={`/bookCard/${id}`}><button className="btn btn-sm bg-green-500
     text-white">View Details</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default BookList;