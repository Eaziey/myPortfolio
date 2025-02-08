import React from 'react';
import { projects } from '../constants';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    
    <div className='border-b border-neutral-50 pb-4'>
        <h2 className='my-10 text-center text-4xl'>Projects</h2>

        <div className='text-white flex flex-row justify-center items-center gap-2 py-6 mb-6'>
          <button className='rounded-full border-2 border-sky-400 px-6 text-xl cursor-pointer'>All</button>
          <button className='rounded-full border-2 border-slate-600 hover:border-white px-6 text-xl cursor-pointer'>Fullstack</button>
          <button className='rounded-full border-2 border-slate-600 hover:border-white px-6 text-xl cursor-pointer'>Frontend</button>
          <button className='rounded-full border-2 border-slate-600 hover:border-white px-6 text-xl cursor-pointer'>Backend</button>
        </div>
        <div className="flex flex-wrap">
        {projects.map((proj) => (<div className='w-full lg:w-1/3'>

            <div className='flex flex-row items-center text-center lg:items-start'>
                
                   <ProjectCard key = {proj.id} imgUrl={proj.image} title={proj.title} description={proj.description} gitUrl={proj.gitUrl} liveWebUrl={proj.liveWebUrl}/>
                
            </div>
          </div>))}
        </div>
    </div>
  )
}

export default Projects