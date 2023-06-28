import React from 'react'

function ForCast() {
  return (
    <div>
        <div className='flex items-center justify-start mt-6'>
            <p className='text-white font-medium uppercase'> hourly forecast</p>
        </div>
        <hr className='my-3' />

        <div className='flex flex-row items-center justify-between text-white'>
        <div className='flex flex-col items-center justify-center'>
            <p className='font-light text-sm'>04:30 PM</p>
            <img className='w-12 my-1' src="http://openweathermap.org/img/wn/01d@2x.png" alt="/" />
            <p className='font-medium'>22</p>
        </div>

        <div className='flex flex-col items-center justify-center'>
            <p className='font-light text-sm'>04:30 PM</p>
            <img className='w-12 my-1' src="http://openweathermap.org/img/wn/01d@2x.png" alt="/" />
            <p className='font-medium'>22</p>
        </div>

        <div className='flex flex-col items-center justify-center'>
            <p className='font-light text-sm'>04:30 PM</p>
            <img className='w-12 my-1' src="http://openweathermap.org/img/wn/01d@2x.png" alt="/" />
            <p className='font-medium'>22</p>
        </div>

        <div className='flex flex-col items-center justify-center'>
            <p className='font-light text-sm'>04:30 PM</p>
            <img className='w-12 my-1' src="http://openweathermap.org/img/wn/01d@2x.png" alt="/" />
            <p className='font-medium'>22</p>
        </div>

        <div className='flex flex-col items-center justify-center'>
            <p className='font-light text-sm'>04:30 PM</p>
            <img className='w-12 my-1' src="http://openweathermap.org/img/wn/01d@2x.png" alt="/" />
            <p className='font-medium'>22</p>
        </div>
        </div>
    </div>
  )
}

export default ForCast