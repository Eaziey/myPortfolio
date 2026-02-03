import React from 'react'

const FilterButton = ({name, onClick, isSelected }) => {

    const buttonStyles = isSelected
    ? "text-sky-400 border-sky-400"
    : "text-[#ADB7BE] border-slate-600 hover:border-white"
  return (
    <button className={`${buttonStyles} rounded-full border-2 w-36  px-6 py-1 text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
        {name}
      
    </button>
  )
}

export default FilterButton