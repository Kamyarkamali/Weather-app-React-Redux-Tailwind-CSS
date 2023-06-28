import React from 'react'



const cityse=[
  {
    id:1,
    title:"London",
  },
  {
    id:2,
    title:"Sydney",
  },
  {
    id:3,
    title:"Tokyo",
  },
  {
    id:4,
    title:"Torento",
  },
  {
    id:5,
    title:"Paris",
  },
]

function TopButton() {
  return (
    <div className='flex text-white font-bold items-center justify-around my-6'>
      {cityse.map((item)=>(
        <button key={item.id}>{item.title}</button>
      ))}
    </div>
  )
}

export default TopButton