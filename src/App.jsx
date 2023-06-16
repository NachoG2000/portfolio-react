import {RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom"

import React from 'react'
import Header from "./components/Header.jsx"
import Hero from "./components/Hero.jsx"
import About from "./components/About.jsx"
import Projects from "./components/Projects.jsx"
import Contact from "./components/Contact.jsx"


export default function App() {

  const [isMenuDisplayed, setIsMenuDisplayed] = React.useState(false)

  function toggleMenu(){
    setIsMenuDisplayed(prevState => !prevState)
  }

  // const router = createBrowserRouter(createRoutesFromElements(
  //     <Route path="/" element={<Layout />}>
  //       <Route index element={<HomePage />}/>
  //       <Route element={<ContactPage />}/>
  //       <Route element={<ProjectsPage />}/>
  //     </Route>
  // )) 

  return (
      <div className={isMenuDisplayed ? "fixed" : ""}>
        <Header isMenuDisplayed={isMenuDisplayed} toggleMenu={toggleMenu}/>
        <Hero /> 
        <About/> 
        <Projects/>
        <Contact/>
      </div>
  )
}
