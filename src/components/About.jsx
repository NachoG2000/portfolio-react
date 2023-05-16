import React from 'react'
import Card from "./AboutCard"
import check from "../assets/check.svg"

export default function About() {
  return (
  
    <section id="about-section" className='flex flex-col sm:pt-0 bg-gradient-to-r from-[#322D2B] to-[#4E4A49] pb-6 xs:pb-16'> 
        <div className='flex items-center justify-center flex-1 flex-col py-6 xs:py-16 sm:px-16 px-6'>
            <h2 className='font-poppins font-semibold text-center ss:text-[52px] text-[32px] text-white ss:leading-[50px] leading-[40px] underline'>
            Welcome to my portfolio!
            </h2>
            <p className='mt-8 font-poppins font-normal text-center lg:w-[60%] ss:text-[16px] text-[12px] text-[#E5E0DE] ss:leading-[20px] leading-[16px]'>
              My name is Ignacio Garcia and I am a junior frontend React developer. 
              While I am still early in my career, I am continuously learning and improving my skills, 
              and am eager to take on new challenges and projects.
            </p>
            <p className='mt-3 font-poppins font-normal text-center lg:w-[60%] ss:text-[16px] text-[12px] text-[#E5E0DE] ss:leading-[20px] leading-[16px]'>
              These are the three aspects that you need to know to get a better sense of who I am.
            </p>
            
        </div>

        <div className='flex flex-1 items-center justify-center mx-[5%] md:mx-[10%]'>
            <div className="flex flex-col md:flex-row w-full md:justify-around justify-center bg-white rounded-lg">
                <Card 
                id={1}
                icon={check}
                title="Front-End Skills"
                text="As a junior front end developer, I have developed my skills in React, JavaScript and CSS (Tailwind CSS) by working on personal projects. 
                I am looking forward to applying what I have learned to real-world challenges. 
                I am also interested in learning backend development in the future to expand my skill set and create full-stack applications."
                />
                <hr></hr>
                <Card 
                id={2}
                icon={check}
                title="Software Engineering Student"
                text="I have a strong understanding of Software Engineering principles, such as Object-Oriented Programming (Java), Algorithms, and Data Structures.
                I am interested in learning more about Software Engineering methodologies and tools in the future to improve my software development process."
                />
                <hr></hr>
                <Card 
                id={3}
                icon={check}
                title="Other interests"
                text="I also have other interests that motivate me to learn and create. One of them is AI advancements and news, 
                which I follow to keep up with the latest trends and innovations in the field because I want to use AI tools to enhance my development abilities.
                Another interest of mine is game development, which I have explored by making some 2D games in Unity."
                />
                
            </div>
        </div>
    </section>
  )
}
