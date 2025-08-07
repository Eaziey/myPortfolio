import './App.css';
import Navbar from './components/navbar';
import AboutMe from './components/AboutMe';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Experience from './components/Experience';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';

function App() {
  

  return (
    <div className ="relative w-full antialiased bg-fixed bg-cover bg-center mx-0 px-0">
        
      <Navbar/>
      <Hero/>
      <AboutMe/>
      <Projects/>
      <TechStack/>
      <Experience/>
      <ContactMe/>
        
    </div>
  )
}

export default App
