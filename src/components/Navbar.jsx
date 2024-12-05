import React from 'react'
import { MdLocalPhone } from "react-icons/md";

const Navbar = () => {
  return (
    <div className='lg:px-[7vw] flex items-center justify-between py-5 font-medium'>
      <p className='text-4xl text-orange-600'>Money</p> 
      <button className='flex items-center gap-2 bg-green-500 w-28 h-10 p-2 rounded-lg text-white'>
      <MdLocalPhone className='text-xl ' />
        Call Now</button>
    </div>
  )
}

export default Navbar
