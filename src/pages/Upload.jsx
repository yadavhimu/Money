import React from 'react'

const Upload = () => {
  return (
    <div className="lg:px-[7vw]">
      <div className='mt-10'>
        <p className='text-4xl font-medium flex justify-center text-green-700'>Upload Your Document</p>
      </div>
      <div className='lg:w-[450px] mt-10'>
        <form>
        <div>
                <p className="mt-5 text-lg mb-2 font-medium text-gray-600">Full Name 
                </p>
                <input
                  type="text"
                  className="w-[100%] h-10 border-2 border-gray-500 text-gray-700"
                  placeholder=""
                  name="name"
                  required
                />
              </div>
              <div>
                <p className="mt-5 text-lg mb-2 font-medium text-gray-600">Phone
                </p>
                <input
                  type="number"
                  className="w-[100%] h-10 border-2 border-gray-500 text-gray-700"
                  placeholder=""
                  name="name"
                  required
                />
              </div>
              <div>
                <p className="mt-5 text-lg mb-2 font-medium text-gray-600">Email
                </p>
                <input
                  type="email"
                  className="w-[100%] h-10 border-2 border-gray-500 text-gray-700"
                  placeholder=""
                  name="name"
                  required
                />
              </div>
              <div>
                <p className="mt-5 text-lg mb-2 font-medium text-gray-600">Upload Document
                </p>
                <input
                  type="file"
                  className=""
                  placeholder=""
                  name="name"
                  required
                />
              </div>
              <button className='w-28 h-8 text-lg rounded-lg bg-gray-900 text-white mt-10'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Upload
