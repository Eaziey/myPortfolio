import React from 'react'
import Marquee from './Marquee';
import SkillCard from './SkillCard';
import {techStack} from '../constants';
import FilterButton from './FilterButton';
import { useState } from 'react';

const TechStack = React.forwardRef((props, ref) => {

  const coreSkills = techStack.filter((tech) =>
    tech.type === 1
  );

  const secondarySkills = techStack.filter((tech) =>
    tech.type === 2
  );

  const activelyLearningSkills = techStack.filter((tech) =>
    tech.type === 3
  );

  const [tag, setTag] = useState("Primary");

  const filteredStack = techStack.filter((stack) =>(
    stack.tag.includes(tag)
  ));

  const handleTagChange = (newTag) => {
    setTag(newTag);
    console.log(newTag);
    console.log(techStack);
  };

 

  return (
    <div ref={ref} className="overflow-x-hidden px-5 min-h-screen w-full ">
      {<Marquee/>}
      <h2 className="mt-10 mb-5 text-center text-4xl">
        My <span className="text-sky-400 ml-2">Skills</span>
      </h2>
      {/*<p className="mt-5 mb-5 text-center text-xl w-1/2 flex justify-self-center">
        These are the technologies and tools I use to bring ideas to life. 
        I'm always expanding my skillset and learning new technologies.
      </p>*/}
      <div className='text-white flex justify-center items-center gap-2 py-6 mb-6'>
            <FilterButton onClick={handleTagChange} name = "Primary" isSelected={tag ==="Primary"} />
            <FilterButton onClick={handleTagChange} name = "Secondary" isSelected={tag ==="Secondary"} />
            <FilterButton onClick={handleTagChange} name = "Learning" isSelected={tag ==="Learning"} />
      </div>

      <div className="grid grid-cols-3 gap-4 place-items-center justify-self-center mb-10">
              {filteredStack.map((skill, index) => (
                <SkillCard
                  key={skill.tech}
                  icon={skill.icon}
                  tech={skill.tech}
                  proficiency={skill.proficiency}
                  cardNumber={index + 1}
                />
              ))}
      </div>
      {/*<Marquee/>*/}
      {/*// Three horizontal columns }
      <div className="flex min-h-[30%] justify-center item-center mx-5 mb-40 gap-4">
        {// Column 1: Core Skills }
        <div className="w-1/3">
          {// Nested 2-col grid: vertical heading + cards }
          <div className="grid grid-cols-[60px_1fr] gap-2 items-start">
            <h3 className="text-3xl font-semibold [writing-mode:vertical-rl] rotate-180 text-center">
              Primary Skills
            </h3>

            <div className="grid grid-cols-2 gap-4">
              {coreSkills.map((skill) => (
                <SkillCard
                  key={skill.tech}
                  icon={skill.icon}
                  tech={skill.tech}
                  proficiency={skill.proficiency}
                />
              ))}
            </div>
          </div>
        </div>
            
        {/* Column 2: Secondary Skills }
        <div className="w-1/3">
          <div className="grid grid-cols-[60px_1fr] gap-2 items-start">
            <h3 className="text-3xl font-semibold [writing-mode:vertical-rl] rotate-180 text-center">
              Secondary Skills
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              {secondarySkills.map((skill) => (
                <SkillCard
                  key={skill.tech}
                  icon={skill.icon}
                  tech={skill.tech}
                  proficiency={skill.proficiency}
                />
              ))}
            </div>
          </div>
        </div>
            
        {// Column 3: Actively Learning}
        <div className="w-1/3">
          <div className="grid grid-cols-[60px_1fr] gap-2 items-start">
            <h3 className="text-3xl font-semibold [writing-mode:vertical-rl] rotate-180 text-center">
              Actively Learning
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              {activelyLearningSkills.map((skill) => (
                <SkillCard
                  key={skill.tech}
                  icon={skill.icon}
                  tech={skill.tech}
                  proficiency={skill.proficiency}
                />
              ))}
            </div>
          </div>
        </div>
      </div>*/}
    </div>
  )
})

export default TechStack