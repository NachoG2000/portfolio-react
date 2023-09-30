import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import close from "../assets/close.svg"
function Menu(props) {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616"
  }

  return (
    <>
        <div className={`absolute ${!props.isMenuDisplayed ? "hidden" : "flex flex-col"} bg-black bg-opacity-70 w-full top-0 left-0 bottom-[-200px] z-9`}
             onClick={props.toggleMenu}
        > 
        </div>
        <div className={`absolute ${!props.isMenuDisplayed ? "hidden" : "flex flex-col"} bg-white w-[70%] top-0 right-0 bottom-0 z-10 overflow-hidden`}> 
          <div className='flex justify-end'>
            <img src={close} onClick={props.toggleMenu} className="w-[28px] h-[28px] mx-5 mt-9 object-contain cursor-pointer"></img>
          </div>
          <ul className='flex flex-col list-none ml-2'>
            <NavLink to="/" className="m-2 font-semibold text-[#6B6B6B] hover:text-[#212121] cursor-pointer" style={({isActive}) => isActive ? activeStyles : null} onClick={props.toggleMenu}> Home </NavLink>
            <NavLink to="/projects" className="m-2 font-semibold text-[#6B6B6B] hover:text-[#212121] cursor-pointer" style={({isActive}) => isActive ? activeStyles : null} onClick={props.toggleMenu}> Projects </NavLink>
            <Link to="https://drive.google.com/file/d/1iWX8G99zlmSxWnzyks-4USGk0IaOYBCT/view" target="_blank" className="m-2 font-semibold text-[#6B6B6B] hover:text-[#212121] cursor-pointer"> Resume </Link>
          </ul>
        </div>
    </>
  )
}

export default Menu