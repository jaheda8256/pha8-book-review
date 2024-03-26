import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <NavLink to="/" className={({isActive}) => isActive ? 'text-lime-500 font-bold' : 'font-bold'}>Home</NavLink>
        <NavLink to="/listedBooks" className={({isActive}) => isActive ? 'text-lime-500 font-bold' : 'font-bold'}>Listed Books</NavLink>
        <NavLink to="/pagesToRead" className={({isActive}) => isActive ? 'text-lime-500 font-bold' : 'font-bold'}>Pages to Read</NavLink>
        <NavLink to="/readTheBooks" className={({isActive}) => isActive ? 'text-lime-500 font-bold' : 'font-bold'}>Read The Books</NavLink>
        <NavLink to="/datingPlayBook" className={({isActive}) => isActive ? 'text-lime-500 font-bold' : 'font-bold'}>Dating Play Book</NavLink>
        
      </ul>
    </div>
    <a className="btn btn-ghost text-2xl font-bold">Book Vibe</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-4">
    <NavLink to="/" className={({isActive}) => isActive ? 'text-lime-500 font-bold' : 'font-bold'}>Home</NavLink>
    <NavLink to="/listedBooks" className={({isActive}) => isActive ? 'text-lime-500 font-bold' : 'font-bold'}>Listed Books</NavLink>
    <NavLink to="/pagesToRead" className={({isActive}) => isActive ? 'text-lime-500 font-bold' : 'font-bold'}>Pages to Read</NavLink>
    <NavLink to="/readTheBooks" className={({isActive}) => isActive ? 'text-lime-500 font-bold' : 'font-bold'}>Read The Books</NavLink>
    <NavLink to="/datingPlayBook" className={({isActive}) => isActive ? 'text-lime-500 font-bold' : 'font-bold'}>Dating Play Book</NavLink>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn mr-4 bg-lime-500 text-white font-bold">Sign In</a>
    <a className="btn bg-sky-300 text-white font-bold">Sign Up</a>
  </div>
</div>
    );
};

export default Navbar;