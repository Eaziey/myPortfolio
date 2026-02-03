import { RiReactjsLine, RiCss3Line, RiJavascriptLine,RiHtml5Line,   } from "react-icons/ri";
import { SiMongodb, SiDotnet, SiVuedotjs } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';
import { BiLogoPostgresql, BiLogoTailwindCss } from 'react-icons/bi';
import { motion, useAnimation } from "motion/react";
import { useEffect } from "react";
import {techStack} from "../constants";

const Marquee = () =>{
    const techIcons = [
    <RiReactjsLine className='h-18 w-18 text-7xl text-cyan-400'/>,
    <RiCss3Line className='h-18 w-18 text-7xl text-white'/>,
    <RiJavascriptLine className='h-18 w-18 text-7xl text-yellow-400'/>,
    <RiHtml5Line className='h-18 w-18 text-7xl text-white'/>,
    <FaNodeJs className='h-18 w-18 text-7xl text-green-500'/>,
    <BiLogoPostgresql className='h-18 w-18 text-7xl text-blue-600'/>,
    <SiMongodb className='h-18 w-18 text-7xl text-green-500'/>,
    <BiLogoTailwindCss className='h-18 w-18 text-7xl text-sky-500'/>,
    <SiDotnet className='h-18 w-18 text-7xl text-purple-500'/>,
    <SiVuedotjs className='h-20 w-20 text-7xl text-green-500'/>
  ];

  

  
const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: ["0%", "-50%"],
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      },
    });
  }, [controls]);


    return(
      <>
        <hr className='border border-sky-400 '></hr>
        <div className="my-2 mx-5">
            <div className="">
                <motion.div 
                    className="flex myGradient w-max"
                    initial={{ x: 0 }}
                    animate={controls}
                    onMouseEnter={() => controls.stop()}
                    onMouseLeave={() =>
                              controls.start({
                                x: ["0%", "-50%"],
                                transition: {
                                  duration: 20,
                                  repeat: Infinity,
                                  ease: "linear",
                                },
                              })
                            }
                >
                    {[...techIcons, ...techIcons].map((icon, index) => {
                        return <span className="pr-16" key={index}>{icon }</span>
                    })}
                </motion.div>

            </div>

        </div>
        <hr className='border border-sky-400 '></hr>
       </>             
    )
}

export default Marquee;