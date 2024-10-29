import React from 'react'

export default function About() {
  return (
    <section>
        <div className='flex flex-col gap-5'>
            <h2 className='font-semibold text-3xl md:text-4xl'>A company with <br /> a difference</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur placeat laudantium nemo fuga similique optio officiis soluta aperiam, et incidunt accusantium, rem at nam cum odio? Magni perspiciatis eum laudantium.</p>
        </div>

        <div className='h-[10rem] mt-5'>
            <img className='object-cover rounded-full w-full h-full' src="/working.jpg" alt="" />
        </div>   
    </section>
  )
}
