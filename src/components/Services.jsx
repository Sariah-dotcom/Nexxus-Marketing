import React from 'react'
import Card from './Card'

export default function Service() {
  return (
    <section>
      <h2 className='text-right text-lg mb-5 font-semibold'>What we offer</h2>
      <div className='flex gap-3'>
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  )
}
