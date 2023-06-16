import React from 'react'

export default function ProjectsCard(props) {
  return (
    <div className={`rounded-lg p-2`}>
      <a href={props.url} target="_blank" className="bg-gray-800 bg-opacity-50 group-hover:opacity-100 transition-opacity duration-300 rounded-xl">
        <img src={props.img} alt="flag" className='rounded-t-lg min-[672px]:h-[50%] w-full' />
        <div className='p-4 flex flex-col bg-white rounded-b-lg sm:h-[280px] lg:h-[250px]'>
          <h2 className='font-bold text-3xl md:text-xl mb-2 object-contain'>{props.title}</h2>
          <h4>{props.description}</h4>
        </div>
      </a>
    </div>
  )
}
