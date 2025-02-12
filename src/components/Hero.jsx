import React from 'react';
import { introduction_Text } from '../constants';
import profilePic from "../assets/myPic-removebg-preview.png";
import { motion } from 'motion/react';

const container = ( delay) => ({
    hidden: {x: -100, opacity: 0},
    visible: {
        x: 0,
        opacity: 1,
        transition: {duration: 0.5, delay: delay}
    },
})

const Hero = () => {
  return (
    <div className='mb-20 pb-10 lg:mb-24 '>
        <div className="flex flex-wrap">
            <div className='w-full lg:w-1/2'>
                <div className="flex flex-col items-center text-center lg:items-start">

                    <motion.h1 
                        variants={container(1)}
                        initial = "hidden"
                        animate = "visible"
                        className='pb-16 text-5xl tracking-tight lg:mt-16 lg:text-6xl text-sky-400'>
                            Letlhogonolo Rakgantsho
                    </motion.h1>

                    <motion.span 
                        variants={container(1.5)}
                        initial = "hidden"
                        animate = "visible"
                        className='bg-gradient-to-r from-sky-400 via-sky-500 to-white bg-clip-text text-3xl tracking-tight text-transparent'>
                        Software Engineer
                    </motion.span>
                    <motion.p 
                        variants={container(2)}
                        initial = "hidden"
                        animate = "visible"
                        className=' my-1 max-w-xl py-6 font-light tracking-tighter'>

                        {introduction_Text}
                    </motion.p>
                    <motion.div 
                        variants={container(2)}
                        initial = "hidden"
                        animate = "visible"
                        className='mb-10'>
                        <button className='px-6 py-3 rounded-full w-full lg:w-40 mr-4  bg-sky-400 hover:bg-transparent hover:text-sky-400 text-white border-2 border-sky-400 mt-3 font-bold '>Hire Me</button>
                        <button className='px-6 py-3 rounded-full w-full lg:w-40 bg-sky-400 hover:bg-transparent hover:text-sky-400 text-white border-2 border-sky-400 mt-3 font-bold'>Download CV</button>
                    </motion.div>
                </div>
            </div>
            
            <div className='w-full lg:w-1/2 lg:p-8'>
                <div className='flex justify-center lg:ml-24'>
                    <motion.div 
                    initial = {{x: 100, opacity: 0}}
                    animate = {{x:0, opacity: 1}}
                    transition = {{duration: 1, delay: 1}}
                    className='rounded-full bg-transparent border-2 border-sky-400 lg:w-[510px] lg:h-[500px] w-[360px] h-[350px] relative'>
                        <motion.img 
                        initial = {{x: 100, opacity: 0}}
                        animate = {{x:0, opacity: 1}}
                        transition = {{duration: 1, delay: 2}}
                        src={profilePic}  alt="Letlhogonolo's Picture" className='absolute transform -translate-x-1/2 -translate-y-1/2 ml-20 lg:ml-24  w-[200px] lg:w-[300px]'/>
                    </motion.div>
                </div>

            </div>
            
        </div>
    </div>
  )
}

export default Hero