import React from 'react'

///icons
import { UilSearch,UilLocationPoint } from '@iconscout/react-unicons'


function Input() {
  return (
    <div className='flex flex-row justify-center my-6'>
        <div className='flex flex-row w-2/4 items-center justify-center space-x-4'>
        <input type="text" className='text-xl outline-none font-light p-2 w-full shadow-xl' />
        </div> 
        <div className='flex items-center'>
        <UilSearch className="text-white transition hover:scale-125 cursor-pointer" size={25}/>
        <UilLocationPoint className="text-white transition hover:scale-125 cursor-pointer" size={25}/>
        </div>
        
        <div className='flex flex-row w-1/4 items-center justify-center gap-1'>
            <button name='metric' className='text-xl text-white font-light'>°C</button>
            <p className='text-white text-xl'>|</p>
            <button name='imperial' className='text-xl text-white font-light'>°F</button>

        </div>
    </div>
  )
}

export default Input