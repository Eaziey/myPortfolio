import React from 'react';
import { projects } from '../constants';
import ProjectCard from './ProjectCard';
import ProjectsFilterButton from './ProjectsFilterButton';

import { useRef, useState } from 'react';
import {motion ,useScroll, useTransform } from 'motion/react';
const Projects = () => {

  const targetRef = useRef(null); 
  const {scrollYProgress} = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0.5%", "-98%"]);

  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
    
  };

  const filteredProjects = projects.filter((project) =>(
    project.tag.includes(tag)
  ));

  return (
    
    <div ref={targetRef} className='relative h-[300vh]'>
      
      <div className='sticky top-0 h-screen items-center overflow-hidden'>
          {/*<h2 className='my-10 text-center text-4xl'>Projects</h2>*/}
         <h2 className='mt-10 mb-5 text-center text-sky-400 text-4xl'>My 
              <span className='text-white ml-2'>
                  Projects
              </span>
          </h2>

          <div className='text-white flex justify-center items-center gap-2 py-6 mb-6'>
            <ProjectsFilterButton onClick={handleTagChange} name = "All" isSelected={tag ==="All"} />
            <ProjectsFilterButton onClick={handleTagChange} name = "Frontend" isSelected={tag ==="Frontend"} />
            <ProjectsFilterButton onClick={handleTagChange} name = "Backend" isSelected={tag ==="Backend"} />
            <ProjectsFilterButton onClick={handleTagChange} name = "Fullstack" isSelected={tag ==="Fullstack"} />
          </div>
          <motion.div 
            className="flex flex-wrap"
            style={{x}}
          >
          {filteredProjects.map((proj, index) => (
            <div key = {index}  className='w-full lg:w-1/3'>

              <div key = {index} className='flex flex-row items-center text-center lg:items-start'>

                     <ProjectCard key = {proj.id} imgUrl={proj.image} title={proj.title} description={proj.description} gitUrl={proj.gitUrl} liveWebUrl={proj.liveWebUrl}/>

              </div>
            </div>))}
          </motion.div>
      </div>
    </div>
    
  )
}

export default Projects