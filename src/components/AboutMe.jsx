import React from 'react';
import myImg from "../assets/about_Me_Bg.jpg";
import { about_me } from '../constants';

import { motion } from 'motion/react';

const AboutMe = () => {
  return (
    <div className='w-full h-screen'>
        

        <div className="flex flex-wrap">
            <motion.div 
                whileInView={{opacity: 1, x: 0}}
                initial = {{opacity: 0, x: -100}}
                transition={{duration: 1}}
                className='lg:h-screen w-full lg:w-1/3'
            >
                <div className="lg:h-full flex items-center justify-center bg-darkMode">
                    <img src={myImg} alt="Letlhogonolo's Picture" className=' h-full '/>
                </div>
            </motion.div>

            <motion.div 
                whileInView={{opacity: 1, x: 0}}
                initial = {{opacity: 0, x: 100}}
                transition={{duration: 1}}
                className="lg:h-screen w-full lg:w-2/3"
            >
                
                <div className="flex flex-col items-center justify-center text-center bg-white lg:h-full">
                    <h2 className='text-4xl text-black'>About 
                        <span className='text-skylight ml-2'>
                            Me
                        </span>
                    </h2>
                    <p className='text-xl font-semibold my-2 max-w-xl mt-10 text-darkMode'>{about_me}</p>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default AboutMe