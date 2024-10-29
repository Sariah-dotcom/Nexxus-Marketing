import React from 'react'
import { MdOutlineDraw, MdManageSearch } from "react-icons/md";
import { FaCode } from "react-icons/fa6";

export default function Service() {
  return (
    <section>
      <h2 className='text-right text-3xl mb-3 font-bold'>What we offer</h2>
      <div className='flex gap-8 justify-center py-10'>
        <div className='flex flex-col items-center gap-3'>
          <MdOutlineDraw className='text-navy text-5xl' />
          <h2 className='text-center'>Logo <br /> Conception</h2>
        </div>

        <div className='flex flex-col items-center gap-3'>
          <FaCode className='text-navy text-5xl' />
          <h2 className='text-center'>Web <br /> Development</h2>
        </div>

        <div className='flex flex-col items-center gap-3'>
          <MdManageSearch className='text-navy text-5xl' />
          <h2 className='text-center'>SEO <br /> Optimization</h2>
        </div>
      </div>
    </section>
  )
}
