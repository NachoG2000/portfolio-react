import React from 'react'
import Navbar from "./components/Navbar.jsx"
import Hero from "./components/Hero.jsx"
import About from "./components/About.jsx"
import Projects from "./components/Projects.jsx"
import Contact from "./components/Contact.jsx"


export default function App() {

  const [isMenuDisplayed, setIsMenuDisplayed] = React.useState(false)

  function toggleMenu(){
    setIsMenuDisplayed(prevState => !prevState)
  }

  return (
      <div className={isMenuDisplayed ? "fixed" : ""}>
        <Navbar isMenuDisplayed={isMenuDisplayed} toggleMenu={toggleMenu}/>
        <Hero /> 
        <About/> 
        <Projects/>
        <Contact/>
      </div>
  )
}
