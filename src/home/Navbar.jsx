import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-rose-500">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost text-white lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black text-white  rounded-box w-52">
              <li><a>Item 1</a></li>
              <li><a>I 3</a></li>
            </ul>
          </div>
          <a className="btn btn-ghost text-white lg:text-xl">BCI BLOOD DONATION</a>
        </div>

        <div className="navbar-center  hidden lg:flex">
          <ul className="menu menu-horizontal text-white">
            <NavLink to="/"><li><a href="">Home</a></li></NavLink>
            <li><a>About</a></li>
          </ul>
        </div>

        <div className="navbar-end mx-2">
          <NavLink to="/log">  <button className=" btn btn-ghost text-white font-bold">Log In</button></NavLink>
          <NavLink to="/signin"> <button className=" btn btn-ghost lg:px-5 text-white font-bold ">Sign Up</button></NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;