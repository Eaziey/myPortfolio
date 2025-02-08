import React from 'react'
import { RiCodeSSlashFill, RiEyeFill } from 'react-icons/ri';
import { Link } from 'react-router';
import { FaEye, } from 'react-icons/fa';
import { FaCode } from 'react-icons/fa6';

const ProjectCard = ({imgUrl, title, description, gitUrl, liveWebUrl}) => {
  return (
    
    <div className='mb-8 lg:mr-4 border-2 border-black rounded-xl'>
        <div className='h-52 md:h-72 rounded-t-xl relative group' style={{background: `url(${imgUrl})`, backgroundSize: "cover"}}>
            <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 group-hover:rounded-t-xl transition-all duration-500">
                <a href= {gitUrl} className='h-14 w-14 mr-8 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link'>
                    <FaCode className='h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white'/>
                </a>

                <a href= {liveWebUrl} className='h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link'>
                    <FaEye className='h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white'/>
                </a>
            </div>
        </div>
        <div className="text-white rounded-b-xl bg-black py-6 px-4">
            <h5 className='font-xl font-semibold mb-2'>{title}</h5>
            <p className='text-white mt-2'>{description}</p>
        </div>
    </div>


  )
}

export default ProjectCard