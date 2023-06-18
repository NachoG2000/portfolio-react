import React from 'react'
import cartoon from '../assets/cartoon2.png'

export default function Hero() {
  return (
    <section className='flex md:flex-row flex-col bg-[#E5E0DE]'>
        <div className='flex flex-1 flex-col justify-center items-start py-0 md:py-16 sm:px-16 px-6'>
            <h1 className='font-poppins font-semibold ss:text-[72px] text-[46px] text-[#322D2B] ss:leading-[65px] leading-[45px]'>
                IGNACIO GARCIA
            </h1>
            <h4 className='mt-3 font-poppins font-semibold ss:text-[52px] text-[32px] text-[#4E4A49] ss:leading-[45px] leading-[35px]'>
                React Developer & Software Engineering Student
            </h4>
            <p className='mt-3 font-poppins font-normal ss:text-[16px] text-[12px] text-[#4E4A49] ss:leading-[20px] leading-[16px]'>
                Welcome to my portfolio! I am a junior react developer and software engineering student 
                with a passion for creating innovative solutions. 
            </p>
            <p className='font-poppins font-normal ss:text-[16px] text-[12px] text-[#4E4A49] ss:leading-[20px] leading-[16px]'>
                Explore my projects and get in touch to learn more.
            </p>
            <div className='flex justify-center pt-5 '>
                <a href="#contact-section" className="bg-[#4E4A49] hover:bg-[#322D2B] text-white font-bold py-2 px-4 rounded-lg sm:text-lg lg:text-xl">
                    Contact me
                </a>
                <a href="#projects-section" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg sm:text-lg lg:text-xl mx-2">
                    Projects
                </a>
            </div>
        </div>
        
        <div className='flex-1 flex justify-center items-center md:my-0  relative sm:px-20 px-0'>
            <img src={cartoon}
            className='lg:w-[100%]'></img>
        </div>
        
    </section>
  )
}
