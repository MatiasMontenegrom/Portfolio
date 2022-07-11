import React from 'react'

export const About = () => {
  return (
    <div name='about' className='w-full h-screen 
        bg-black text-gray-300'>
        <div className='flex flex-col justify-center 
            items-center   w-full h-full'>

            <div className='max-w-[1000px] w-full grid 
                grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
                    </div>
            <div></div>
            </div>

                <div className='max-w-[1000px] w-full grid 
                        sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold '>
                        <p>Soy Matias, nice to meet you.</p>
                    </div>
                    <div>
                        <p text-xl>Since I can remember I have loved technology, when I discovered programming it was something magical and without a doubt it was something I wanted to learn. Every day I try to acquire knowledge to achieve ever greater feats within this great world.</p>
                    </div>
                    
            </div>

        </div>
    </div>
  )
}
