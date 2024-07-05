import React from 'react'
import { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

export default function Navbar() {
    const [navbar, setNavbar] = useState(false);

    const handleNav = () =>{
        setNavbar(!navbar)
    }
  return (
    <div className=' flex justify-between items-center bg-black text-gray-400 h-[100px] max-w-6xl mx-auto px-1'>
        
        {/* Navbar with the name & menu */}
        <h1 className='text-3xl font-bold primary-color ml-4'>Ajay Prajapati</h1>
        <ul className='hidden md:flex'>
            <li className='p-3 hover:text-red-600'><a href="#about">About</a></li>
            <li className='p-3 hover:text-red-600'><a href="#skills">Skills</a></li>
            <li className='p-3 hover:text-red-600'><a href="#projects">Projects</a></li>
            <li className='p-3 hover:text-red-600'><a href="#contact">Contact</a></li>
        </ul>

        {/* Hamburger menu & close button */}
        <div onClick={handleNav} className='block md:hidden mr-6'>
            {navbar ?<AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
        </div>


        {/* use the ternary opertor mobile navugation */}
        <div className={navbar ? 'z-10 fixed h-full left-0 top-0 w-[60%] bg-[#202121] ease-in-out duration-500' : 'fixed left-[-100%]'}>
            <h1 className='text-3xl primary-color m-4'>Ajay Prajapati</h1>
            <ul className="p-8 text-2xl">
                <li className='p-2'><a href="#home">Home</a></li>
                <li className='p-2'><a href="#About">About</a></li>
                <li className='p-2'><a href="#skills">Skills</a></li>
                <li className='p-2'><a href="#projects">Projects</a></li>
                <li className='p-2'><a href="#contact">Contact</a></li>
            </ul>
        </div>
    </div>
  )
}
