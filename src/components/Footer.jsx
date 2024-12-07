import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className=' bg-black'>
      <div className='lg:px-[7vw] flex justify-around mt-5 lg:h-20 items-center '>
        <div className=''>
            <ul className=' lg:flex text-white  gap-2'>
              <Link to='/'><li>Home</li></Link> 
              <Link to='/contactus'> <li>Contact Us</li></Link>
                <Link to='/applynow'><li>Apply Now</li></Link>
                <Link to='/upload'><li>Upload</li></Link>
                <Link to='/aboutus'><li>About Us</li></Link>
            </ul>
        </div>
        <div>
            <Link to='/'><p className='text-4xl font-bold text-orange-600'>Money</p></Link>
        </div>
      </div>
      <hr className='border-0 lg:border-1 lg:ml-40 w-[80%]'/>
      <div className='bg-black flex lg:mt-0 mt-10'>
        <div className='lg:px-[7vw] p-5'>
          <p className='text-3xl font-medium text-white'>Address</p>
          <p className=' mt-2  text-white'>529 W 53rd St New York, NY, 10019, US</p>
          <p className='  text-white'>800-390-0950</p>
          <p className='  text-white'>info@moneycapital.com</p>
        </div>
        <div className='lg:px-[7vw] p-5'>
         <Link to='/upload'> <p className='text-2xl font-medium text-white'> Upload</p></Link>
        </div>
      </div>
      <hr className='border-b-1 '/>
      <div className='bg-black lg:flex justify-between text-white lg:h-16 px-4 '>
        <div className='mt-5'>
            <p>Copyright © 2020-24 Deltasoftsystem – All Rights Reserved.</p>
        </div>
        <div className='mt-5'>
            <ul className='lg:flex gap-3'>
                <Link to='/question'><li>F&Q</li></Link>
                <Link to='/privacy'><li>Privacy Policy</li></Link>
                <Link to='/term'><li>T&C</li></Link>
                <Link to='/consent'><li>e-Consent</li></Link>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
