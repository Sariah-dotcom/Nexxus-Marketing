import React from 'react'

export default function Card(props) {
  return (
    <div className='border border-navy h-[10rem] w-[8rem] rounded-[1rem]'> 
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  )
}
