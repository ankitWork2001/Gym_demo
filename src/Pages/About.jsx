import one1 from '../Images/1.png';
import two2 from '../Images/2.png';
import mission from '../Images/misson.png';
import vission from '../Images/visson.png';
import award1 from '../Images/Business-Leaders-Summit-_-Awards.webp';
import award2 from '../Images/FEA-Logo.webp';

// Import all required images
import img4 from '../Images/4.png';
import img5 from '../Images/5.png';
import img52 from '../Images/image 52.png';
import img53 from '../Images/image 53.png';
import img54 from '../Images/image 54.png';

import group1 from '../Images/1.jpg';
import group2 from '../Images/2.jpg';
import group3 from '../Images/3.jpg';
import group4 from '../Images/4.jpg';
import group5 from '../Images/5.jpg';
import group6 from '../Images/6.jpg';
import group7 from '../Images/7.jpg';
import group8 from '../Images/8.jpg';

const directors = [
  { img: img4, name: 'Mrs. Monisha Sharma', position: 'Co-Founder & Director', company: 'The Lexicon Group, MultiFit' },
  { img: img5, name: 'Mrs. Deepti Sharma', position: 'Co-Founder & Director', company: 'The Lexicon Group, MultiFit' },
  { img: img52, name: 'Mr. S. D. Sharma', position: 'Chairman', company: 'The Lexicon Group' },
  { img: img53, name: 'Mr. Pankaj Sharma', position: 'President, The Lexicon Group', company: 'Chairman & MD Pune Times Mirror, Civic Mirror & MultiFit' },
  { img: img54, name: 'Mr. Neeraj Sharma', position: 'Vice Chairman, The Lexicon Group', company: '& Director, Pune Times Mirror, Civic Mirror & MultiFit' },
];

const groups = [
  { img: group1 },
  { img: group2 },
  { img: group3 },
  { img: group4 },
  { img: group5 },
  { img: group6 },
  { img: group7 },
  { img: group8 },
];


