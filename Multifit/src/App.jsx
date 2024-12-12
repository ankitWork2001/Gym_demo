import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';

// Import your page components
import Aboutus from './Components/Aboutus';
import IFIT from './Components/IFIT';
import TransformationProgram from './Components/TransformationProgram';
import Contactus from './Components/Contactus';
import Centers from './Components/Centers';
import Media from './Components/Media';

function App() {
  return (
    <Router> {/* Wrap the entire app in BrowserRouter */}
      {/* Navbar will appear on all pages */}
      <Navbar />
      
      {/* Define all the Routes for your pages */}
      <Routes>
        <Route path="/about" element={<Aboutus/>} />
        <Route path="/ifit" element={<IFIT/>} />
        <Route path="/transformation" element={<TransformationProgram/>} />
        <Route path='/centers' element={<Centers/>}/>
        <Route path="/contact" element={<Contactus/>} />
        <Route path="/media" element={<Media/>}/>
        {/*<Route path="/" element={<Landingpage/>} /> {/* Optional: Homepage */}
      </Routes>
    </Router>
  );
}

export default App;
