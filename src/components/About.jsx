import React from 'react'
import Card from "./AboutCard"

export default function About() {
  return (
  
    <section className='flex flex-col sm:pt-0 bg-gradient-to-r from-[#322D2B] to-[#4E4A49] pb-6 xs:pb-16'> 
        <div className='flex items-center justify-center flex-1 flex-col py-6 xs:py-16 sm:px-16 px-6'>
            <h2 className='font-poppins font-semibold text-center ss:text-[52px] text-[32px] text-white ss:leading-[50px] leading-[40px] underline'>
            Welcome to my portfolio!
            </h2>
            <p className='mt-8 font-poppins font-normal text-center lg:w-[60%] ss:text-[16px] text-[12px] text-[#E5E0DE] ss:leading-[20px] leading-[16px]'>
            My name is Ignacio Garcia and I am a junior frontend React developer. 
            While I am still early in my career, I have a strong foundation in software engineering principles 
            and have gained experience in developing custom web applications using React.
            </p>
            <p className='mt-3 font-poppins font-normal text-center lg:w-[60%] ss:text-[16px] text-[12px] text-[#E5E0DE] ss:leading-[20px] leading-[16px]'>
            I am continuously learning and improving my skills, 
            and am eager to take on new challenges and projects. 
            On this website, you'll find a selection of my past projects, 
            as well as my resume and contact information. If you're interested in my work or have any questions, 
            please don't hesitate to get in touch. I am always open to new opportunities to learn and grow as a developer.
            </p>
        </div>

        <div className='flex flex-1 items-center justify-center mx-[5%] md:mx-[10%]'>
            <div className="flex flex-col md:flex-row w-full md:justify-around justify-center bg-white rounded-lg">
                <Card 
                id={1}
                icon="src/assets/check.svg"
                title="Front-End Skills"
                text="I am continuously learning and improving my skills, 
                and am eager to take on new challenges and projects. 
                On this website, you'll find a selection of my past projects, 
                as well as my resume and contact information. If you're interested in my work or have any questions, 
                please don't hesitate to get in touch. I am always open to new opportunities to learn and grow as a developer."
                />
                <hr></hr>
                <Card 
                id={2}
                icon="src/assets/check.svg"
                title="Software Engineering"
                text="I am continuously learning and improving my skills, 
                and am eager to take on new challenges and projects. 
                On this website, you'll find a selection of my past projects, 
                as well as my resume and contact information. If you're interested in my work or have any questions, 
                please don't hesitate to get in touch. I am always open to new opportunities to learn and grow as a developer."
                />
                <hr></hr>
                <Card 
                id={3}
                icon="src/assets/check.svg"
                title="Other interests"
                text="I am continuously learning and improving my skills, 
                and am eager to take on new challenges and projects. 
                On this website, you'll find a selection of my past projects, 
                as well as my resume and contact information. If you're interested in my work or have any questions, 
                please don't hesitate to get in touch. I am always open to new opportunities to learn and grow as a developer."
                />
                
            </div>
        </div>
    </section>
  )
}
