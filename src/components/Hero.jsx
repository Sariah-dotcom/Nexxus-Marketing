import React from 'react'

export default function Hero() {
  return (
    <section className='flex flex-col gap-5 pt-32 h-[70vh] justify-center'>
        <div className='flex'>
            <h1 className='max-[390px]:text-3xl text-4xl w-[80%] font-bold'>Creating brands <br /> and digital solutions.</h1>
            <div className='max-[390px]:mt-10 max-[390px]:py-4 absolute mt-12 right-5 bg-navy w-[37.5%] py-5 flex items-center justify-end  rounded-[1rem] text-center'>
                <p className='text-white text-right pr-3'>Over 350+ <br /> satisfied <br /> clients</p>
            </div>
        </div>
        <img src="/hero-img.png" alt="team" />
    </section>
  )
}
