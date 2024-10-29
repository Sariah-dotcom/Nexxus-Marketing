import React from 'react'

export default function Hero() {
  return (
    <section className='flex flex-col gap-5 pt-32 h-[70vh] justify-center'>
        <div className='font-bold flex'>
            <h1 className='text-3xl w-3/6'>Creating brands <br /> and digital solutions.</h1>
            <div className='bg-navy w-[40%] flex items-center justify-center rounded-[1rem] text-center'>
                <h2 className='text-white text-2xl'>350+ <br /> clients</h2>
            </div>
        </div>
        <img src="/hero-img.png" alt="team" />
    </section>
  )
}
