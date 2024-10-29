import React from 'react'

export default function Step(props) {
  return (
    <div className='flex gap-5'>
      <div className='w-1/2 flex items-center md:w-1/3'>
        <img className='' src="/curve.png" alt="" />
      </div>
    
      <div className='w-1/2 pr-3'>
        <h3 className='md:text-2xl'>{props.step}</h3>
        <p className='text-xs md:text-lg'>{props.stepDescription}</p>
      </div>
    </div>
  )
}
