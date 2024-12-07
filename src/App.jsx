import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Applynow from './pages/Applynow'
import Contactus from './pages/Contactus'
import Upload from './pages/Upload'
import Aboutus from './pages/Aboutus'
import Question from './pages/Question'
import Privacy from './pages/Privacy'
import Term from './pages/Term'
import Consent from './pages/Consent'

const App = () => {
  return (
    <div  className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[1vw]'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/applynow' element={<Applynow/>} />
        <Route path='/contactus' element={<Contactus/>} />
        <Route path='/upload' element={<Upload/>} />
        <Route path='/aboutus' element={<Aboutus/>} />
        <Route path='/question' element={<Question/>} />
        <Route path='/privacy' element={<Privacy/>} />
        <Route path='/term' element={<Term/>} />
        <Route path='/consent' element={<Consent/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
