import React from 'react'
import Step from './Step'

export default function Workflow() {
  return (
    <div className='mb-[7rem]' >
      <h2 className='font-semibold text-3xl text-center mb-10 md:text-4xl md:mb-14'>How we get <br /> things done</h2>
      <div className='flex flex-col gap-10 md:gap-16'>
        <Step 
            step='1. Consultation'
            stepDescription='Discuss business goals and marketing needs Analyze current digital presence.'
        />

        <Step 
            step='2. Strategy Development'
            stepDescription='Create a comprehensive marketing plan Define key performance indicators (KPIs).'
        />

        <Step 
            step='3. Content Creation'
            stepDescription=' Develop engaging and relevant content Design visuals and multimedia assets.'
        />

        <Step
            step='4. SEO and Performance monitoring'
            stepDescription='Optimize website for search engines, Track campaign performance using analytics.'
        />

      </div>
    </div>
  )
}
