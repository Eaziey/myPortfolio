import React from 'react'

const MenuOverlay = ({navigation, toggle}) => {
  return (
    <ul className='p-4  flex flex-col gap-6 backdrop-blur-md text-4xl cursor-pointer w-full'>
        {navigation.map((item, index) => (
            <li key={index} onClick={toggle}>{item.name}</li>
        ))}
    </ul>
  )
}

export default MenuOverlay