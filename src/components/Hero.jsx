import { Link } from 'react-router-dom';
import banner from '../assets/images/banner.png'

const Hero = () => {
  
    return (
        <div className="hero min-h-screen bg-base-200 my-20">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={banner} />
          <div>
            <h1 className="text-5xl font-bold font-fontPlay">Books to freshen <br />up your bookshelf</h1>
          <div className='mt-16 btn bg-lime-500 text-white'>
            <Link to="/listedBooks"> View the list</Link>
          </div>

          </div>
        </div>
      </div>
    );
};

export default Hero;