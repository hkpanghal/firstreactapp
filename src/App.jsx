import React, { useState } from 'react'
import Buttons from './buttons'

function App() {

  var [a,b] = useState(0)
  return (
    <div className='w-full h-screen bg-zinc-900 flex items-center justify-center'> 
    <div className=" bg-zinc-800 h-[50%] w-[50%] flex items-center justify-center flex-col gap-[3vw] rounded-md shadow-inner shadow-white">
      <h1 className='w-[25vw] h-[10vw] bg-zinc-700  text-white  rounded-md flex items-center justify-center shadow-inner shadow-white'>{a}</h1>
      <Buttons data={{value:a,change:b}}/>
    </div>
    </div>
  )
}

export default App