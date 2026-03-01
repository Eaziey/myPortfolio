import React from 'react';
import { useState } from 'react';
import { introduction_Text } from '../constants';
import profilePic from "../assets/myPic-removebg-preview.png";
import { motion } from 'motion/react';

import heroCartoonImg from "../assets/Hero_Cartoon.png";
import backGroundImg from "../assets/backgroundImg_Dark.jpg";


const Hero = React.forwardRef((props, ref) => {

    const [textVisible, setTextVisible] = useState(false);
    const {scrollToSection, projectsRef} = props; 

    const textVariants = {
        hidden: {
           opacity: 0,
           y: 20,
           transition: { duration: 0.45 }
         },
         visible: {
           opacity: 1,
           y: 0,
           transition: { duration: 0.45 }
         }
    };

    const handleScrollToProjectsRefClick = (e) =>{
        e.preventDefault();
        scrollToSection(projectsRef);
    }

    return (

        <>
            <div ref={ref} id="Home" className='h-screen w-full flex items-end justify-center relative'>
                {/*<img src={backGroundImg} className='absolute inset-0 -z-10 h-full w-full object-cover'/>*/}
                <motion.div 
                    className='relative z-10 h-3/4 flex items-center justify-center w-full cursor-pointer'
                >
                    <motion.div
                      className="absolute  inset-0 -z-10 max-w-full items-center justify-center pointer-events-none px-2"
                      initial={false}
                      animate={textVisible ? 'hover' : 'rest'}
                    >
                      <motion.h1
                        aria-hidden="true"
                        className="
                          font-extrabold uppercase leading-none text-center select-none tracking-tight
                          [font-size:clamp(70px,13.6vw,280px)]
                        "
                        variants={{
                          rest: {
                            color: 'rgba(255,255,255,0.18)',
                            textShadow:
                              '0 0 10px rgba(56,182,255,.35), 0 0 24px rgba(56,182,255,.45), 0 0 64px rgba(56,182,255,.3)',
                            scale: 1.01,
                            transition: { duration: 0.55, ease: 'easeOut' },
                          },
                          hover: {
                            color: 'rgba(255,255,255,0.10)',
                            textShadow: '0px 0px 0px rgba(56,182,255,0)',
                            scale: 1,
                            transition: { duration: 0.55, ease: 'easeOut' },
                          },
                        }}
                        style={{ willChange: 'transform, opacity, text-shadow' }}
                      >
                        Letlhogonolo
                      </motion.h1>
                      <motion.h1
                        aria-hidden="true"
                        className="
                          font-extrabold uppercase leading-none text-center select-none tracking-tight
                          [font-size:clamp(70px,13.6vw,240px)]
                        "
                        variants={{
                          rest: {
                            color: 'rgba(255,255,255,0.18)',
                            textShadow:
                              '0 0 10px rgba(56,182,255,.35), 0 0 24px rgba(56,182,255,.45), 0 0 64px rgba(56,182,255,.3)',
                            scale: 1.01,
                            transition: { duration: 0.45, ease: 'easeOut' },
                          },
                          hover: {
                            color: 'rgba(255,255,255,0.10)',
                            textShadow: '0px 0px 0px rgba(56,182,255,0)',
                            scale: 1,
                            transition: { duration: 0.35, ease: 'easeOut' },
                          },
                        }}
                        style={{ willChange: 'transform, opacity, text-shadow' }}
                      >
                        Rakgantsho
                      </motion.h1>
                    </motion.div>


                    <motion.img 
                        src={heroCartoonImg} 
                        className='z-10 h-full object-contain mx-auto'
                        onHoverStart={() => setTextVisible(true)}
                        onHoverEnd={() => setTextVisible(false)}
                    />

                    <motion.div className="absolute inset-0 w-full h-full flex items-center justify-center z-20 pointer-events-none">
                        <div className="w-[80%] px-16">
                            <div className="flex w-full items-center justify-between">
                                <motion.div 
                                    className="text-gray-300 w-1/2"
                                    variants={textVariants}
                                    initial="hidden"
                                    animate={textVisible ? "visible" : "hidden"}
                                >
                                    <div className="text-lg text-start font-semibold full p-2 flex justify-start">
                                        <h3>
                                            <span className="block font-semibold">{"<FullStackDeveloper>"}</span>
                                            <span className="block font-semibold ml-12 ">{"Turning product ideas into scalable"}</span>
                                            <span className="block font-semibold ml-12">{"web apps. Don’t ask how, it just works."}</span>
                                            <span className="block font-semibold">{"<FullStackDeveloper>"}</span>
                                        </h3>
                                    </div>
                                </motion.div>

                                <motion.div 
                                    className="text-gray-300 w-1/2"
                                    variants={textVariants}
                                    initial="hidden"
                                    animate={textVisible ? "visible" : "hidden"}
                                >
                                    <div className="text-lg text-start font-semibold full p-2 flex justify-end">
                                        <h3>
                                            <span className="block font-semibold">{"<FullStackDeveloper>"}</span>
                                            <span className="block font-semibold ml-12">{"Some days I’m frontend. Some days I’m"}</span>
                                            <span className="block font-semibold ml-12">{"backend. Every day I’m fighting bugs."}</span>
                                            <span className="block font-semibold">{"</fullstackdeveloper>"}</span>
                                        </h3>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                    
                    {/* Bottom button bar */}
                    <div className="pointer-events-none absolute inset-x-0 bottom-8 z-30 flex w-full justify-center">
                      <div className="pointer-events-auto w-1/2">
                        <div className="flex items-center justify-between">
                          {/* Projects button */}
                          <button
                            type="button"
                            onClick= {handleScrollToProjectsRefClick}
                            className="group inline-flex items-center justify-center border border-sky-500/60 bg-sky-500/10 px-5 py-3 text-sm font-semibold text-sky-300 backdrop-blur transition
                                       hover:bg-sky-500/20 hover:text-sky-200 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-0"
                          >
                            <span className="mr-2">View Projects</span>
                            <svg className="h-4 w-4 transition-transform group-hover:translate-y-0.5" viewBox="0 0 24 24" fill="currentColor">
                              <path fillRule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v16.19l6.22-6.22a.75.75 0 1 1 1.06 1.06l-7.5 7.5a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 1 1 1.06-1.06l6.22 6.22V3a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
                            </svg>
                          </button>

                          {/* Download CV button */}
                          <a
                            href="/public/Letlhogonolo_Rakgantsho_CV.pdf"
                            download
                            className="group inline-flex items-center justify-center border border-sky-500/60 bg-sky-500/10 px-5 py-3 text-sm font-semibold text-sky-300 backdrop-blur transition
                                       hover:bg-sky-500/20 hover:text-sky-200 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-0"
                          >
                            <svg className="w-4 h-4 transition-transform group-hover:translate-y-0.5 mr-2" viewBox="0 0 24 24" fill="none" aria-hidden="true" >
                                <path d="M12 3v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                <path d="M8.5 9.5 12 13l3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                            Download CV
                          </a>
                        </div>
                      </div>
                    </div>
                </motion.div>
  
            </div>
        </>
    )
})

export default Hero