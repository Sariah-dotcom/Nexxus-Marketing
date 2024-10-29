import React from 'react'
import Step from './Step'
import StepRight from './StepRight'

export default function Workflow() {
  return (
    <div className='mb-[5rem]' >
      <h2 className='font-bold text-3xl text-center mb-10'>How we get things done</h2>
      <div className='flex flex-col gap-10'>
        <Step 
            step='1. Consultation'
            stepDescription='Discuss business goals and marketing needs Analyze current digital presence.'
        />

        <StepRight 
            step='2. Strategy Development'
            stepDescription='Create a comprehensive marketing plan Define key performance indicators (KPIs).'
        />

        <Step 
            step='3. Content Creation'
            stepDescription=' Develop engaging and relevant content Design visuals and multimedia assets.'
        />

        <StepRight 
            step='4. SEO and Performance monitoring'
            stepDescription='Optimize website for search engines, Track campaign performance using analytics.'
        />

      </div>
    </div>
  )
}
