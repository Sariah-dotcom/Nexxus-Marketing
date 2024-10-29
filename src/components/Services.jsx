import React from 'react'
import Card from './Card'

export default function Service() {
  return (
    <section>
      <h2 className='text-right text-2xl mb-10 font-bold'>What we offer</h2>
      <div className='flex gap-3'>
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  )
}
