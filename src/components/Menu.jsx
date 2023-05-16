import React from 'react'

function Menu(props) {
  return (
    <>
        <div className={`absolute ${!props.isMenuDisplayed ? "hidden" : "flex flex-col"} bg-black bg-opacity-70 w-full top-0 left-0 bottom-[-200px] z-9`}
             onClick={props.toggleMenu}
        > 
        </div>
        <div className={`absolute ${!props.isMenuDisplayed ? "hidden" : "flex flex-col"} bg-white w-[70%] top-0 right-0 bottom-0 z-10 overflow-hidden`}> 
          <div className='flex justify-end'>
            <img src="src/assets/close.svg" onClick={props.toggleMenu} className="w-[28px] h-[28px] mx-5 mt-9 object-contain cursor-pointer"></img>
          </div>
          <ul className='flex flex-col list-none ml-2'>
            <a href="#" className="m-2 font-semibold text-[#6B6B6B] hover:text-[#212121] cursor-pointer"> Home </a>
            <a href="#" className="m-2 font-semibold text-[#6B6B6B] hover:text-[#212121] cursor-pointer"> About Me </a>
            <a href="#" className="m-2 font-semibold text-[#6B6B6B] hover:text-[#212121] cursor-pointer"> Projects </a>
            <a href="#" className="m-2 font-semibold text-[#6B6B6B] hover:text-[#212121] cursor-pointer"> Resume </a>
            <a href="#" className="m-2 font-semibold text-[#6B6B6B] hover:text-[#212121] cursor-pointer"> Contact </a>
          </ul>
        </div>
    </>
  )
}

export default Menu