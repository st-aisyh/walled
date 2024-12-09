import { useState } from 'react'
import viteLogo from '/vite.svg'
import bsiLogo from '/images.png'
import './App.css'
import Logo from './components/Logo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-3xl font-bold underline">
          Hello world!
      </h1>
    </>
   )
}

export default App
