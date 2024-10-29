import React from 'react'
import { MdOutlineDraw } from "react-icons/md";


export default function Card(props) {
  return (
    <div className='border border-navy h-[20rem] w-[8rem] rounded-[1rem]'> 
    <MdOutlineDraw />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  )
}
