import React, { useState } from 'react'
import { IoMenu, IoCloseOutline } from 'react-icons/io5'
import { HashLink } from 'react-router-hash-link';

export default function Header() {
  const [getMenu, setMenu] = useState(false);

  const toggleMenu = () =>{
    setMenu(!getMenu);
  }
  return (
    <nav className='fixed flex w-full justify-between items-center bg-white py-5 px-3 text-2xl text-navy font-bold z-1000'>
        <h1 className='flex items-center gap-2'><svg className='h-10' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs"><path id="SvgjsPath1087" d="M4 15.51a1 1 0 0 0 .71-.29L15.22 4.71a1 1 0 1 0-1.42-1.42L3.29 13.8a1 1 0 0 0 0 1.42 1 1 0 0 0 .71.29zm0 11.38a1 1 0 0 0 .71-.29L26.6 4.71a1 1 0 1 0-1.42-1.42L3.29 25.18a1 1 0 0 0 0 1.42 1 1 0 0 0 .71.29zm0 11.36a1 1 0 0 0 .71-.25L38 4.71a1 1 0 1 0-1.42-1.42L3.29 36.54a1 1 0 0 0 0 1.42 1 1 0 0 0 .71.29zm0 11.38a1 1 0 0 0 .71-.29L49.34 4.71a1 1 0 1 0-1.42-1.42L3.29 47.92a1 1 0 0 0 0 1.42 1 1 0 0 0 .71.29zM60.71 3.29a1 1 0 0 0-1.42 0l-56 56a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l56-56a1 1 0 0 0 0-1.42zm-1.42 11.37L14.66 59.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l44.63-44.63a1 1 0 0 0-1.42-1.42zm0 11.34L26 59.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l33.29-33.25A1 1 0 0 0 59.29 26zm0 11.4L37.4 59.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l21.89-21.89a1 1 0 0 0-1.42-1.42zm0 11.38L48.78 59.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L60.71 50.2a1 1 0 0 0-1.42-1.42z" data-name="Layer 9" fill="rgba(6, 0, 71, 1)"></path></svg>Nexxus</h1>
        
        <IoMenu onClick={toggleMenu} className='text-3xl' />
        <div className={`fixed font-inter font-semibold flex flex-col items-center justify-center z-10000 
          gap-10 top-0 left-0 h-screen w-screen text-white bg-navy transition-transform duration-300
          ${getMenu ? "translate-y-0" : "-translate-y-full"}`}
        >
          <IoCloseOutline className='text-4xl absolute right-5 top-10' onClick={toggleMenu} />

          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Projects</a>
          <a href="#">Blog</a>

        </div>
    </nav>
  )
}
