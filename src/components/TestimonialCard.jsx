import React from 'react'

export default function TestimonialCard(props) {
  return (
    <div className='py-5 px-3 border border-dark-grey rounded-[1rem]'>

        <div className='flex gap-5 items-center'>
          <img className='rounded-full h-20' src={props.headshot} />
          <div>
            <h2 className='font-bold text-xl'>{props.name}</h2>
            <p className='italic text-sm text-dark-grey'>{props.business}</p>
          </div>
        </div>
        
        <div className='mt-3'>
            <p>{props.review}</p>
        </div>

    </div>
  )
}
