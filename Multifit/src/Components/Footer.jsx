import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col md:flex-row items-center justify-between w-full bg-black mt-10'>
          <h1 className='text-3xl font-bold w-full text-white p-10'>Call us Now! Get a 3 days free Membership trial</h1>
          <button className='text-bold p-3 bg-yellow-400 w-[200px] md:mr-20'>CONTACT US</button>
      </div>
      <div className='flex flex-col md:flex-row items-start justify-start p-5  md:p-10 lg:p-20 bg-black gap-4 md:gap-10 lg:gap-40'>
         <div className='flex flex-col items-start justify-start'>
             <img src="./Images/Multifit.SVG" className='mb-5'/>
             <div className='flex flex-row gap-5 text-yellow-400'>
                 <InstagramIcon/>
                  <LinkedInIcon/>
                  <FacebookIcon/>
             </div>
         </div>
         <div className='flex flex-col items-start justify-start gap-2'>
              <p className='text-lg text-gray-400'>INFO</p>
              <p className='text-md font-semibold text-white'>About us</p>
              <p className='text-md font-semibold text-white'>iFit</p>
              <p className='text-md font-semibold text-white'>Centers</p>
              <p className='text-md font-semibold text-white'>Media</p>
              <p className='text-md font-semibold text-white'>Privacy policy</p>
              <p className='text-md font-semibold text-white'>Terms and Conditions</p>
              <p className='text-md font-semibold text-white'>Contact Us</p>
         </div>
         <div className='flex flex-col items-start justify-start gap-2'>
             <p className='text-lg text-gray-400'>CONTACT US</p>
             <p className='text-md font-semibold text-white'>+917249071673</p>
             <p className='text-md font-semibold text-white'>+917249071674</p>
             <p className='text-md font-semibold text-white'>digital@multifit.co.im</p>
         </div>
         <div className='flex flex-col items-start justify-start'>
            <p className='text-lg text-gray-400'>FIND US</p>
            <p className='text-md font-semibold text-white w-full md:w-[200px]'>Besides LSBI, Badminton Court, near Nyati Enchante Society, behind F Residency, Digambar Nagar, Wadgaon Sheri, Pune, Maharashtra 411014© 2023 — Copyright</p>
         </div>
      </div>
    </div>
  )
}

export default Footer
