import React from 'react'

export default function Step(props) {
  return (
    <div className='flex gap-5'>
      <div className='w-1/2 flex items-center'>
        <img className='' src="/curve.png" alt="" />
      </div>
    
      <div className='w-1/2 pr-3'>
        <h3 className='font-bold'>{props.step}</h3>
        <p className='text-xs'>{props.stepDescription}</p>
      </div>
    </div>
  )
}
