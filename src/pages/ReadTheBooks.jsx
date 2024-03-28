// page ar name 2



const ReadTheBooks = () => {
    return (
        <div>
            
            <h1 className="text-center text-6xl font-extrabold mt-20">Read The Book</h1>



     <div className="container mx-auto my-20 ">
      <div className="hero min-h-screen rounded-badge" style={{backgroundImage: 'url(https://i.ibb.co/g7VMV9F/books.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">World Book Day</h1>
      <p className="mb-5">A private library is not an ego-boosting appendage but a research tool. Read books are far less valuable than unread ones.</p>
  <button className="btn bg-gray-800 text-white px-8 border-none">Details</button>
    </div>
  </div>
</div>
        </div>
        <div>
        
         <footer className="footer footer-center p-4 bg-gray-600 text-base-content mt-32">
  <aside>
    
    <p className="text-white">Books.com © 2024 - All right reserved by ACME Industries Ltd</p>
  </aside>
</footer>
       
            </div>
        </div>

    
    );
};

export default ReadTheBooks;