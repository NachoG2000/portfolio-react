import React from 'react'
import ProjectsCard from "./ProjectsCard"
import { Link } from 'react-router-dom'

export default function Projects(props) {
      const projectsElements = props.projectsArray.map(project =>         
            <ProjectsCard 
              key={project.title}
              title={project.title}
              url={project.url}
              img={project.img}
              description={project.description}
            />).slice(0, 3)

  return (
    <section id="projects-section" className='flex flex-col sm:pt-0 bg-[#E5E0DE] pb-6 xs:pb-16'>
        <h2 className='font-poppins font-semibold text-center ss:text-[52px] text-[32px] text-black ss:leading-[50px] leading-[40px] pt-6 xs:pt-16 sm:px-16 px-6 underline'>
            Recent work
        </h2>
        <p className='mt-4 mb-8 font-poppins font-normal text-center ss:text-[16px] text-[12px] text-black ss:leading-[20px] leading-[16px]'>
            Here are a few past projects I've worked on
        </p>
        <div className='items-center mx-[5%] md:mx-[10%] grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3'>
            {projectsElements}
        </div>
        <div className='flex justify-center rounded-lg'>
            <Link to="projects" className="bg-[#4E4A49] hover:bg-[#322D2B] text-white font-bold py-3 px-6 rounded-2xl sm:text-xl lg:text-2xl mx-2 mt-6">
                  More projects
            </Link>
        </div>
    </section>
  )
}
