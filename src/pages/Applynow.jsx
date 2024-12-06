import React from 'react'

const Applynow = () => {
  return (
    <div className="lg:px-[7vw]">
      <div className='lg:w-[450px] mt-20'>
        <form>
        <div >
                <p className="mb-2 text-lg font-medium text-gray-600">Do You have Loan Approval ID Number? *</p>
                <select
                  name="Position"
                  className="w-full h-10 border-2 border-gray-500 text-gray-700"
                >
                  <option value="Position">Select</option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
              <div>
                <p className="mt-5 text-lg mb-2 font-medium text-gray-600">Enter your Loan Approval ID Number *</p>
                <p className='text-gray-600 mb-5'> <span className='font-medium'>Note-</span> If we Have sent you an Email then Enter the Loan Approval ID Number</p>
                <input
                  type="text"
                  className="w-[100%] h-10 border-2 border-gray-500 text-gray-700"
                  placeholder=""
                  name="name"
                  required
                />
              </div>
        </form>
        <button className="w-36 rounded-xl bg-yellow-500 h-10 mt-5 text-black text-lg font-medium">
                  Get Started
                </button>
      </div>
    </div>
  )
}

export default Applynow
