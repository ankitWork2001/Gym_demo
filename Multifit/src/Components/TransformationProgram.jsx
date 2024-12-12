import React from 'react'
import YouTubePlayer from 'react-player/lib/players/YouTube'
import FitnessProgram from './FitnessProgram'
import { useEffect } from 'react'
import Footer from './Footer'

const TransformationProgram = () => {
  useEffect(()=>{
    window.scrollTo(0,0);
  },[]);
  return (
    <div>
      <div className='flex flex-col w-full mt-16 sm:mt-16 md:mt-20 lg:mt-0'>
        <img src="./Images/tranform.JPEG" className='w-full'/>
      </div>
      <div className='flex flex-col text-center md:text-left w-full bg-gray-100'>
         <div className='flex flex-col w-full md:w-3/4 md:mx-40 md:p-20 items-start justify-start'>
         <h1 className='text-3xl md:text-6xl text-black font-bold mb-5'>If you want to know more</h1>
         <p className='text-black text-xl md:text-2xl'>Our exclusive Transformation Package is designed to provide you with a holistic approach to fitness, combining personalized training, nutrition guidance, rejuvenating spa session & more. Get ready to embark on a life-changing journey!</p>
         </div>
      </div>
      <div className='flex flex-col text-center md:text-left w-full'>
         <div className='flex flex-col w-full md:w-3/4 md:mx-40 md:p-20 items-start justify-start'>
         <h1 className='text-4xl text-black font-bold mb-10'>Transformation Stories</h1>
         <p className='text-black text-lg'>MultiFit helps you upgrade and maintain a healthy lifestyle. Get custom workout and nutrition plans based on your goal.</p>
         </div>
         <div className='flex flex-col md:flex-row w-full items-center justify-center gap-10'>
         <div className='flex flex-col items-start justify-start font-serif'>
             <img src="./Images/pune1.PNG" className='w-screen md:w-[300px] lg:w-[400px]'/>
             <h1 className='text-2xl mb-2 mt-2'>RUCHIKA,PUNE</h1>
             <p>Member since June 20</p>
             <p>weight loss:11kg</p>
             <p>Duration:3 months</p>
         </div>
         <div className='flex flex-col items-start justify-start font-serif'>
             <img src="./Images/pune2.PNG"className='w-screen md:w-[300px] lg:w-[400px]'/>
             <h1 className='text-2xl mb-2 mt-2'>Shravan,PUNE</h1>
             <p>Member since July 4</p>
             <p>weight loss:8kg</p>
             <p>Duration:2 months</p>
         </div>
         <div className='flex flex-col items-start justify-start font-serif'>
             <img src="./Images/pune3.PNG" className='w-screen md:w-[300px] lg:w-[400px]'/>
             <h1 className='text-2xl mb-2 mt-2'>RUTHIVKA,PUNE</h1>
             <p>Member since MAY 20</p>
             <p>weight loss:16kg</p>
             <p>Duration:5 months</p>
         </div>
         </div>
         </div>
         <div className='flex items-center justify-center mt-10'>
         <div className='w-full h-[30vh] md:h-[30vh] md:w-full lg:w-3/4 lg:h-[80vh]'>
         <YouTubePlayer
         url='https://youtu.be/Ix4YxS-sN2s?si=M1yjxcNYMINnmkHu'
         playing={false}
         controls
         width="100%"
         height="100%"
        // Other ReactPlayer props will work here
        />
         </div>
         </div>
         <div>
            <FitnessProgram/>
         </div>
         <Footer/>
    </div>
  )
}

export default TransformationProgram
