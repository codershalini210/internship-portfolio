import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes ,Route, Link} from 'react-router-dom'
import Footer from './componenets/Footer'
import Home from './componenets/Home'
import Projects from './componenets/Projects'
import Skills from './componenets/Skills'
import Resume from './componenets/Resume'
import Navbar from './componenets/Navbar'

function App() {
  return (
    <>


<div className='h-10 bg-black text-white'>
    <Navbar></Navbar>
</div>
      <div className='h-[80dvh] bg-amber-300 text-9xl'>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path='/Projects' element={<Projects></Projects>}></Route>
      <Route path='/Skills' element={<Skills></Skills>}></Route>
      <Route path="/Resume" element = {<Resume></Resume>}></Route>
</Routes>
      </div>
    
<Footer></Footer>
    </>
  )
}

export default App
