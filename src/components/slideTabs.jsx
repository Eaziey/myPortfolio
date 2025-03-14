import { motion } from "motion/react";
import { useState, useRef } from "react";
import { RiHome2Fill, RiAccountCircle2Fill, RiSuitcaseFill, RiCodeBoxFill,  RiLightbulbFill,  RiMailFill} from "react-icons/ri";

import { FaLinkedinIn, FaFacebookF, FaInstagram, FaGithub} from "react-icons/fa";

import logo from "../assets/1.png";

export const SlideTabs = (props) =>{

    const {nav, } = props;
    
    const [position, setPosition] = useState({

        left: 0,
        width: 0,
        opacity: 0
    });

    const [position2, setPosition2] = useState({

        left: 0,
        width: 0,
        opacity: 0
    });

    return(
        
        <div className=" flex items-center justify-between place-content-center">
            {/*<div className="mx-10 w-fit p-1 ">
                <a href="#"     >
                    <img src = {logo} width={60} height={60} alt= "logo" className="rounded-xl border-black border-2"  />
                </a>
            </div>*/}

            <div className=" w-fit rounded-full border-2 border-black bg-white p-1">
                <ul 
                    onMouseLeave = {()=>{
                        setPosition((prev) => ({
                            ...prev,
                            opacity: 0
                        }))
                    }} 

                    className="relative flex w-fit ">

                    <Tab 
                        setPosition={setPosition}
                    >
                        {/*<RiAccountCircle2Fill/>*/} About
                    </Tab>
                    <Tab 
                        setPosition={setPosition}
                    >
                        {/*<RiSuitcaseFill/>*/} Experience
                    </Tab>
                    <Tab 
                        setPosition={setPosition}
                    >
                        {/*<RiCodeBoxFill/>*/} Projects
                    </Tab>
                    <Tab 
                        setPosition={setPosition}
                    >
                        {/*<RiLightbulbFill/>*/} Skills
                    </Tab>
                    <Tab 
                        setPosition={setPosition}
                    >
                        {/*<RiMailFill/>*/} Contact
                    </Tab>
                
                    <Cursor position={position}/>
                </ul>
            </div>

            <div  className=" w-fit rounded-full border-2 border-black bg-white p-1 mx-10">
                
                <ul 
                    onMouseLeave = {()=>{
                        setPosition2((prev) => ({
                            ...prev,
                            opacity: 0
                        }))
                    }}
                    className="relative flex w-fit " >
                    <Tab setPosition={setPosition2}>
                        <FaGithub size={26}/>

                    </Tab>

                    <Tab setPosition={setPosition2}>
                        <FaLinkedinIn size={26}/>
                    </Tab>
                    
                    <Tab setPosition={setPosition2}>
                        <FaInstagram size={26}/>
                    </Tab>
                    <Cursor2 position={position2}/>
                </ul>
            </div>
        </div>
    )
}

const Tab = ({children, setPosition}) =>{

    const ref = useRef(null);
    
    return (
    <li 
        className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base "
        ref = {ref}
        onMouseEnter = {() =>{

            if(!ref.current) return;

            const {width} = ref.current.getBoundingClientRect();

            setPosition({
                width,
                opacity: 1,
                left: ref.current.offsetLeft,
            })
            
        }}
    >
        {children}
    </li>)
}

const Cursor = ({position}) =>{
    return(
        <motion.li 
            className="absolute z-0 h-7 rounded-full bg-black md:h-12"
            animate = {position}
        />
    )
}

const Cursor2 = ({position}) =>{
    return(
        <motion.li 
            className="absolute z-0 h-7 rounded-full bg-black md:h-12"
            animate = {position}
        />
    )
}