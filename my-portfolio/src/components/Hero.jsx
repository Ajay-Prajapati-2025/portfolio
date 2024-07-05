import React from 'react'
import myImage from '../assets/photo.jpg'
import { TypeAnimation } from 'react-type-animation'

export default function Hero() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-24 max-w-6xl mx-auto py-8 bg-black my-16'>

        {/* For the image */}
        <div className=" col-span-1 my-auto mx-auto w-[300px] h-auto lg:w-[400px]">
            <img src={myImage} alt="My image" className='w-80 h-auto rounded-xl  shadow-xl shadow-orange-500' />
        </div>

        {/* for the text */}
        <div className="col-span-2 px-5 flex flex-col gap-4 justify-center">
            <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                <span className='primary-color'>
                    I'm a</span> <br />
                    <TypeAnimation sequence={ [
                        "Ajay Prajapati",
                        1000,
                        "MernStack Dev.",
                        1000,
                        "Programming skills",
                        1000,
                    ]}
                    wrapper='span'
                    speed={50}
                    repeat={Infinity}/>
            </h1>

            <p className='text-white sm:text-lg my-6 lg:text-xl'>
                My name Ajay Prajapati. I am Mern Stack Developer and Problem solving skills like Java etc.
            </p>

            <div className="my-8">
                <a href="/" className='px-6 py-3 w-full rounded-xl mr-4 bg-gradient-to-br from-orange-500 to-pink-500 text-white'>Resume</a>
                <a href="#contact" className='px-6 py-3 w-full rounded-xl  border border-gray-400 hover:bg-gradient-to-br from-orange-500 to-pink-500 text-white hover:border-none'>Contact</a>
            </div>
        </div>
    </div>
  )
}
