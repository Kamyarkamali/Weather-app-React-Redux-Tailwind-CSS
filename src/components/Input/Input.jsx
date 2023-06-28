import React, { useEffect, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { fecthWhather } from '../../Redux/fechuare/whatherSlice'

///icons
import { UilSearch,UilLocationPoint } from '@iconscout/react-unicons'



function Input() {

  const dispatch=useDispatch()

  


  const [cityNames,setCityNames]=useState("")
  
  //Redux
  const weatherData = useSelector((state) => state.wheterData.data);

  const handelcityName=(e)=>{
    dispatch(setCityNames(e.target.value))
  }
  const submitHandeler=(e)=>{
    e.preventDefault()
    dispatch(fecthWhather(cityNames))
  }
  return (
    <div className='flex flex-row justify-center my-6'>
      <form onSubmit={submitHandeler}>

        <div className='flex flex-row w-2/4 items-center justify-center space-x-4'>

        <input onChange={handelcityName} value={cityNames} type="text" className='text-xl outline-none font-light p-2 w-full shadow-xl' />
        </div> 
        <div className='flex items-center'>
          <button type='submit'>
        <UilSearch className="text-white transition hover:scale-125 cursor-pointer" size={25}/>
          </button>
        <UilLocationPoint className="text-white transition hover:scale-125 cursor-pointer" size={25}/>
        </div>
      </form>
        
        <div className='flex flex-row w-1/4 items-center justify-center gap-1'>
            <button name='metric' className='text-xl text-white font-light'>°C</button>
            <p className='text-white text-xl'>|</p>
            <button name='imperial' className='text-xl text-white font-light'>°F</button>

        </div>
    </div>
  )
}

export default Input