import React from "react";
import {Link} from 'react-router-dom'
const Hero = () => {
  return (
    <div>
      <div className="relative">
        <img
          className="w-full h-[700px] opacity-95"
          src="./images/Background.jpeg"
          alt=""
        />
        <div className="absolute top-0 lg:top-32 lg:left-60  ">
          <p className="lg:text-4xl font-bold text-white">
            Personal & Bussiness Loans
          </p>
          <p className="lg:text-4xl font-bold text-white">
            Starting from $2.5k & $25k
          </p>
          <p className="lg:text-xl mt-5 text-white">
            Our Superfast Process makes this your BEST Loan Option.
          </p>

          <div className="mt-10 text-white w-full  ">
            <form>
              <div className="">
                <p className="mb-2 text-lg">Selected Loan</p>
                <select
                  name="Position"
                  className="w-full h-10 border-2 border-gray-500 text-gray-700"
                >
                  <option value="Position">Select Loan Type</option>
                  <option>Unsecured Personal Loan</option>
                  <option>Unsecured Business Loan</option>
                </select>
              </div>
              <div>
                <p className="mt-5 text-lg mb-2">Phone</p>
                <input
                  type="number"
                  className="w-[100%] h-10 border-2 border-gray-500 text-gray-700"
                  placeholder="Number"
                  name="number"
                  required
                />
              </div>
              <div>
                <p className="mt-5 text-lg mb-2">Email</p>
                <input
                  type="email"
                  className="w-[100%] h-10 border-2 border-gray-500 text-gray-700"
                  placeholder="Email"
                  name="email"
                  required
                />

                <Link to="/contact"><button className="w-36 rounded-xl bg-yellow-500 h-10 mt-5 text-black text-lg font-medium">
                  Get Started
                </button></Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
