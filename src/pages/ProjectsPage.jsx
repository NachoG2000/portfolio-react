import React, {useEffect} from 'react'

import ProjectsCard from '../components/ProjectsCard'
import countries from '../assets/countries.png'

function ProjectsPage(props) {
  const projectsElements = props.projectsArray.map(project =>         
  <ProjectsCard 
    key={project.title}
    title={project.title}
    url={project.url}
    img={project.img}
    description={project.description}
  />) 

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='w-full min-h-screen bg-[#E5E0DE]'>
      <h1 className='font-poppins font-semibold ss:text-[52px] text-[32px] text-black ss:leading-[50px] leading-[40px] mx-[5%] md:mx-[10%] mb-10'>Projects:</h1>
      <div className='items-center mx-[5%] md:mx-[10%] grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3'>
        {projectsElements}
      </div>
    </div>
  )
}

export default ProjectsPage