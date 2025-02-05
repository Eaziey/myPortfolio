import './App.css';
import Navbar from './components/navbar';
import AboutMe from './components/AboutMe';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Experience from './components/Experience';
import Projects from './components/Projects';

function App() {
  

  return (
    <div className =" relative h-full overflow-y-auto overflow-x-hidden antialiased bg-fixed bg-cover bg-center bg-img mx-auto">
      <div className=' h-full  '>
        <div className='container px-8 lg:px-12'>
          <Navbar/>
          <Hero/>
          <AboutMe/>
          <TechStack/>
          <Experience/>
          
        </div>
      </div>
    </div>
  )
}

export default App
