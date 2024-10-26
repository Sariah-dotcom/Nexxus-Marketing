import React from 'react'
import Hero from './components/Hero'
import Header from './components/Header'
import About from './components/About'
import Services from './components/Services'
import Footer from './components/Footer'
import Workflow from './components/Workflow'
import Testimonials from './components/Testimonials'

export default function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Services />
      <Workflow />
      <Testimonials />
      <Footer />
    </div>
  )
}
