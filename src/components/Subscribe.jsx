import React from 'react'

export default function Subscribe() {
  return (
    <section className='flex flex-col items-center mb-[10rem]'>
      <h2 className='font-bold text-center text-3xl'>Take your Business to <br /> the Nexx Level</h2>
      <div className='mt-10 flex w-full px-5'>
        <input className='border border-gray rounded-full w-full py-3 px-5' placeholder='Email' type="text" />
        <button className='bg-navy text-white font-inter text-sm font-semibold absolute right-5 py-4 px-6 rounded-full'>Sign Up</button>
      </div>
    </section>
  )
}
