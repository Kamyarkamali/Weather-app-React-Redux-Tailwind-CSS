import React from 'react'
import { useSelector } from 'react-redux';

function TimeAndLocation() {
  const weatherData = useSelector(state => state.wheterData.data);
  return (
    <div>
        <div className='flex items-center justify-center my-6'>
        <p className='text-white text-xl font-extralight'>
            Tursday , 31 may 2023 | Local time:12:14
        </p>
        </div>
        <div className='flex items-center justify-center my-3'>
        <p className='text-white text-3xl font-medium'>{weatherData.name}</p>
        </div>
    </div>
  )
}

export default TimeAndLocation