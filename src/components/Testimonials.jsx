import React from 'react'
import TestimonialCard from './TestimonialCard'

export default function Testimonials() {
  return (
    <section>
      <h2 className='text-center font-semibold text-3xl mb-10'>Testimonials</h2>

      <div className='flex flex-col gap-10'>
        <TestimonialCard 
            headshot='/portrait-1.jpg'
            name='Sarah B.'
            business='Owner of Bloom and Grow'
            review='Working with Nexxus Marketing has been an absolute pleasure. 
            Their expertise in digital marketing has transformed our business,
            leading to a surge in customer engagement and sales. Highly recommend.'
        />

        <TestimonialCard 
            headshot='/portrait-2.jpg'
            name='Michael T.'
            business='Marketing Director at GreenField Foods'
            review="The team at Nexxus Marketing truly understands the digital landscape. Their tailored approach and constant support have made a huge impact on our brand's growth. They are reliable, creative, and results-driven."
        />

        <TestimonialCard 
            headshot='/portrait-3.jpg'
            name='John D.'
            business='CEO of TechWave'
            review="Nexxus Marketing has been a game-changer for our online presence. Their innovative strategies and dedicated team helped us significantly increase our traffic and conversions. We couldn't be happier with the results!"
        />
      </div>
    </section>


  )
}
