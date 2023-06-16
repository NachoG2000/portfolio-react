import React from 'react'

import Hero from "../components/Hero.jsx"
import About from "../components/About.jsx"
import Projects from "../components/Projects.jsx"
import Contact from "../components/Contact.jsx"

function HomePage(props) {
  return (
    <div>
      <Hero /> 
      <About/> 
      <Projects projectsArray={props.projectsArray}/>
      <Contact/>
    </div>
  )
}

export default HomePage