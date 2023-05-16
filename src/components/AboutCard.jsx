import React from 'react'

export default function AboutCard(props) {
  return (
    <div className={`flex flex-1 flex-col items-center justify-start text-center pt-14 md:pt-20 
                    ${props.id === 3 ? "" : "md:border-r-2"} w-full`}>
        <div className='rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 '>
            <img src={props.icon} className="h-12 p-0">
            </img>
        </div>
        <h5 className='font-poppins font-bold sm:text-lg mt-4 md:mt-10 lg:text-xl text-[#322D2B]'>
            {props.title}
        </h5>
        <p className='my-10 mx-6 sm:mx-[30%] md:mx-[20%] font-poppins font-normal text-center lg:w-[60%] ss:text-[16px] text-[12px] text-black ss:leading-[20px] leading-[16px]'>
            {props.text}
        </p>
    </div>
  )
}
