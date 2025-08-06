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
    <div className =" relative h-full overflow-y-auto overflow-x-hidden antialiased bg-fixed bg-cover bg-center bg-img mx-auto">
      <div className=' h-full  '>
        <div className='container '>
          <Navbar/>
          <Hero/>
          <AboutMe/>
          <Projects/>
          <TechStack/>
          <Experience/>
          <ContactMe/>
        </div>
      </div>
    </div>
  )
}

export default App
