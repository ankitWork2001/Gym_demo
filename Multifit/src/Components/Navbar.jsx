import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Create an array of buttons and their respective paths
  const navItems = [
    { label: 'ABOUT US', path: '/about' },
    { label: 'IFIT', path: '/ifit' },
    { label: 'TRANSFORMATION PROGRAM', path: '/transformation' },
    {label:'MEDIA',path:'/media'},
    { label: 'CENTERS', path: '/centers' },
    { label: 'CONTACTUS', path: '/contact' },
  ];

  const handleNavigation = (path) => {
    navigate(path); // Navigate to the path
    setIsSidebarOpen(false); // Close the sidebar after navigating
  };

  return (
    <div>
      {/*Navbar for large screens */}
      <div className='flex flex-row fixed top-0 left-0 right-0 z-50 w-full items-center justify-around bg-gray-900 h-16 md:h-28'>
        <div className='flex flex-row'>
          <img src="./Images/Multifit.SVG" className='w-[100px] md:w-full' alt="Logo" />
        </div>
        <div className='hidden lg:flex space-x-8 mt-4'>
          {navItems.map((item, index) => (
            <button
              key={index}
              onClick={() => handleNavigation(item.path)} // Correctly call handleNavigation with the path
              className='text-white font-semibold'
            >
              {item.label} {/* Place the label inside the button */}
            </button>
          ))}
        </div>
        {/* Menu icon for small and medium screens */}
        <div className='lg:hidden flex items-center'>
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className='text-white text-3xl'>
            <MenuIcon style={{ fontSize: '40px' }}/>
          </button>
        </div>
      </div>

      {/* Sidebar for small screens */}
      <div
        className={`fixed top-16 md:top-24 right-0 w-64 h-full bg-gray-900 transform ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 z-40`}
      >
        <div className='flex justify-end p-4'>
          <button
            onClick={() => setIsSidebarOpen(false)} // Close sidebar on clicking the close button
            className='text-white text-2xl'
          >
            <CloseIcon />
          </button>
        </div>
        <div className='flex flex-col space-y-4 p-4'>
          {navItems.map((item, index) => (
            <button
              key={index}
              onClick={() => handleNavigation(item.path)}
              className='text-white font-semibold text-lg'
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