const About = () => {
  return (
    <div className="p-4 md:p-8">
      {/* About Section */}
      <div className="about text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold">About MultiFit</h2>
      </div>
      

      <div className="space-y-4 text-gray-700 leading-relaxed text-center">
        <p className='py-6'>MultiFit, established in the UK in July 2015, emerged with a noble purpose – to foster a vibrant community of fitness enthusiasts dedicated to sharing and embracing the essence of fitness with everyone. This Association has a very important mission – to form and develop a broad community of fitness lovers that will inspire people for fitness to be adopted practically by everyone. Intending to deliver its services before and across this globe, MultiFit has quickly expanded to the UK, India, and the UAE.</p>
        <p className='py-6'>MultiFit is built on a team of over 350 dedicated and skilled professionals, including 10 trainers from around the world and over 7 top-level athletes. These people come from different backgrounds but share a common goal, to enhance and innovate the workout experience for our customers.</p>
        <p className='py-6'>We stand out from the regular fitness industry by offering a fun yet effective approach to fitness. Our team offers diverse programs such as joint-function training, group dynamics, HIIT, and endurance training. This means anyone looking to get fit can find the right program for them and stay motivated throughout their fitness journey.</p>
        <p className='py-6'>Central to `MultiFit&s` ethos is its innovative `&iFit` model, which focuses on the holistic well-being of its members; by integrating mind, body, and soul, MultiFit aims to instill a big shift in perspective, making fitness a regimen and lifestyle choice.</p>
        <p className='py-6 font-bold'>Join us at MultiFit on a transformative journey toward holistic fitness and well- being.</p>
      </div>

      {/* Image Section */}
      <div className="flex flex-wrap justify-center my-8">
        <img src={one1} alt="1-img" className=" flex-1 w-full" />
        <img src={two2} alt="2-img" className=" flex-1 w-full" />
      </div>

      {/* Mission Section */}
      {/* <div className="flex flex-col md:flex-row items-center gap-6 mb-8"> */}
      <div className="flex flex-col md:flex-row  gap-6 mb-8">
        <img src={mission} alt="mission-img" className="flex-1 w-full object-contain" />
        <div className="flex-1 px-10 py-4">
          <h2 className="text-xl font-bold pb-10">Mission</h2>
          <p className="text-gray-700 leading-relaxed">
          The mission of our fitness center is to support the inner strength of our members, letting them go beyond the limits set for them and achieve fitness goals through dedicated, high-quality work in an inspiring environment. We deliver the best facilities and subject matter expertise while promoting a community of like minded fitness enthusiasts , leading you on the road to fitter, happier, and stronger you.
          </p>
        </div>
      </div>


{/* <div className="flex flex-col md:flex-row items-center gap-6 mb-8"> */}
<div className="flex flex-col md:flex-row  gap-6 mb-8">
  <img src={vission} alt="vission-img" className="flex-1 object-cover h-full" />
  <div className="flex-1 bg-black text-white px-10 py-4 ">
    <div>
      <h2 className="text-xl font-bold py-16">Vision</h2>
      <p className="leading-relaxed">
        Our goal is to help everyone across India become fit in body, mind, and soul. We want people to feel peaceful and confident in themselves. Through simple and enjoyable workouts, we aim to inspire passion and create a supportive community. We believe that fitness should be an active and personal journey, not a passive activity. With every step of progress, we celebrate together, embracing #IamMultiFit.
      </p>
    </div>
  </div>
</div>


      {/* Directors Section */}
      <div>
        <h2 className="text-2xl font-bold text-center mb-6">Directors</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {directors.map((director, id) => (
            // <div
            //   key={id}
            //   className="flex flex-col items-center text-center bg-white shadow-md p-4  w-72"
            // >
            <div
              key={id}
              className="flex flex-col  bg-white shadow-md w-72"
            >
              {/* <img src={director.img} alt="director-img" className="h-32 w-32 object-cover rounded-full mb-4" /> */}
              <img src={director.img} alt="director-img" className="object-cover  mb-4" />
              <div className="p-4">
              <h4 className="font-bold">{director.name}</h4>
              <p className="text-red-600">{director.position}</p>
              <p className="text-gray-500 text-sm">{director.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
<div className="px-4 py-20 ">
  <h2 className="text-2xl font-bold text-center mb-6">The Lexicon Group</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {groups.map((group, id) => (
      <div key={id} className="bg-white shadow-md rounded-lg overflow-hidden">
        <img src={group.img} alt="group-img" className="w-full h-48 object-contain" />
      </div>
    ))}
  </div>
</div>

<div className="bg-slate-900 text-white py-12">
  <h1  className=" text-center text-xl md:text-2xl font-bold">Awards</h1>
        <div className="flex flex-col md:flex-row justify-center gap-6 px-4 py-12  text-white">
  {/* Award 1 */}
  <div className="flex flex-col  shadow-lg rounded-lg p-4 w-full md:w-1/2 lg:w-1/3">
    {/* <img src={award1} alt="Award 1" className="w-full h-48 object-contain rounded-t-lg" /> */}
    <img src={award1} alt="Award 1" className=" object-contain" />
    <h4 className="text-lg font-bold mt-4">Fitness Excellence Award 2019</h4>
    <p className="text-gray-300 mt-2">
      MultiFit Functional Fitness Studio was awarded the Fitness Excellence Award for Excellence in Multi-Discipline.
    </p>
  </div>

  {/* Award 2 */}
  <div className="flex flex-col  shadow-lg rounded-lg p-4 w-full md:w-1/2 lg:w-1/3">
    <img src={award2} alt="Award 2" className="object-contain" />
    <h4 className="text-lg font-bold mt-4">Fitness Excellence Award 2019</h4>
    <p className="text-gray-300 mt-2">
      MultiFit Functional Fitness Studio was awarded the Fitness Excellence Award for Excellence in Multi-Discipline.
    </p>
  </div>
</div>
</div>

<div className='flex justify-between px-4 py-10 bg-black text-white'>
  <h1 className='text-xl font-bold'>Call us Now! Get a 3 days free Membership trial</h1>
  <button className="px-4 py-2 bg-yellow-400 text-white font-bold">CONTACT US</button>
</div>
    </div>
  );
};

export default About;