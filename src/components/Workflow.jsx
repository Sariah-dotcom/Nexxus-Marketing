import React from 'react'
import Step from './Step'

export default function Workflow() {
  return (
    <div className='mb-[5rem]' >
      <h2 className='font-semibold text-xl text-center mb-5'>How we get things done</h2>
      <div className='flex flex-col gap-10'>
        <Step 
            step='1. Consultation'
            stepDescription='Discuss business goals and marketing needs Analyze current digital presence.'
        />

        <Step 
            step='1. Consultation'
            stepDescription='Discuss business goals and marketing needs Analyze current digital presence.'
        />

        <Step 
            step='1. Consultation'
            stepDescription='Discuss business goals and marketing needs Analyze current digital presence.'
        />
      </div>
    </div>
  )
}
