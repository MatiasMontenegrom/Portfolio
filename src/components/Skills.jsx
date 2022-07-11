import React from 'react'

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Sequelize from '../assets/sequelize.png';
import Mongo from '../assets/mongo.png'

export const Skills = () => {
  return (
    <div name='skills' className='bg-black text-gray-300 w-full h-screen '>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
                <p className='py-4 text-xl'>These are some of the technologies with which he worked</p>
            </div>
        

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
            <div className='shadow-md shadow=[#040c16] hover:scale-110 duration-500'>
                <img src={HTML} alt="" className='w-20 mx-auto'/>
                <p className='my-4'>HTML</p>
            </div>
            <div className='shadow-md shadow=[#040c16] hover:scale-110 duration-500'>
                <img src={CSS} alt="" className='w-20 mx-auto'/>
                <p className='my-4'>CSS</p>
            </div>
            <div className='shadow-md shadow=[#040c16] hover:scale-110 duration-500'>
                <img src={JavaScript} alt="" className='w-20 mx-auto'/>
                <p className='my-4'>JavaScript</p>
            </div>
            <div className='shadow-md shadow=[#040c16] hover:scale-110 duration-500'>
                <img src={Node} alt="" className='w-20 mx-auto'/>
                <p className='my-4'>Node</p>
            </div>
            <div className='shadow-md shadow=[#040c16] hover:scale-110 duration-500'>
                <img src={ReactImg} alt="" className='w-20 mx-auto'/>
                <p className='my-4'>React</p>
            </div>
            
            <div className='shadow-md shadow=[#040c16] hover:scale-110 duration-500'>
                <img src={Mongo} alt="" className='w-20 mx-auto'/>
                <p className='my-4'>Mongo</p>
            </div>
            <div className='shadow-md shadow=[#040c16] hover:scale-110 duration-500'>
                <img src={GitHub} alt="" className='w-20 mx-auto'/>
                <p className='my-4'>GitHub</p>
            </div>
            <div className='shadow-md shadow=[#040c16] hover:scale-110 duration-500'>
                <img src={Sequelize} alt="" className='w-20 mx-auto'/>
                <p className='my-4'>Sequelize </p>
            </div>

        </div>
        </div>

    </div>
  )
}
