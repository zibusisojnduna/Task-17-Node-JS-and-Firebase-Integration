import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Add from "./components/add"
import fileUpload from "./components/fileUpload"

function App() {
  

  return (
  <div>
    <Add/>
    <fileUpload/>
  </div>
   
  )
}

export default App
