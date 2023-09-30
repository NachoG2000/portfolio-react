import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import Menu from './Menu'
import menu from "../assets/menu.svg"

export default function Navbar(props) {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616"
}

  return (
    // ${toggle ?"" : "h-[300px]"}
    <nav className= {`w-full pl-0 pr-5 sm:px-5 flex justify-between items-center bg-[#E5E0DE]`} > 

      <div className='flex items-center font-poppins font-semibold h-[100px]'>
        {/* <img src="src/assets/logo2.png" alt='logo' className='h-[100px] w-[100px] '/> */}
      </div>
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        <NavLink to="/" className="text-[#4E4A49] hover:text-[#212121] mr-4 font-poppins font-normal cursor-pointer text-[16px] hover:underline" style={({isActive}) => isActive ? activeStyles : null}>
        Home
        </NavLink>
        <NavLink to="/projects" className="text-[#4E4A49] hover:text-[#212121] mr-4 font-poppins font-normal cursor-pointer text-[16px] hover:underline" style={({isActive}) => isActive ? activeStyles : null}>
        Projects
        </NavLink>
        <Link to="https://drive.google.com/file/d/1iWX8G99zlmSxWnzyks-4USGk0IaOYBCT/view" target="_blank" className="text-[#4E4A49] hover:text-[#212121] mr-4 font-poppins font-normal cursor-pointer text-[16px] hover:underline">
        Resume
        </Link>
      </ul>
      <Menu isMenuDisplayed={props.isMenuDisplayed} toggleMenu={props.toggleMenu}/>
      <div className='sm:hidden flex flex-1 justify-end items-center h-[100px]'>
        <img src={menu} onClick={props.toggleMenu} className="w-[28px] h-[28px] object-contain cursor-pointer"></img>

      </div>
      
    </nav>
  )
}
