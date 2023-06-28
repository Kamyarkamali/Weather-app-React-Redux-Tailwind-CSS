import React, { useState } from 'react'

///icons
import { UilSearch,UilLocationPoint } from '@iconscout/react-unicons'



function Input() {

//   const [city,setCity]=useState("")
//   const [weatherData,setWeatherData]=useState(null)

//   const KEY="3e1d1194ea3cf297e78cc150dab88d61"

// const BASE_URL="https://api.openweathermap.org/data/2.5/weather"


// const hendelSearch=async()=>{
//   try{
//     const response=await axios.get(`${BASE_URL}?q=${city}&appid=${KEY}`)
//     setWeatherData(response.data)
//   } catch(err){
//     console.log("error");
//   }
// }

// console.log(weatherData);

  return (
    <div className='flex flex-row justify-center my-6'>
        <div className='flex flex-row w-2/4 items-center justify-center space-x-4'>
        <input onChange={(e)=>setCity(e.target.value)} type="text" className='text-xl outline-none font-light p-2 w-full shadow-xl' />
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