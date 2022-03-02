// import {useEffect} from 'react';
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  const showDropdown = () => {
    document.querySelector(".dropdown").classList.toggle("hidden");
  };
  return (
    <nav class="navbar z-20 px-8 md:px-16 flex">
      <Link to="/" class="navbar-brand">
        <img src={Logo} alt="" width="130px" />
      </Link>
      <div class="nav items-center gap-6 -ml-8 hidden md:flex">
        <Link to="/solution" className="font-semibold text-md">
          OUR SOLUTIONS
        </Link>
        <Link to="/contact" className="font-semibold text-md">
          CONTACT
        </Link>
      </div>
      <div class="items-center gap-6 hidden md:flex">
        <button class="text-white font-semibold">LOGIN</button>
        <button class="bg-white py-3 px-8 rounded text-primary-theme font-semibold">
          REGISTER
        </button>
      </div>
      <div className="flex md:hidden">
        <span
          className="menu-btn relative w-6 h-1 bg-white block"
          onClick={showDropdown}
        />

        <div className="dropdown absolute w-full left-0 top-24 z-20 bg-primary-theme flex hidden sm:hidden flex-col h-auto rounded shadow">
          <Link
            to="/solution"
            className="font-medium px-4 text-md text-white border-b border-white h-12 flex items-center"
          >
            OUR SOLUTIONS
          </Link>
          <Link
            to="/contact"
            className="font-medium px-4 text-md text-white border-b border-white h-12 flex items-center"
          >
            CONTACT
          </Link>
          <Link
            to="/#"
            className="font-medium px-4 text-md text-white border-b border-white h-12 flex items-center"
          >
            LOGIN
          </Link>
          <Link
            to="/#"
            className="font-medium px-4 text-md text-white h-12 flex items-center"
          >
            REGISTER
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
