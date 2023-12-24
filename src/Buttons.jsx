import React from 'react'

function buttons({data}) {
  return (
    <div className="flex items-center justify-center flex-row gap-[2vw]">
      <button onClick={()=>{data.change(data.value+1)}} className='border-zinc-400 py-[1vw] px-[2vw] rounded-md bg-green-600 text-white shadow-inner shadow-white hover:bg-green-800'>Increase</button>
      <button onClick={()=>{data.change(data.value-1)}} className='border-zinc-400 py-[1vw] px-[2vw] rounded-md bg-red-600 text-white shadow-inner shadow-white hover:bg-red-800'>Decrease</button>
    </div>
  )
}

export default buttons