import { useState } from 'react'
import Hero from './components/hero';
import Navbar from './components/navbar';
import Aboutme from './components/aboutme';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Hero/>
      <Aboutme/>
    </>
  )
}

export default App
