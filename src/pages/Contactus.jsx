import React from 'react'

const Contactus = () => {
  return (
    <div>
      <div className='bg-black h-20 flex items-center justify-center '>
        <p className='text-4xl font-bold  text-white '>Contact Us</p>
      </div>
      <div className='lg:px-[7vw] flex mt-20'>
        <div className='w-full'>
        <p className='text-4xl text-green-950 flex'>You find us at</p>
        <p className=' text-green-950 mt-20'>EMAIL</p>
        <p className=' text-green-950 text-xl'>info@moneycapital.com</p>
        <p className=' text-green-950 mt-10'>Phone Number</p>
        <p className=' text-green-950 text-xl'>800-390-0950</p>
        <p className=' text-green-950 mt-10'>LOCATION</p>
        <p className=' text-green-950 text-xl'>532 W 53rd St New York, NY,10019,US </p>
        </div>
        <div className='w-full'>
         <p className='text-4xl text-green-950 flex'>Let's get in touch</p>
         <div>
          <form>
          <div>
                <p className="mt-5 text-lg mb-2">Name</p>
                <input
                  type="Text"
                  className="w-[100%] h-10 border-2 border-gray-500 text-gray-700"
                  placeholder=""
                  name="name"
                  required
                />
              </div>
              <div>
                <p className="mt-5 text-lg mb-2">Phone</p>
                <input
                  type="number"
                  className="w-[100%] h-10 border-2 border-gray-500 text-gray-700"
                  placeholder=""
                  name="name"
                  required
                />
              </div>
              <div>
                <p className="mt-5 text-lg mb-2">Email</p>
                <input
                  type="email"
                  className="w-[100%] h-10 border-2 border-gray-500 text-gray-700"
                  placeholder=""
                  name="name"
                  required
                />
              </div>
              <div>
                <p className="mt-5 text-lg mb-2">Message</p>
                <textarea className="w-[100%] h-24 border-2 border-gray-500 text-gray-700"></textarea>
              </div>

              <button className='w-28 h-8 text-lg rounded-lg bg-gray-900 text-white mt-10'>Submit</button>
          </form>
         </div>
        </div>
      </div>
    </div>
  )
}

export default Contactus
