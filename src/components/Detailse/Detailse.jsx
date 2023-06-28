import React from 'react'

//icons
import { UilArrowUp,UilArrowDown,UilTemperature,UilTear,UilWind,UilSun,UilSunset } from "@iconscout/react-unicons"

function Detailse() {
  return (
    <div>
        <div className='flex items-center justify-center py-6 text-xl text-cyan-300'>
            <p>Cloudy or whater</p>
        </div>

        <div className='flex flex-row items-center justify-between text-white py-3'>
            <img className='w-20' src="http://openweathermap.org/img/wn/01d@2x.png" alt="/" />
            <p className='text-5xl'>34°</p>

            <div className='flex flex-col space-y-2'>
            <div className='flex font-light text-sm mr-3 items-center justify-center'>
            <UilTemperature size={18} className="ml-1"/>
            Real fell :
            <span className='font-medium ml-1'>34°</span>
            </div>

            <div className='flex font-light text-sm mr-3 items-center justify-center'>
            <UilTemperature size={18} className="ml-1"/>
            Humidity:
            <span className='font-medium ml-1'>65%</span>
            </div>

            <div className='flex font-light text-sm mr-3 items-center justify-center'>
            <UilTemperature size={18} className="ml-1"/>
            Wind Speed :
            <span className='font-medium ml-1'>11 km/h</span>
            </div>

            </div>
        </div>

        <div className='flex flex-row items-center justify-center space-x-2 text-white text-sm py3'>
        <UilSun/>
        <p className='font-light'>06:45 AM</p>
        <p className='font-light'>|</p>

        <UilSunset/>
        <p className='font-light'>7:35 PM</p>
        <p className='font-light'>|</p>

        <UilArrowDown/>
        <p className='font-light'>45 °</p>
        <p className='font-light'>|</p>

        <UilArrowUp/>
        <p className='font-light'>45 °</p>
        <p className='font-light'>|</p>
        </div>
    </div>
  )
}

export default Detailse