import React from 'react';
import { xp } from '../constants';

const Experience = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className='max-w-4xl px-6'>
        <h2 className='text-4xl text-sky-400'>My 
            <span className='text-black ml-2'>
                Experience
            </span>
        </h2>
        <div className='mt-14 text-left'>
            {xp.map((experience, index) => (
                <div
                    key = {index}
                    className='mb-12 flex flex-wrap'
                >
                    <div className='mt-2 w-full lg:w-1/3'>
                        <h6 className='mb-2 text-xl text-black font-semibold'>{experience.year}</h6>
                        
                    </div>
                    <div className=' w-full max-w-xl lg:w-2/3'>
                        <h6 className='mb-2 text-xl text-sky-400 font-semibold'>
                            {experience.role}  <span className=' text-black'>- {experience.company}</span>
                        </h6>
                        <p className='text-lg text-black'>{experience.description}</p>
                        
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
})

export default Experience