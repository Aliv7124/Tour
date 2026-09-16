import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Intro3D from './components/Intro3D'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Destinations from './pages/Destinations'
import Packages from './pages/Packages'
import Contact from './pages/Contact'

function App() {
  const [showIntro, setShowIntro] = useState(true)

 useEffect(() => {
  const timer = setTimeout(() => {
    setShowIntro(false)
  }, 1500) 
  return () => clearTimeout(timer)
}, [])

  if (showIntro) {
    return <Intro3D onFinish={() => setShowIntro(false)} />
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App