import logo from '../Images/logo-dark.svg';
import { Link } from 'react-router-dom';
import { TiThMenu } from "react-icons/ti";
import { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between bg-yellow-400 text-white p-4">
      {/* Logo Section */}
      <div className="flex items-center">
        <img src={logo} alt="logo" className="h-10" />
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          <TiThMenu className="text-3xl" />
        </button>
      </div>

      {/* Links Section */}
      <div
        className={`  absolute md:static top-16 left-0 w-full bg-yellow-400 md:bg-transparent flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 px-4 md:px-0 ${
          menuOpen ? 'block' : 'hidden'
        } md:block`}
      >
        <Link to="/" className="hover:text-yellow-500">About Us</Link>
        <Link to="/ifit" className="hover:text-yellow-500">iFit</Link>
        <Link to="/program" className="hover:text-yellow-500">Transformation Program</Link>
        <Link to="/centers" className="hover:text-yellow-500">Centers</Link>
        <Link to="/media" className="hover:text-yellow-500">Media</Link>
        <Link to="/blogs" className="hover:text-yellow-500">Blogs</Link>
        <Link to="/franchise-enquiry" className="hover:text-yellow-500">Franchise Enquiry</Link>
        <Link to="/franchise" className="hover:text-yellow-500">Franchise</Link>
        <Link to="/contact" className="hover:text-yellow-500">Contact Us</Link>
      </div>
    </nav>
  );
};

export default Navbar;
