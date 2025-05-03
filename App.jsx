import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "tailwindcss";
import { Route, Routes } from 'react-router-dom'
import About from './About.jsx'
import Contact from './Contact.jsx'
import Account from './Account.jsx'
import Header from './header.jsx'
import Home from './Home.jsx'

function App() {


  return (
    <>
       <Header />
   <Routes>
    <Route path='/Home' element={<Home />} />
    <Route path='/Contact' element={<Contact />} />
    <Route path='/Account' element={<Account />} />
    <Route path='./About' element={<About />} />
   </Routes>
    </>
  )
}

export default App
