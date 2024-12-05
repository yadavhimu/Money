import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Applynow from './pages/Applynow'
import Contactus from './pages/Contactus'
import Upload from './pages/Upload'
import Aboutus from './pages/Aboutus'

const App = () => {
  return (
    <div className=''>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/applynow' element={<Applynow/>} />
        <Route path='/contactus' element={<Contactus/>} />
        <Route path='/upload' element={<Upload/>} />
        <Route path='/aboutus' element={<Aboutus/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
