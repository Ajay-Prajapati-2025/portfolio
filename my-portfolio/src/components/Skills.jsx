import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import react from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
import ja from '../assets/java_p.png'
import mon from '../assets/mo.jpg'
import node from '../assets/node.png'
import ms from '../assets/mysql.jpg'

export default function Skills() {
  return (
    <div className=' bg-black flex flex-col max-w-6xl mx-auto my-24 gap-y-20 py-10'id='skills'>
        <div className='text-center max-w-6xl'>
        <h2 className="text-gray-400 text-4xl">
            My Skills
        </h2>
        </div>
        
        <div className='flex flex-row w-full mx-auto justify-between items-center flex-wrap gap-5'>
        <div className="flex flex-col items-center m-4 text-gray-400 border p-5 rounded-lg ">
            <img src={html} alt="Html logo" className='w-32'/>
            <p className='mt-2'>HTML</p>
        </div>

        <div className="flex flex-col items-center m-4  text-gray-400 border p-5 rounded-lg ">
            <img src={css} alt="css logo" className='w-32'/>
            <p className='mt-2'>CSS</p>
        </div>

        <div className="flex flex-col items-center m-4  text-gray-400 border p-5 rounded-lg ">
            <img src={javascript} alt="javascript logo" className='w-32'/>
            <p className='mt-2'>Javascript</p>
        </div>

        <div className="flex flex-col items-center m-4 text-gray-400 border p-5 rounded-lg ">
            <img src={react} alt="react logo" className='w-32'/>
            <p className='mt-2'>React</p>
        </div>

        <div className="flex flex-col items-center m-4  text-gray-400 border p-5 rounded-lg">
            <img src={tailwind} alt="tailwind logo" className='w-32'/>
            <p className='mt-2'>Tailwind</p>
        </div>

        <div className="flex flex-col items-center m-4  text-gray-400 border p-5 rounded-lg">
            <img src={ja} alt="tailwind logo" className='w-32 object-cover'/>
            <p className='mt-2'>Java</p>
        </div>

        <div className="flex flex-col items-center m-4  text-gray-400 border p-5 rounded-lg">
            <img src={node} alt="tailwind logo" className='w-36 object-cover'/>
            <p className='mt-2'>Node</p>
        </div>

        <div className="flex flex-col items-center m-4  text-gray-400 border p-5 rounded-lg">
            <img src={mon} alt="tailwind logo" className='w-28 object-cover'/>
            <p className='mt-2'>MongoDB</p>
        </div>

        <div className="flex flex-col items-center m-4  text-gray-400 border p-5 rounded-lg">
            <img src={ms} alt="tailwind logo" className='w-32 object-cover'/>
            <p className='mt-2'>MySQL</p>
        </div>

        

        
        </div>
        
    </div>
  )
}
