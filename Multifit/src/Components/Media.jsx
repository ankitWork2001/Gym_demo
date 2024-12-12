import React from 'react'
import ImageGallery from './ImageGallery'
import { useEffect } from 'react';
import Footer from './Footer';

const Media = () => {
  useEffect(()=>{
    window.scrollTo(0,0);
  },[]);
  return (
    <div>
      <div className='flex flex-col md:flex-row items-center justify-around mt-40'>
          <h1 className='text-3xl font-bold w-screen md:w-[200px]'>All Media Coverage</h1>
          <p className='text-xl text-gray-800 font-serif w-screen md:w-[300px]'>Hear what our clients have to say about their workouts and their experiences.</p>
      </div>
      <div className='mt-10 flex items-center justify-center'>
          <img src="./Images/M1.PNG" className='w-full md:w-3/4'/>
      </div>
      <div className='flex flex-col md:flex-row items-center justify-around mt-10'>
          <div>
           <h1 className='text-3xl font-bold w-screen md:w-[200px]'>NRI NEWS 24*7</h1>
           <p className='text-xl font-serif'>Sep 2022</p>
           </div>
           <img src="./Images/news.PNG"/>
      </div>
      <ImageGallery/>
      <Footer/>
    </div>
  )
}

export default Media
