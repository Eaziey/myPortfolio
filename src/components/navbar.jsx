import MenuOverlay from "./MenuOverlay";
import { SlideTabs } from './slideTabs';
import logo from "../assets/1.png";
import { FaBars, FaTimes } from 'react-icons/fa';

import { motion, useMotionValueEvent, useScroll } from 'motion/react';
import { useState, useRef } from 'react';


const Navbar = ({scrollToSection , refs}) =>{

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [isHidden, setIsHidden] = useState(false);
  const {scrollY} = useScroll();
  const lastYRef = useRef(0);

  const handleLinkClick = (e, name) =>{
    e.preventDefault();

    const sectionRef = refs[name];

    if(!sectionRef?.current) return;

    if(name === "about"){
      console.log(name);
      sectionRef.current.showAbout();
      console.log(sectionRef);
    }
    else if(name === "experience"){
      sectionRef.current.showExperience();
    }

    scrollToSection(sectionRef);
    setIsMobileMenuOpen(false);

  } 

  useMotionValueEvent(scrollY, "change", (y) => {

    const diff = y - lastYRef.current;

    if(Math.abs(diff) > 50){

      setIsHidden(diff > 0);

      lastYRef.current = y;
    }
    
    

  });

  const toggleMobileMenu= () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  return(
      <motion.nav 
        className='fixed left-0 right-0 top-4 z-50'
        
      >
        <motion.div 
          className='mx-auto hidden max-w-6xl items-center justify-center rounded-full border-2 border-sky-400 py-3 backdrop-blur-lg lg:flex'
          animate = {isHidden? "hidden" : "visible"}
          variants = {{
          hidden: {
            y: "-150%",
             transition: { duration: 0.8, ease: "easeInOut" }
          },
          visible: {
            y : "0%",
             transition: { duration: 0.8, ease: "easeInOut" }
          }
        }}
        >
          <div onClick={(e) => handleLinkClick(e, "hero")} className='flex items-center justify-center gap-6 rounded-full border-black border-2 mx-10 bg-white w-72 cursor-pointer' >
            <a className="" >
              <img src = {logo} width={60} height={60} alt= "logo" className=" mx-10" />
            </a>
          </div>

          <div className='flex items-center justify-center gap-4'>
            <SlideTabs onLinkClick={handleLinkClick}/>
          </div>
        </motion.div>

        {/*mobile menu */}
        <div className='mx-2 items-center justify-center rounded-full border-2 backdrop-blur-md lg:hidden p-1'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center justify-center gap-6 rounded-full border-black border-2 mx-2 bg-white w-auto cursor-pointer'>
              <a href="#">
                <img src = {logo} alt='logo' width={40} height={40} className=" mx-4"/>
              </a>
            </div>
            <div className="flex items-center">
              <button className='focus:outline-none lg:hidden' onClick={toggleMobileMenu}>
                {isMobileMenuOpen ? (
                  <FaTimes className = "mx-6 h-6 w-5" />
                ) : (
                  <FaBars className = "mx-6 h-6 w-5"/>
                )}
              </button>
            </div>
          </div>

          
        </div>
        {isMobileMenuOpen && (
            <MenuOverlay navigation = {navigation} toggle = {toggleMobileMenu}/>
        )}
      </motion.nav>
      
      
    
  )
}



export default Navbar;