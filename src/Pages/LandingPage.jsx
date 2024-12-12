// import banner from '../images/banner.png';
import banner from '../Images/banner.png';

const LandingPage = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-4 md:p-8 space-y-4 md:space-y-0  bg-yellow-400">
      {/* Text Section */}
      <div className="text-center md:text-left banner-text">
        <h1 className="font-bold uppercase">
          Join India’s<br></br> Largest & <br></br>Happiest <br></br><span className='text-white'>Fitness </span><br></br><span className='text-white'>Community</span>
        </h1>
        <button className="bg-white px-4 py-2 my-4 font-bold uppercase">
          Contact Us
        </button>
      </div>
      {/* Image Section */}
      <div className="md:order-1">
        <img 
          src={banner} 
          alt="banner-img" 
          className="w-full max-w-md md:max-w-lg rounded-lg"
        />
      </div>
    </div>
  );
};

export default LandingPage;
