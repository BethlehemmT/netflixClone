import React from 'react'
import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'
import { Routes, Route } from 'react-router'
import MoviePage from './pages/MoviePage'



  import { RxFontRoman } from 'react-icons/rx'


const App = () => {
  return (
    <div>
      <Navbar />
      
      <Routes>
        <Route path = {"/"} element = {<Homepage />} />
        <Route path = {"/movie/:id"} element = {<MoviePage />} />
      </Routes>
      

     

    </div>
  )
}

export default App
