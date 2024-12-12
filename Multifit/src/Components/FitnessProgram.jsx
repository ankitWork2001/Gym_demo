import React from "react";
import StarIcon from '@mui/icons-material/Star';
import { useEffect } from "react";
import Footer from "./Footer";

const FitnessProgram = () => {
  useEffect(()=>{
    window.scrollTo(0,0);
  },[]);
  return (
    <div className="flex flex-col md:flex-row items-center justify-center h-screen bg-gray-100 p-6 gap-6 mt-20">
      {/* Left Section */}
      <div className="bg-black text-white p-8 shadow-md w-full md:w-[500px] md:h-[500px] flex flex-col items-center justify-center md:text-left relative z-10">
        <h2 className="text-center text-3xl font-bold mb-4 w-[300px]">90 Nos. Days Program</h2>
        <p className="text-center text-lg">
          Gym Workout & Unlimited HIIT <br />
          (High Intensity Interval Training)
        </p>
      </div>

      {/* Right Section */}
      <div className="flex flex-col items-center justify-center bg-yellow-400 shadow-md w-full md:w-[800px] md:h-[700px] md:ml-[-50px] mt-6 md:mt-0 p-8 relative z-0">
        <h3 className="text-2xl font-bold mb-4">Package Details</h3>
        <ul className="space-y-4">
          <li className="flex justify-between gap-10">
            <span><StarIcon/>One on one personal training with head coach</span>
            <span>60 sessions</span>
          </li>
          <li className="flex justify-between">
            <span><StarIcon/>Customized nutrition plan with 9 consultation</span>
            <span>9 sessions</span>
          </li>
          <li className="flex justify-between">
            <span><StarIcon/>Pre workout fuel</span>
            <span>90 Nos.</span>
          </li>
          <li className="flex justify-between">
            <span><StarIcon/>Pre workout protein</span>
            <span>90 Nos.</span>
          </li>
          <li className="flex justify-between">
            <span><StarIcon/>Customized meal plan with home delivery</span>
            <span>90 Nos.</span>
          </li>
          <li className="flex justify-between">
            <span><StarIcon/>Customized snacks plan with home delivery</span>
            <span>90 Nos.</span>
          </li>
          <li className="flex justify-between">
            <span><StarIcon/>Spa - 60 minutes</span>
            <span>6 sessions</span>
          </li>
          <li className="flex justify-between">
            <span><StarIcon/>Gift hamper</span>
            <span>1 No.</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FitnessProgram;
