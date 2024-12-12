import React from "react";

const ImageGallery = () => {
  const images = [
    { src: "./Images/1.PNG", text: "Times of Power & Voice sep 2022" },
    { src: "./Images/2.PNG", text: "The Indian Bulletin Aug 2022" },
    { src: "./Images/3.PNG", text: "India Influencive Aug 2022" },
    { src: "./Images/4.PNG", text: "Pioneer News Aug 2022" },
    { src: "./Images/5.PNG", text: "RD Times Health Aug 2022" },
    { src: "./Images/6.PNG", text: "Republic News India Aug 2022" },
    { src: "./Images/7.PNG", text: "Republic News India Aug 2022" },
    { src: "./Images/8.PNG", text: "Online Meedia Cafe" },
    { src: "./Images/9.PNG", text: "Content Meida Solution aug 2022" },
    { src: "./Images/10.PNG", text: "NRI News 24*7 Aug 2022" },
    { src: "./Images/11.PNG", text: "RD Times July 2022" },
    { src: "./Images/12.PNG", text: "Delhi Magazine July 2022" },
    { src: "./Images/13.PNG", text: "Business News Week July 2022" },
    { src: "./Images/14.PNG", text: "Delhi Magazine July 2022" },
    { src: "./Images/15.PNG", text: "Republic News India June 2022" },
    { src: "./Images/16.PNG", text: "Prittle Prattle News" },
    { src: "./Images/17.PNG", text: "Thought Habitat May 2022" },
    { src: "./Images/18.PNG", text: "india influencive Aug 2022" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-gray-600">
      {images.map((item, index) => (
        <div key={index} className="flex flex-col items-center justify-center w-75%">
          <img
            src={item.src}
            alt={item.text}
            className="w-full md:w-[700px] rounded-md"
          />
          <p className="mt-2 text-xl font-bold text-black bg-gray-500">{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
