import React from 'react'
import Menu from './Menu'

export default function Navbar(props) {
  return (
    // ${toggle ?"" : "h-[300px]"}
    <nav className= {`w-full pl-0 pr-5 sm:px-5 flex justify-between items-center bg-[#E5E0DE]`} > 

      <div className='flex items-center font-poppins font-semibold h-[100px]'>
        {/* <img src="src/assets/logo2.png" alt='logo' className='h-[100px] w-[100px] '/> */}
      </div>
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        <a href="#" className="text-[#4E4A49] hover:text-[#212121] mr-4 font-poppins font-normal cursor-pointer text-[16px] hover:underline">
        Home
        </a>
        <a href="#about-section" className="text-[#4E4A49] hover:text-[#212121] mr-4 font-poppins font-normal cursor-pointer text-[16px] hover:underline">
        About Me
        </a>
        <a href="#projects-section" className="text-[#4E4A49] hover:text-[#212121] mr-4 font-poppins font-normal cursor-pointer text-[16px] hover:underline">
        Projects
        </a>
        <a href="https://drive.google.com/file/d/1kObCwN8n-FW3A8T5ADE1cJX1ibEhBleK/view?usp=sharing" target="_blank" className="text-[#4E4A49] hover:text-[#212121] mr-4 font-poppins font-normal cursor-pointer text-[16px] hover:underline">
        Resume
        </a>
        <a href="#contact-section" className="text-[#4E4A49] hover:text-[#212121] mr-4 font-poppins font-normal cursor-pointer text-[16px] hover:underline">
        Contact
        </a>
      </ul>
      <Menu isMenuDisplayed={props.isMenuDisplayed} toggleMenu={props.toggleMenu}/>
      <div className='sm:hidden flex flex-1 justify-end items-center h-[100px]'>
        <img src="src/assets/menu.svg" onClick={props.toggleMenu} className="w-[28px] h-[28px] object-contain cursor-pointer"></img>

      </div>
      
    </nav>
  )
}


{/* <div className={`${!toggle ? "hidden" : "flex"} p-6 absolute w-full top-20 right-0  my-2 min-w-[140px] bg-[#E5E0DE] shadow-lg `} >

<ul className='list-none flex flex-col justify-end items-end flex-1'>

  <li href="#" className="text-black-300 mr-4 font-poppins font-normal cursor-pointer text-[16px] my-1">
  Home Page
  </li>
  <li href="#" className="text-black-300 mr-4 font-poppins font-normal cursor-pointer text-[16px] my-1">
  About Me
  </li>
  <li href="#" className="text-black-300 mr-4 font-poppins font-normal cursor-pointer text-[16px] my-1">
  Skills
  </li>
  <li href="#" className="text-black-300 mr-4 font-poppins font-normal cursor-pointer text-[16px] my-1">
  Projects
  </li>
  <li href="#" className="text-black-300 mr-4 font-poppins font-normal cursor-pointer text-[16px] my-1">
  Contact
  </li>
</ul>
</div> */}