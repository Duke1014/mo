// import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Footer from "./components/Footer"
import Nav from "./components/Nav"
import Home from "./pages/Home"
import Gallery from './pages/Gallery'

function App() {
  return (
    <Router>
      <Nav />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App