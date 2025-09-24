import React from 'react'
import Marquee from './Marquee';

const TechStack = React.forwardRef((props, ref) => {

  return (

    
     <div ref={ref} className='overflow-x-hidden container mx-auto w-full h-screen'>
      <hr className='border border-sky-400 '></hr>
      <h2 className='my-20 text-center text-4xl'>Tech
            <span className='text-sky-400 ml-2'>
                Stack
            </span>
        </h2>

      <Marquee/>
    </div>
   
  )
})

export default TechStack