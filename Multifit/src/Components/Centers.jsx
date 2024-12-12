import { useEffect } from 'react';
import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Footer from './Footer';

const Centers = () => {
    useEffect(()=>{
        window.scrollTo(0,0);
      },[]);

  return (
    <div>
        <div className='flex flex-col items-center justify-center w-full bg-black mt-10'>
            <div className='md:w-3/4 h-[80vh] flex flex-col items-center justify-center gap-10'>
                <h1 className='text-2xl md:text-6xl text-white font-bold'>MultiFit Centers</h1>
                <p className='text-white text-lg md:text-2xl font-serif'>
                    Our gym centers are the ultimate fitness destinations, equipped with state-of-the-art facilities and staffed by knowledgeable professionals. We offer a wide range of workout options, from cutting-edge exercise equipment to diverse group classes, catering to all fitness levels and preferences.
                </p>
            </div>
        </div>   
            <div className='flex flex-col items-center justify-center mt-16'>
                <p className='text-black text-3xl font-bold'>Centers</p> {/* Added text-white for visibility */}
            </div>
            <div className='flex flex-col md:flex-row items-center justify-around mt-20'>
                <div className='flex flex-col items-start justify-start ml-5 md:ml-0 gap-3'>
                   <h1 className='text-2xl md:text-6xl font-bold '>MultiFit UAE</h1>
                   <p className=' w-screen md:w-[500px] text-xl md:text-2xl'>MZ01-03, Makkah Tower
                     Building-C301, Shabiya Mussafah 10, Mohammad Bin Zayed City Abu Dhabi.<br/>
                     P.O.Box. 79691<br/>
                     Landline. 0097124411063<br/>
                     Mobile. 00971506669503<br/>
                     Email. info@multifituae.com</p>
                     <button className='font-bold p-4 bg-yellow-400'>Explore more<ArrowForwardIcon/> </button>
                </div>
                <div>
                    <img src="./Images/img1.PNG" className='w-full md:w-[500px]'/>
                </div>
            </div>
            <div className='flex flex-col md:flex-row items-center justify-around mt-20'>
                <div>
                    <img src="./Images/img2.PNG" className='w-[500px]'/>
                </div>
                <div className='flex flex-col items-start justify-start w-screen md:w-[500px] ml-5 md:ml-0'>
                    <h1 className='md:text-6xl text-3xl font-bold mb-3'>MultiFit Kharadi,Pune</h1>
                    <p className='md:text-2xl text-xl mb-3'>kapila Resorts DPCOE Road,Besides Dholepatil College Near Panchshil Towers,Kharadi,Pune</p>
                    <button className='font-bold p-4 bg-yellow-400'>Explore more<ArrowForwardIcon/> </button>
                </div>
            </div>
            <div className='flex flex-col md:flex-row items-center justify-around mt-20'>
                <div className='flex flex-col items-start justify-start gap-3 ml-5 md:ml-0'>
                   <h1 className='text-2xl md:text-6xl font-bold'>MultiFit Dhanori,Pune</h1>
                   <p className=' w-screen md:w-[500px] text-xl md:text-2xl'>3rd floor,Balaji Complex,Dhanori-Lohegaon Road,Dhanori Jakat Naka,Pune.</p>
                     <button className='font-bold p-4 bg-yellow-400'>Explore more<ArrowForwardIcon/> </button>
                </div>
                <div>
                    <img src="./Images/img3.PNG" className='w-full md:w-[500px]'/>
                </div>
            </div>
            <Footer/>
    </div>
  )
}

export default Centers
