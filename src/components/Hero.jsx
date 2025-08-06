import React from 'react';
import { useState } from 'react';
import { introduction_Text } from '../constants';
import profilePic from "../assets/myPic-removebg-preview.png";
import { motion } from 'motion/react';

import heroCartoonImg from "../assets/Hero_Cartoon.png";
import backGroundImg from "../assets/backgroundImg_Dark.jpg";


const Hero = () => {

    const [textVisible, setTextVisible] = useState(false);

    const textVariants = {
        hidden: {
           opacity: 0,
           y: 20,
           transition: { duration: 0.3 }
         },
         visible: {
           opacity: 1,
           y: 0,
           transition: { duration: 0.3 }
         }
      };

    return (

         <>
            <div className='h-screen w-full flex items-end justify-center relative'>
                <img src={backGroundImg} className='absolute'/>

                <motion.div 
                    className='relative h-3/5 z-10 flex items-center justify-center w-1/2 cursor-pointer'
                    
                    onHoverStart={() => setTextVisible(true)}
                    onHoverEnd={() => setTextVisible(false)}
                >
                    <img 
                        src={heroCartoonImg} 
                        className='h-full  z-10'

                    />



                    <motion.div className="absolute w-full h-full flex items-center justify-between px-10 z-20 pointer-events-none">
                        
                        <motion.div 
                            className="space-y-20 text-white mt-10"
                            variants={textVariants}
                            initial="hidden"
                            animate={textVisible ? "visible" : "hidden"}
                        >
                            <div className="text-xl text-center font-semibold border rounded-full p-2 ml-16">
                                <h3 >Frontend Developer</h3>
                            </div>
                            <div className="text-xl text-center font-semibold border rounded-full p-2 mr-16">
                                <h3 >Backend Developer</h3>
                            </div>
                        </motion.div>

                        <motion.div 
                            className="space-y-20 text-white p-10"
                            variants={textVariants}
                            initial="hidden"
                            animate={textVisible ? "visible" : "hidden"}
                        >
                            <div className="text-xl text-center font-semibold border rounded-full p-2 ml-16">
                                <h3 >Fullstack Developer</h3>
                            </div>
                            <div className="text-xl text-center font-semibold border rounded-full p-2 mr-16">
                                <h3 >Cool Tech Nerd</h3>
                            </div>
                        </motion.div>
                    </motion.div>


                </motion.div>


            </div>
        </>
    
    )
}

export default Hero