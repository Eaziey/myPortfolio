import React from 'react';
import myImg from "../assets/image.png";
import { about_me } from '../constants';

import { motion } from 'motion/react';

const AboutMe = () => {
  return (
    <div className='border border-black pb-4 lg:mb-32 mb-20 px-6 bg-gradient-to-r from-sky-400 via-gray-800 to-black'>
        <h2 className='my-20 text-center text-4xl'>About 
            <span className='text-black ml-2'>
                Me
            </span>
        </h2>

        <div className="flex flex-wrap">
            <motion.div 
                whileInView={{opacity: 1, x: 0}}
                initial = {{opacity: 0, x: -100}}
                transition={{duration: 1}}
                className='w-full lg:w-1/2 lg:p-5'
            >
                <div className="flex items-center justify-center">
                    <img src={myImg} width={350} alt="Letlhogonolo's Picture" className='rounded-xl lg:my-2'/>
                </div>
            </motion.div>

            <motion.div 
                whileInView={{opacity: 1, x: 0}}
                initial = {{opacity: 0, x: 100}}
                transition={{duration: 1}}
                className="w-full lg:w-1/2"
            >
                <div className="flex justify-center lg:justify-start">
                    <p className='my-2 max-w-xl py-6 mt-10'>{about_me}</p>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default AboutMe