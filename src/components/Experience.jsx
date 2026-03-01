import React from 'react';
import { xp } from '../constants';

const Experience = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="max-w-2xl px-6">
      <h2 className="text-6xl text-sky-400">
        My <span className="text-black ml-2">Journey</span>
      </h2>

      {/* Grid: fixed timeline column + flexible content */}
      <div className="relative mt-14 grid grid-cols-[56px_1fr] gap-6">
        {/* Vertical line*/}
        <div className="absolute left-[28px] top-0 bottom-0 w-[3px] bg-sky-300/40 rounded-full pointer-events-none" />
        {xp.map((experience, index) => (
          <div key={index} className="contents">
            <div className="relative h-14">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                              w-14 h-14 bg-sky-400 rounded-full
                              flex items-center justify-center text-white shadow-lg">
                <experience.icon className="text-3xl" />
              </div>
            </div>

            <div className="pt-2 text-start">
              <h6 className="text-xl text-black font-semibold">{experience.year}</h6>
              <h6 className="mb-2 text-xl text-sky-400 font-semibold">
                {experience.role}
                <span className="text-black"> - {experience.company}</span>
              </h6>
              <p className="text-lg text-black">{experience.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default Experience;