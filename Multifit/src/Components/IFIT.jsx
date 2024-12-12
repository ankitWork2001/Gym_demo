import React from 'react';
import { useEffect } from 'react';
import Footer from './Footer';

const IFIT = () => {
  useEffect(()=>{
    window.scrollTo(0,0);
  },[]);
  const images = [
    { src: './Images/image1.PNG',heading:'HIIT Training', text: 'High Intensity Interval Training with variations in workouts focuses on different aspects of fitness i.e. strength, stamina, endurance, and agility. Each class is designed based on the format that is scientifically.....' }, // Row 1
    { src: './Images/image2.JPEG',heading:'Looping ™', text: 'Looping TM enhances muscular endurance, and can be done with minimal equipment, making it accessible. Incorporating it into your workout routine helps achieve progressive and diverse fitness goals while ensuring muscle engagement.' },
    { src: './Images/image3.PNG',heading:'Endurance Training', text:"Endurance training increases the body's capacity to transport oxygen to muscles. Whether you're a competitive athlete or simply looking to improve your stamina, training is essential for achieving better physical health and increased energy levels." },
    { src: './Images/image4.PNG',heading:'MMA', text: 'MMA (Mixed Martial Arts) training enhances physical conditioning, agility, and flexibility, promoting overall health. It also teaches valuable self-defense skills, boosting confidence and personal safety. ' }, // Row 2
    { src: './Images/image5.PNG',heading:'Boxing', text: 'Gym boxing training improves cardiovascular fitness, strength, and endurance. Boxing is an excellent stress reliever, allowing individuals to release pent-up tension and frustrations in a controlled environment. The training offers a well-rounded approach to physical and mental well-being.' },
    { src: './Images/image6.PNG',heading:'Strength Training', text:'Strength training is a cornerstone of physical fitness, contributing to muscle development, increased bone density, and improved metabolism. It can lead to better athletic performance and daily functional abilities.' },
    { src: './Images/image7.PNG',heading:'Calisthenics', text: 'Calisthenics is a fundamental component of gym training with immense importance. It relies on bodyweight exercises to improve strength, flexibility, and overall fitness. Calisthenics exercises like push-ups, pull-ups, and bodyweight squats are accessible to individuals of all fitness levels.' }, // Row 3
    { src: './Images/image8.PNG',heading:'Yoga', text: 'Yoga complements traditional workouts by improving flexibility, balance, and mobility, which are essential for overall fitness and injury prevention. Yoga also enhances mental well-being, reducing stress and promoting mindfulness.' },
    { src: './Images/image9.PNG',heading:'Dance Base Routines', text: 'Incorporating dance-based routines adds an exciting dimension to workouts. These routines not only improve cardiovascular fitness and coordination but also make exercise enjoyable. Dancing engages various muscle groups, promoting overall toning and strength development while enhancing flexibility.' },
  ];

  return (
    <div>
      {/* Full-width black background for the first image */}
      <div className="bg-black w-full flex items-center justify-center">
        <img
          src="./Images/Ifitmodel.SVG"
          className="w-screen sm:w-screen md:w-[800px] mx-10 my-20 md:mx-40 md:my-40"
          alt="IFIT Model"
        />
      </div>

      {/* Grid section for other images */}
      <div className="flex items-center justify-center mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-3 md:p-10">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[300px] overflow-hidden"
            >
              {/* Image with dark overlay effect on hover */}
              <img
                src={image.src}
                alt={`Image ${index + 1}`}
                className="w-full h-full object-cover transition-all duration-300"
              />
              
              {/* Darkened overlay and visible bright text on hover */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300">
                {/* Heading at the bottom by default, and moves to the top on hover */}
                <span className="absolute bottom-0 p-10 w-[350px] text-white group-hover:top-0 left-1/2 transform -translate-x-1/2 group-hover:text-yellow-500 font-bold text-2xl transition-all duration-300">
                  {image.heading}
                </span>
                
                {/* Text that shows up in the center of the image on hover */}
                <span className="text-transparent group-hover:text-white text-xs md:text-xs lg:text-md px-5">
                  {image.text}
                </span> 
              </div>
              </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default IFIT;
