import './App.css';
import Navbar from './components/navbar';
import AboutMe from './components/AboutMe';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Experience from './components/Experience';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
import { useRef } from 'react';


function App() {
  
  const heroRef = useRef(null);
  const aboutMeRef = useRef(null);
  const projectsRef = useRef(null);
  const techStackRef = useRef(null);
  const contactMeRef = useRef(null);

  const scrollToSection = (elementRef) =>{

    const target = elementRef.current?.scrollRef || elementRef.current;
    console.log("Scroll target:", target);
    if(target){
      window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth'
      });
    }
    
  };

  return (
    <div className ="relative w-full antialiased bg-fixed bg-cover bg-center mx-0 px-0">
        
      <Navbar
        scrollToSection = {scrollToSection}
        refs = {
          {
            hero: heroRef,
            about: aboutMeRef,
            experience: aboutMeRef,
            projects: projectsRef,
            skills: techStackRef,
            contact: contactMeRef
          }
        }
      />
      <Hero ref = {heroRef}/>
      <AboutMe ref={aboutMeRef}/>
      <Projects ref={projectsRef}/>
      <TechStack ref={techStackRef}/>
      <ContactMe ref={contactMeRef}/>
      <Footer/> 
    </div>
  )
}

export default App
