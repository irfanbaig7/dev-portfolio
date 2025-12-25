import React from 'react'
import Navbar from "../src/components/Navbar.jsx"
import Home from "../src/sections/Home.jsx"
import About from "../src/sections/About.jsx"
import Skills from "../src/sections/Skills.jsx"
import Projects from "../src/sections/Projects.jsx"
import Expreiense from "../src/sections/Experience.jsx"
import Testimonials from "../src/sections/Testimonials.jsx"
import Contact from "../src/sections/Contact.jsx"
import Footer from "../src/sections/Footer.jsx"
import ParticlesBackground from './components/ParticlesBackground.jsx'


const App = () => {
  return (
    <div className='relative gradient text-white'>

      <ParticlesBackground />
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Expreiense />
      <Testimonials />
      <Contact />
      <Footer />

    </div>
  )
}

export default App