import React from 'react'
import contact from '../assets/contact.png'
export default function Contact() {
  return (
    <section id="contact-section" className='flex md:flex-row flex-col justify-center pb-6 sm:pb-16 sm:px-16 px-6 bg-gradient-to-r from-[#322D2B] to-[#4E4A49]'>
        <div className='md:flex-row md:justify-around justify-center bg-white rounded-lg mt-16'>
            <div className='flex items-center justify-start flex-col md:mt-16 mt-6'>
                <p className='pt-10 lg:w-[60%] mx-[5%] md:mx-[10%] font-poppins font-normal text-center ss:text-[20px] text-[16px] text-black ss:leading-[24px] leading-[20px]'>
                    I'm always looking for new challenges and ways to grow as a developer. 
                    If you have a project in mind or just want to connect, 
                    don't hesitate to reach out.
                </p>
                <a href="mailto:ignaciongarcia00@example.com" className="bg-[#4E4A49] hover:bg-[#322D2B] text-white font-bold py-3 px-6 rounded-2xl sm:text-xl lg:text-2xl mx-2 mt-6">
                    Contact me
                </a>
            </div>
            <div className='flex justify-center items-center align-center text-center'>
                <img src={contact}
                className=''>
            
            </img>
            </div>
        </div>
    </section>
  )
}
