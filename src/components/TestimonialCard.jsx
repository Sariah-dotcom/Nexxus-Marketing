import React from 'react'

export default function TestimonialCard(props) {
  return (
    <div className='py-5 px-3 border border-navy rounded-[1rem] drop-shadow-md'>
      <img />
      <div>
        <h2 className='font-bold text-lg'>{props.name}</h2>
        <p className='italic text-sm text-gray'>{props.business}</p>
        <div className='mt-3'>
            <p>{props.review}</p>
        </div>
      </div>
    </div>
  )
}
