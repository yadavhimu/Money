import React from "react";
import { Link } from "react-router-dom";

const Midsection = () => {
  return (
    <div className="lg:px-[7vw] mt-20">
      <div className="w-full lg:flex">
        <div className="w-full mt-5 p-2">
          <p className=" lg:flex text-5xl font-medium text-green-600">Money is waiting for you, wherever you are</p>
          <p className="mt-3 text-xl text-gray-600">
            MoneyNestCapital provides you with a form that you can fill out from
            anywhere at your convenience. Also, there are several benefits of
            personal loans. It is highly coveted and thus it can be used to
            cover different kinds of expenses and it is not backed by collateral
            as well.
          </p>
          <p className="mt-3 text-xl text-gray-600">
            Further, personal loans also tend to cost less as compared to
            high-interest credit cards. Thus, a personal loan can be purposely
            used for everything such as funding the next international vacation
            or for remodeling the kitchen.{" "}
          </p>

          <Link to='/contact'><button className="w-36 rounded-xl bg-yellow-500 h-10 mt-5 text-black text-lg font-medium">
            Get Started
          </button></Link>
        </div>
        <div className="w-full">
          <div className="border-2 border-gray-700 shadow-2xl  ">
            <img className="" src="./images/mid.jpg" alt="" />
          </div>
        </div>
      </div>
      <div className="mt-20 lg:px-[7vw]">
       <p className="flex justify-center text-3xl text-green-900 font-medium">Follow Simple Steps and Get Funds</p>
       <p className="lg:flex justify-center text-2xl mt-5  text-green-900 font-medium">Same Day Funding is Possible</p>

       <div>
        <div className="lg:flex justify-between mt-16">
            <div className=" lg:w-[350px] border-2 border-gray-300 shadow-2xl p-2">
                <img src="./images/mid1.jpg" alt="" />
                <p className="text-2xl mt-2 font-medium text-green-900">Step One</p>
                <p className="text-lg mt-2 text-gray-700">Apply for an Unsecured Personal or Business loan</p>
            </div>
            <div className=" lg:w-[350px] border-2 border-gray-300 shadow-2xl p-2">
                <img src="./images/mid1.jpg" alt="" />
                <p className="text-2xl mt-2 font-medium text-green-900">Step Two</p>
                <p  className="text-lg mt-2 text-gray-700">Submit Your Application with the Correct and Current Details Only.</p>
            </div>
            <div className=" lg:w-[350px] border-2 border-gray-300 shadow-2xl p-2">
                <img src="./images/mid1.jpg" alt="" />
                <p className="text-2xl mt-2 font-medium text-green-900">Step Three</p>
                <p  className="text-lg mt-2 text-gray-700">Upon Your Approval You get an email</p>
            </div>
        </div>
       </div>

       <div>
        <div className=" lg:flex justify-between mt-16">
            <div className="lg:w-[350px]  border-2 border-gray-300 shadow-2xl p-2">
                <img src="./images/mid1.jpg" alt="" />
                <p className="text-2xl mt-2 font-medium text-green-900">Step Four</p>
                <p  className="text-lg mt-2 text-gray-700">If You are 100% Approved You will get your funds in your bank account with zero Contact</p>
            </div>
            <div className="lg:w-[350px]  border-2 border-gray-300 shadow-2xl p-2">
                <img src="./images/mid1.jpg" alt="" />
                <p className="text-2xl mt-2 font-medium text-green-900">Step Five</p>
                <p  className="text-lg mt-2 text-gray-700">If You are partially Approved then You will get your funds once your profile matches the FDIC Requirements. To know about the FDIC requirements kindly call us.</p>
            </div>
            <div className="lg:w-[350px] border-2 border-gray-300 shadow-2xl p-2">
                <img src="./images/mid1.jpg" alt="" />
                <p className="text-2xl mt-2 font-medium text-green-900">Step Six</p>
                <p  className="text-lg mt-2 text-gray-700">We will help you match your profile as per the FDIC Requirements and then you will be eligible to get your Funds in no time.</p>
            </div>
        </div>
       </div>
      </div>
    </div>
  );
};

export default Midsection;
