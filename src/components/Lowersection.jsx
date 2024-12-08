import React from "react";
import { Link } from "react-router-dom";

const Lowersection = () => {
  return (
    <div>
      <div className="lg:h-20 bg-blue-600 lg:flex justify-around items-center mt-20">
        <p className="text-3xl font-medium text-white">
          Get Started with Money Capital today
        </p>
       <Link to='/contact'> <button className="mt-2 mb-2 lg:mb-0 lg:mt-0 w-36 rounded-xl bg-yellow-500 h-10  text-black text-lg font-medium">
          Get Started
        </button></Link>
      </div>
        <div className="relative mt-10">
          <img className="lg:h-[500px] w-full" src="./images/flag.jpg" alt="" />
          <div className="absolute top-10 lg:top-28 lg:left-80">
            <p className="text-white text-3xl lg:text-5xl font-bold">Get a better</p>
            <p className="text-white text-3xl lg:text-5xl font-bold">loan with <span className="text-orange-600 font-extrabold">Money Capital</span></p>
          <Link to='/contact'> <button className="w-36 rounded-xl bg-yellow-500 h-10 mt-5  text-black text-lg font-medium">
              Get Started
            </button></Link> 
          </div>
        </div>
      
    </div>
  );
};

export default Lowersection;
