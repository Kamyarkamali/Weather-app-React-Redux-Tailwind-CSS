import React from 'react'

///Components
import TopButton from './components/bottomButton/TopButton'
import Input from './components/Input/Input'
import TimeAndLocation from './components/TimeAndLocation/TimeAndLocation'
import Detailse from './components/Detailse/Detailse'
import ForCast from './components/ForCast/ForCast'

function App() {
  return (
    <div className='mx-auto max-w-screen-md mt-4 py-5 bg-gradient-to-br from-cyan-700 to-violet-700 h-fit shadow-xl shadow-gray-400'>
      <TopButton/>
      <Input/>
      <TimeAndLocation/>
      <Detailse/>
      <ForCast/>
    </div>
  )
}

export default App