import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "tailwindcss";
import { Route, Routes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import About from './About.jsx'
import Contact from './Contact.jsx'
import Account from './Account.jsx'
import Header from './header.jsx'
import Home from './Home.jsx'
function App() {
return(
<>
<div>

<nav className='comp'>
 <h1 className='h'>Todo</h1>
 <div className='navcomps'>
    <Link to="/Home" className='navComp'>Home</Link>
    <Link to="/Contact" className='navComp'>Contact</Link>
    <Link to="/About" className='navComp'>About</Link>
   
    </div>
</nav>
</div>

</>
)
}

export default App
