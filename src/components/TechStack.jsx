import React from 'react'
import { RiReactjsLine, RiCss3Line, RiHtml5Line, RiJavascriptLine } from 'react-icons/ri'
import { SiMongodb } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';
import { BiLogoPostgresql, BiLogoTailwindCss } from 'react-icons/bi';
import Marquee from './Marquee';

const TechStack = () => {
  

  return (

    
     <div className='overflow-x-hidden container mx-auto w-full h-screen'>
      <h2 className='my-20 text-center text-4xl'>Tech
            <span className='text-sky-400 ml-2'>
                Stack
            </span>
        </h2>

      <Marquee/>
    </div>
   
  )
}

export default TechStack