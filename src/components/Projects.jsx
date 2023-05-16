import React from 'react'
import Card from "./ProjectsCard"
import quizzical from "../assets/quizzical-screenshot.png"
import intro from "../assets/intro-screenshot.png"
import tenzies from "../assets/tenzies-screenshot.png"
import tictactoe from "../assets/tictactoe-screenshot.png"

export default function Projects() {
  return (
    <section id="projects-section" className='flex flex-col sm:pt-0 bg-[#E5E0DE] pb-6 xs:pb-16'>
        <h2 className='font-poppins font-semibold text-center ss:text-[52px] text-[32px] text-black ss:leading-[50px] leading-[40px] pt-6 xs:pt-16 sm:px-16 px-6 underline'>
            Recent work
        </h2>
        <p className='mt-4 mb-8 font-poppins font-normal text-center ss:text-[16px] text-[12px] text-black ss:leading-[20px] leading-[16px]'>
            Here are a few past projects I've worked on
        </p>
        <div className='items-center mx-[5%] md:mx-[10%] grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3'>
            <Card img={quizzical}
                  url="https://quizzical-game-rouge.vercel.app/"
            />
            <Card img={intro}
                  url={"https://intro-section-dropdown-seven.vercel.app/"}
            />
            <Card img={tenzies}
                  url="https://tenzies-game-livid.vercel.app/"
            />
            <Card img={tictactoe}
                  url="https://tic-tac-toe-umber-omega.vercel.app/"
            />
            {/* <Card />
            <Card /> */}
        </div>
    </section>
  )
}
