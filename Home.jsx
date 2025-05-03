import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "tailwindcss";
import { Route, Routes } from 'react-router-dom'

function App() {
    const Sumbithandler = (e)=>{
    e.preventDefault()
    console.log(use)
    setUsename('')
  }
  const [usename, setUsename] = useState( )
    const [a, setA] = useState(0)

  const changea = ()=>{
    setA(a + 1)
  }
  
  const deca = ()=>{
    setA(a - 1)
  }
  const use = usename
return(
<>
   <form onSubmit={(e)=>{Sumbithandler(e)}}> 
     <input type="text" className='form' placeholder='Write Todays Task'  value={usename} onChange={(e)=>{
     setUsename(e.target.value)      
    }}/>
    <button onClick={changea}>Sumbit</button>

        <h1 className='Counter'>Total Tasks : {a}</h1>
      

   </form>
</>
)
}

export default App
