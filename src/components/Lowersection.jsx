import React from "react";

const Lowersection = () => {
  return (
    <div>
      <div className="h-20 bg-blue-600 flex justify-around items-center mt-20">
        <p className="text-3xl font-medium text-white">
          Get Started with Money Capital today
        </p>
        <button className="w-36 rounded-xl bg-yellow-500 h-10  text-black text-lg font-medium">
          Get Started
        </button>
      </div>
        <div className="relative mt-10">
          <img className="h-[500px] w-full" src="./images/flag.jpg" alt="" />
          <div className="absolute top-28 left-80">
            <p className="text-white text-5xl font-bold">Get a better</p>
            <p className="text-white text-5xl font-bold">loan with <span className="text-orange-600 font-extrabold">Money Capital</span></p>
            <button className="w-36 rounded-xl bg-yellow-500 h-10 mt-5  text-black text-lg font-medium">
              Get Started
            </button>
          </div>
        </div>
      
    </div>
  );
};

export default Lowersection;
