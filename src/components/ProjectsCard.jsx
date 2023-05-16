import React from 'react'

export default function ProjectsCard(props) {
  console.log(props);
  return (
    <div className={`flex items-center justify-center cursor-pointer`}>
      {
        props.img 
        ?
        <div className='group relative'>
          <img src={props.img} alt="Project" className='border-[2px] rounded-xl border-[#322D2B]'/>
          <a href={props.url} target="_blank" class="absolute inset-0 bg-gray-800 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"> </a>
        </div>
        :
        <h3 className='md:flex hidden border-[#322D2B] text-2xl font-bold text-[#322D2B]'>Coming soon...</h3>
      }
    </div>
  )
}
