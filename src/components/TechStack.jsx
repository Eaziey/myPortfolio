import React from 'react'
import { RiReactjsLine, RiCss3Line, RiHtml5Line, RiJavascriptLine } from 'react-icons/ri'
import { SiMongodb } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';
import { BiLogoPostgresql, BiLogoTailwindCss } from 'react-icons/bi';


const TechStack = () => {
  return (
    <div className='border-b border-t border-neutral-50 lg:mb-40'>
        <h2 className='my-20 text-center text-4xl'>Technologies</h2>

        <div className='flex flex-wrap items-center justify-center gap-4 mb-20'>
            <div className='rounded-2xl border-4 border-neutral-50 p-4'>
                <RiReactjsLine className='text-7xl text-cyan-400'/>

            </div>
            <div className='rounded-2xl border-4 border-neutral-50 p-4'>
                <RiCss3Line className='text-7xl text-white'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-50 p-4'>
                <RiHtml5Line className='text-7xl text-white'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-50 p-4'>
                <RiJavascriptLine className='text-7xl text-black'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-50 p-4'>
                <FaNodeJs className='text-7xl text-green-500'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-50 p-4'>
                <SiMongodb className='text-7xl text-green-500'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-50 p-4'>
                <BiLogoPostgresql className='text-7xl text-blue-600'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-50 p-4'>
                <BiLogoTailwindCss className='text-7xl text-sky-500'/>
            </div>
        </div>
    </div>
  )
}

export default TechStack