import React from 'react';
import im2 from '../assets/images/im2.png'; // Import the image




export default function Hero() {

  return (
    <section className="flex flex-row items-center justify-center h-screen px-10 ">
      <div className="w-1/2 text-left ml-[200px] ">
        <h1 className = "text-7xl font-bold text-white">
          Hello, I'm <span className="text-blue-500 text-9xl">Vinchent Pantino</span>
        </h1>
        <p className="mt-2 text-lg text-gray-400">
        <span className="text-gray-100 text-2xl">Frontend Developer</span> | React | TypeScript | Flutter | Angular | JavaScript | WordPress
        </p>
      </div>

      <div className="w-1/2 flex justify-right">
        
        <img src={im2} alt="This is Me" 
        className="w-1000 h-1000 object-cover rounded-lg"/>

        <div className="absolute bottom left-1/2 transform -translate-x-1/2 bg-gray-800 
        shadow-lg rounded-2xl p-6 w-72  text-center 
          z-[-1] h-[500px] w-[1200px]  flex flex-col justify-end pb-6">
            <p className="text-gray-100 font-medium">
              Passionate Frontend Developer building interactive web and mobile experiences.
            </p>
        </div>
      </div>
    </section>
  );
}
