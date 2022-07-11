import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import foto from '../assets/foto.jpg'


export const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-black flex items-center'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-pink-600 text-xl'>Hello! nice to meet you my name is:</p>
            <h1 className='text-6xl sm:text-7xl font-bold text-[#ccd6f6] '>Matias Montenegro</h1>
            <h2 className='text-6xl sm:text-7xl font-bold text-[#8892b0]'>I am a Backend Developer</h2>
           
        </div>

          <img className='rounded-2xl px-8 pt-20 invisible lg:visible' src={foto} alt="" />
          
    </div>
  )
}
