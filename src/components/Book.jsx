import { Link } from "react-router-dom";


const Book = ({book}) => {

    const {id, image, bookName, author, category, rating, tags} = book;
    return (
        
            
<Link to={`/bookCard/${id}`} className="">

     <div className="card w-96 bg-base-100  shadow-xl border">
  <figure><img className="p-6 bg-gray-200 px-24 rounded-lg" src={image} alt="Shoes" /></figure>
  <div className="card-body">
    
     
  <h2 className="card-title">
      <button className="btn btn-sm text-lime-500">{tags[0]}</button>
      <button className="btn btn-sm text-lime-500">{tags[1]}</button>
</h2>

        <h2 className="text-xl font-bold">{bookName}</h2>
    <p>By: {author}</p>
        <hr />

        <div className="flex justify-between">
        <div>
        <p>{category}</p>
        </div>
        <div className="flex gap-2">
         <div>
           {rating}
     </div>     
     <div>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
</svg>
 </div>

 </div>

   </div>
 
  </div>
</div>

</Link>
    );
};

export default Book;