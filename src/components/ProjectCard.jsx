import React from 'react'
import { RiCodeSSlashFill, RiEyeFill } from 'react-icons/ri';
import { Link } from 'react-router';
import { FaEye, FaGithub} from 'react-icons/fa';
import { FaCode } from 'react-icons/fa6';
import { FiGlobe } from "react-icons/fi";
import { HiOutlineGlobeAlt } from "react-icons/hi2";
import Tooltip from './Tooltip';

const ProjectCard = ({imgUrl, title, description, gitUrl, liveWebUrl, tech}) => {
  return (
    
    <div className='mb-8 lg:mr-4'>
        <div className='h-52 md:h-72 relative group border-2 border-sky-400 m-1' style={{background: `url(${imgUrl})`, backgroundSize: "cover"}}>
            <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full
            bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 
            transition-all duration-500"
        >
            {/* GitHub Button */}
            <a
                href={gitUrl}
                target="_blank"
                className="relative h-14 w-14 mr-8 border-2 rounded-full border-[#ADB7BE] 
                hover:border-sky-400 group/link"
            >
                <FaGithub
                    className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 
                    transform -translate-x-1/2 -translate-y-1/2 cursor-pointer 
                    group-hover/link:text-sky-400"
                />
        
                {/* Tooltip */}
                <span
                    className="absolute left-1/2 -bottom-10 -translate-x-1/2 whitespace-nowrap 
                    bg-gray-800 text-white text-sm px-3 py-1 rounded opacity-0 
                    group-hover/link:opacity-100 group-hover/link:-bottom-14 
                    transition-all duration-300"
                >
                    View Code
                </span>
            </a>
        
            <a
                href={liveWebUrl}
                target="_blank"
                className="relative h-14 w-14 border-2 rounded-full border-[#ADB7BE] 
                hover:border-sky-400 group/link"
            >
                <HiOutlineGlobeAlt
                    className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 
                    transform -translate-x-1/2 -translate-y-1/2 cursor-pointer 
                    group-hover/link:text-sky-400"
                />
        
                {/* Tooltip */}
                <span
                    className="absolute left-1/2 -bottom-10 -translate-x-1/2 whitespace-nowrap 
                    bg-gray-800 text-white text-sm px-3 py-1 rounded opacity-0 
                    group-hover/link:opacity-100 group-hover/link:-bottom-14 
                    transition-all duration-300"
                >
                    View Live
                </span>
            </a>
        </div>
        </div>
        <div className="text-white rounded-b-xl bg-black py-6 text-start">
            <h5 className='font-xl font-semibold mb-2'>{title}</h5>
            <p className='text-white mt-2'>{description}</p>
            {/*<ul>
                {tech.map((ts, index) => (
                    <li className='text-white mt-2' key={index}>{ts}</li>
                ))}
            </ul>*/}
        </div>
    </div>


  )
}

export default ProjectCard