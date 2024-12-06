import React from "react";

const Aboutus = () => {
  return (
    <div>
      <div className="relative">
        <img className="lg:h-[400px] w-full" src="./images/group.jpg" alt="" />
        <div className="absolute lg:top-40 lg:left-40">
          <p className="text-5xl text-gray-800">About Us</p>
        </div>
      </div>

      <div className="lg:px-[7vw] flex mt-16">
        <div className="mt-10">
          <img src="./images/laptop.jpg" alt="" />
        </div>
        <div className="p-4 ">
          <p className="flex justify-center text-4xl text-green-800">
            Who We Are
          </p>
          <p className="text-2xl text-gray-700 mt-5">
            We at MoneyNestCapital are direct lenders and at our site, you can
            find complete credit reports & no-cost credit scores which are
            updated daily.
          </p>
          <p className="text-2xl text-gray-700">
            Other than this, we also assist our customers with customized
            credit-improvement recommendations & advice. The best part is that
            we can provide round-the-clock monitoring of your wallet as well as
            individualized saving alerts. Some of the other features that you
            will get on our website are financial reviews on various products &
            businesses.{" "}
          </p>
        </div>
      </div>
      <div className="lg:h-20 bg-blue-600 lg:flex justify-around items-center mt-10">
        <p className="text-3xl font-medium text-white">
          Get Started with Money Capital today
        </p>
        <button className="mt-2 mb-2 lg:mb-0 lg:mt-0 w-36 rounded-xl bg-yellow-500 h-10  text-black text-lg font-medium">
          Get Started
        </button>
      </div>

      <div className="flex w-full bg-blue-900">
        <div className="flex lg:px-[7vw] ">
          <div className="w-full">
            <p className="text-4xl font-bold text-white flex justify-center ">
              Our Mission
            </p>
            <p className="text-xl text-white mt-5">
              We are committed in terms of providing our customers with
              dependable monetary solutions. Further, we at MoneyNestCapital
              have years of experience under our belt with regard to providing
              our customers with several loan options. In some cases, you can
              get cash on the same day itself once you apply for the loan.
            </p>
            <p className="text-xl text-white">
              Also, we truly understand that loan delays can cause many problems
              and hence we disburse the loan application quickly.{" "}
            </p>
            <p className="text-xl text-white">
              Further, you can use the loan to solve any kind of problem and you
              just have to make sure that you pay it on time. Some of the
              services provided by us include unsecured title loans, Unsecured
              Payday loans, unsecured business loans, unsecured installment
              loans, unsecured cash advances, unsecured payday internet loans &
              unsecured personal loans.
            </p>{" "}
            <p className="text-xl text-white">
              {" "}
              So, irrespective of your need, we will try to assist you and
              perhaps help you to be debt free. Besides, it is also recommended
              that you check your credit report regularly and see where you
              stand in the main credit bureaus.
            </p>{" "}
            <p className="text-xl text-white">
              {" "}
              This would arguably help you to get a loan from us. Another USP of
              our organization is that we provide investment advice to our
              customers. For instance, we can provide you with advice about how
              you can save for retirement as well as invest in house.{" "}
            </p>{" "}
            <p className="text-xl text-white">
              Also, we give insurance & stock trading education to our
              customers. Likewise, if you are having a bad credit score, then
              with the help of our valuable information you can improve your
              credit score. Lastly,
            </p>{" "}
            <p className="text-xl text-white flex ">
              {" "}
              we are equipped with a very good customer support team who would
              assist you in all your queries as well as help you out in the loan
              process.{" "}
            </p>
          </div>
          <div>
            <img
              className="w-full h-[700px]"
              src="./images/building.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
