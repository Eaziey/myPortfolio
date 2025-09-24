import React from 'react'
import Marquee from './Marquee';

const TechStack = React.forwardRef((props, ref) => {

  return (

    
     <div ref={ref} className='overflow-x-hidden mx-auto w-full h-screen'>
      
      <Marquee/>
      <h2 className='my-20 text-center text-4xl'>My
            <span className='text-sky-400 ml-2'>
                Skills
            </span>
        </h2>

      
    </div>
   
  )
})

export default TechStack