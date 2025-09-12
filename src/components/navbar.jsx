import MenuOverlay from "./MenuOverlay";
import { SlideTabs } from './slideTabs';
import logo from "../assets/1.png";
import { FaBars, FaTimes } from 'react-icons/fa';

import { motion, useMotionValueEvent, useScroll } from 'motion/react';
import { useState, useRef } from 'react';

const navigation = [
  { name: `Home`, href: '#', current: true },
  { name: 'About', href: '#', current: false },
  { name: 'Experience', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Skills', href: '#', current: false },
  { name: 'Contact', href: '#', current: false },
]

const Navbar = () =>{

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [isHidden, setIsHidden] = useState(false);
  const {scrollY} = useScroll();
  const lastYRef = useRef(0);

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

  //for smooth scroll
  const handleLinkClick = (e, href) => {
    e.preventDefault;

    const targetElement = document.querySelector(href);

    if(targetElement){
      const offset = -85; /*try removing this and see what happens */
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY + offset;


      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }

    setIsMobileMenuOpen(false);


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
          <div className='flex items-center justify-center gap-6 rounded-full border-black border-2 mx-10 bg-white w-72' >
            <a href='#' >
              <img src = {logo} width={60} height={60} alt= "logo" className=" mx-10" />
            </a>
          </div>

          <div className='flex items-center justify-center gap-4'>
            <SlideTabs nav = {navigation}/>
          </div>
        </motion.div>

        {/*mobile menu */}
        <div className='mx-2 items-center justify-center rounded-full border-2 backdrop-blur-md lg:hidden p-1'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center justify-center gap-6 rounded-full border-black border-2 mx-2 bg-white w-auto'>
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

/*function Navbar() {
  return (
    <Disclosure as="nav" className="">
      <div className="mx-10 max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            
            {/* Mobile menu button}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>

          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <img
                alt="MyLogo"
                src=""
                className="h-8 w-auto"
              />
            </div>

            <div className="hidden sm:ml-6 sm:block">
              
                <SlideTabs nav = {navigation} />
              
            </div>
          </div>
          
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}*/


export default Navbar;