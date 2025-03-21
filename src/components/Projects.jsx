import React from 'react';
import { projects } from '../constants';
import ProjectCard from './ProjectCard';
import ProjectsFilterButton from './ProjectsFilterButton';

import { useState } from 'react';

const Projects = () => {

  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
    
  };

  const filteredProjects = projects.filter((project) =>(
    project.tag.includes(tag)
  ));

  return (
    
    <div className=' pb-4 mb-20 lg:mb-28'>
        {/*<h2 className='my-10 text-center text-4xl'>Projects</h2>*/}
        <h2 className='my-20 text-center text-sky-400 text-4xl'>My 
            <span className='text-white ml-2'>
                Projects
            </span>
        </h2>

        <div className='text-white flex flex-row justify-center items-center gap-2 py-6 mb-6'>
          <ProjectsFilterButton onClick={handleTagChange} name = "All" isSelected={tag ==="All"} />
          <ProjectsFilterButton onClick={handleTagChange} name = "Frontend" isSelected={tag ==="Frontend"} />
          <ProjectsFilterButton onClick={handleTagChange} name = "Backend" isSelected={tag ==="Backend"} />
          <ProjectsFilterButton onClick={handleTagChange} name = "Fullstack" isSelected={tag ==="Fullstack"} />
        </div>
        <div className="flex flex-wrap">
        {filteredProjects.map((proj, index) => (
          <div key = {index}  className='w-full lg:w-1/3'>

            <div key = {index} className='flex flex-row items-center text-center lg:items-start'>
                
                   <ProjectCard key = {proj.id} imgUrl={proj.image} title={proj.title} description={proj.description} gitUrl={proj.gitUrl} liveWebUrl={proj.liveWebUrl}/>
                
            </div>
          </div>))}
        </div>
    </div>
  )
}

export default Projects