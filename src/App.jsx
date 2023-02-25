import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Index from './components/Index'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Index/>
    </>
  )
}

export default App
