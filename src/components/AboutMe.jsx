import React, {useState} from 'react';
import myImg from "../assets/about_Me_Bg.jpg";
import { about_me } from '../constants';

import { motion } from 'motion/react';
import Experience from './Experience';




const AboutMe = () => {

    const [viewExperience, setViewExperience] = useState(false);

    const toggleExperience = (e) => {

        e.preventDefault();
        setViewExperience(!viewExperience);
    }
  return (
    <div className='w-full h-screen overflow-hidden'>
        

        <div className="flex flex-wrap pb-2">
            <div 
                
                className='lg:h-screen w-full lg:w-1/3'
            >
                <div className="lg:h-full flex items-center justify-center bg-darkMode">
                    <img src={myImg} alt="Letlhogonolo's Picture" className=' h-full '/>
                </div>
            </div>

            <motion.div 
                whileInView={{opacity: 1, x: 0}}
                initial = {{opacity: 0, x: 100}}
                transition={{duration: 1}}
                className="lg:h-screen w-full lg:w-2/3"
            >
                 
            <div className="flex flex-col items-center justify-center text-center bg-white h-screen">
                <div className=" relative w-full max-w-4xl h-1/2 [perspective:1000px] ">
                
                    <motion.div 
                        className='w-full h-full [transform-style:preserve-3d]'
                        animate = {{rotateY: !viewExperience? 180: 0}}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="absolute inset-0 flex flex-col items-center justify-center [backface-visibility:hidden]">
                            <div className="max-w-2xl text-center"><h2 className="text-4xl text-black">
                              About <span className="text-skylight ml-2">Me</span>
                            </h2>
                            <p className="text-xl font-semibold mt-14 text-darkMode">
                              {about_me}
                            </p></div>
                        </div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
                            <Experience/>
                        
                        </div>
                    </motion.div>
                    
                </div>
                <button onClick={toggleExperience} className='p-4 mt-20 rounded-full w-full lg:w-60 bg-sky-400 hover:bg-transparent hover:text-sky-400 text-white border-2 border-sky-400 font-semibold'>{!viewExperience? 'View My Experience': 'Get to know me'}</button>
                    
            </div>

             

                
            </motion.div>
            
        </div>

        
    </div>
  )
}

export default AboutMe