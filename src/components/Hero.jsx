import React from 'react';
import { introduction_Text } from '../constants';
import profilePic from "../assets/image.png";
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
    <div className='mb-20 pb-4 lg:mb-40'>
        <div className="flex flex-wrap">
            <div className='w-full lg:w-1/2'>
                <div className="flex flex-col items-center lg:items-start">

                    <motion.h1 
                        variants={container(1)}
                        initial = "hidden"
                        animate = "visible"
                        className='pb-16 text-5xl tracking-tight lg:mt-16 lg:text-6xl'>
                            Letlhogonolo Rakgantsho
                    </motion.h1>

                    <motion.span 
                        variants={container(1.5)}
                        initial = "hidden"
                        animate = "visible"
                        className='bg-gradient-to-r from-sky-400 via-cyan-500 to-pink-600 bg-clip-text text-3xl tracking-tight text-transparent'>
                        Software Engineer
                    </motion.span>
                    <motion.p 
                        variants={container(2)}
                        initial = "hidden"
                        animate = "visible"
                        className=' my-1 max-w-xl py-6 font-light tracking-tighter'>

                        {introduction_Text}
                    </motion.p>
                </div>
            </div>
            
            <div className='w-full lg:w-1/2 lg:p-8'>
                <div className='flex justify-center'>
                    <motion.img 
                        initial = {{x: 100, opacity: 0}}
                        animate = {{x:0, opacity: 1}}
                        transition = {{duration: 1, delay: 2}}
                        src={profilePic} width={420} alt="Letlhogonolo's Picture" className='rounded-xl bg-black lg:mt-16'/>
                </div>

            </div>
            
        </div>
    </div>
  )
}

export default Hero