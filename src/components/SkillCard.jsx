import React from 'react';

const SkillCard = ({icon: Icon, tech, proficiency, cardNumber}) => {

  return (
    <div className="relative w-[380px] bg-lightDarkMode rounded-[10px] p-[50px_30px] overflow-hidden shadow-md cursor-pointer transition-all duration-400 hover:scale-[1.02] hover:shadow-xl group">

  {/* NUMBER BUBBLE with ::after */}
  <div className="absolute top-[-90px] right-[-85px] p-[100px_100px_30px_30px] bg-sky-400 rounded-full z-10
                  after:content-[''] after:absolute after:w-[50px] after:h-[50px] after:bg-sky-400 after:rounded-full
                  after:top-1/2 after:right-1/2 after:translate-x-1/2 after:-translate-y-1/2 after:transition-all after:duration-500
                  group-hover:after:w-[900px] group-hover:after:h-[900px]">
    <p className="text-xl font-semibold text-white">{cardNumber}</p>
  </div>

  {/* ROW: Icon + Tech side by side */}
  <div className="relative z-10 mb-3 flex items-center gap-3">
    <Icon className="w-10 h-10 text-sky-400 transition-colors duration-500 group-hover:text-[#f5f5f5]" />
    <p className="text-lg font-extrabold transition-colors duration-500 group-hover:text-[#f5f5f5]">
      {tech}
    </p>
  </div>

  {/* CONTENT */}
  <p className="relative z-10 mt-2 transition-colors duration-500 group-hover:text-[#f5f5f5]">
    {proficiency}
  </p>
</div>
  );
}

export default SkillCard;
