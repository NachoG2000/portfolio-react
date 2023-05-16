import React from 'react'

export default function Contact() {
  return (
    <section className='flex md:flex-row flex-col justify-center pb-6 sm:pb-16 sm:px-16 px-6 bg-[#E5E0DE]'>
        <div className='className="flex flex-col md:flex-row md:justify-around justify-center bg-white rounded-lg md:mt-0 mt-10'>
            <div className='flex items-center justify-start flex-col md:mt-16 mt-6'>
                {/* <h2 className='font-poppins font-semibold text-center ss:text-[52px] text-[32px] text-black ss:leading-[50px] leading-[40px] pt-10 sm:px-16 px-6 '>
                    Get in Touch
                </h2> */}
                <p className='pt-10 lg:w-[60%] mx-[5%] md:mx-[10%] font-poppins font-normal text-center ss:text-[20px] text-[16px] text-black ss:leading-[24px] leading-[20px]'>
                    I'm always looking for new challenges and ways to grow as a developer. 
                    If you have a project in mind or just want to connect, 
                    don't hesitate to reach out.
                </p>
                <button className="bg-[#E5E0DE] border-2 border-[#322D2B] hover:bg-[#322D2B] text-[#322D2B] hover:text-white font-bold py-3 px-6 rounded-full sm:text-lg lg:text-xl mx-2 mt-6">
                        Get in touch
                    </button>
            </div>
            <div className='flex justify-center items-center align-center text-center'>
                <img src='src/assets/contact.png'
                className=''>
            
            </img>
            </div>
        </div>
    </section>
  )
}
