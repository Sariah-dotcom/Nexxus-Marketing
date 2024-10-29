import React from 'react'

export default function Hero() {
  return (
    <section className='flex flex-col gap-5 pt-32 h-[70vh] justify-center'>
        <div className='flex'>
            <h1 className='md:text-6xl max-[390px]:text-3xl text-4xl w-[80%] font-bold'>Creating brands <br /> and digital solutions.</h1>
            <div className='md:mt-20 md:py-9 md:w-[31.5%] md:right-[5rem] max-[390px]:mt-10 max-[390px]:py-4 absolute mt-12 right-5 bg-navy w-[37.5%] py-5 flex items-center justify-center rounded-[1rem]'>
              <p className='md:text-xl text-white'>Over 350+ <br /> satisfied <br /> clients</p>
            </div>
        </div>
        <img src="/hero-img.png" alt="team" />
    </section>
  )
}
