import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import SearchFilter from './Components/SearchFilter'
import CountryItems from './Components/CountryItems'
import {Routes, Route} from 'react-router-dom'
import Countrydetails from './Components/Countrydetails'
import Home from './Components/Home'

function App() {

  return (
    <div className=' bg-[#FAFAFA] w-100 min-h-screen dark:bg-[#202C36]'> 
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/:ccn3' element={<Countrydetails />}/>
    </Routes>
      {/* <Header /> */}
      
      
      {/* <Countrydetails/> */}
    </div>
  )
}

export default App
