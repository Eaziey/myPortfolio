import React from 'react';
import { xp } from '../constants';

const Experience = () => {
  return (
    <div className='lg:h-screen w-full pb-4 lg:mb-32 mb-20'>
        {/*<h2 className='my-10 text-center text-4xl'>
            Experience
        </h2>*/}
        <h2 className='my-20 text-center text-4xl text-sky-400'>My 
            <span className='text-white ml-2'>
                Experience
            </span>
        </h2>
        <div className='mt-14'>
            {xp.map((experience, index) => (
                <div
                    key = {index}
                    className='mb-8 flex flex-wrap lg:justify-center'
                >
                    <div className='w-full lg:w-1/4'>
                        <p className='mb-2 text-sm text-white'>{experience.year}</p>
                        
                    </div>
                    <div className='w-full max-w-xl lg:w-3/4'>
                        <h6 className='mb-2 font-semibold'>
                            {experience.role} - <span className='text-small text-white'>{experience.company}</span>
                        </h6>
                        <p className='mb-4 text-neutral-400'>{experience.description}</p>
                        
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Experience