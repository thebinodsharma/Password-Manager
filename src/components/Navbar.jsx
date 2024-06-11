import React from 'react'
import lottie from "lottie-web";
import { defineElement } from "@lordicon/element";


const Navbar = () => {
    defineElement(lottie.loadAnimation);
    return (
        <div className='flex justify-around items-center h-[9vh] bg-slate-500 text-white'>
            <h1 className='text-3xl font-bold text-black'>&lt;The<span className='text-green-500 font-bold'>Pass /&gt;</span></h1>
            <ul className='flex gap-20 text-2xl font-medium text-black items-center'>
                <li className='cursor-pointer flex flex-col items-center '><lord-icon
                    src="https://cdn.lordicon.com/wmwqvixz.json"
                    
                    trigger="hover"
                >
                </lord-icon><span>Home</span></li>
                <li className='cursor-pointer flex flex-col items-center'><lord-icon 
                    src="https://cdn.lordicon.com/ogkflacg.json"
                    trigger="hover"
                    
                    >

                </lord-icon><span>Refresh</span></li>
                <li className='cursor-pointer flex flex-col items-center'><lord-icon
                    src="https://cdn.lordicon.com/hrjifpbq.json"
                    trigger="hover"
                    >

                </lord-icon><span>Creator</span></li>

            </ul>
        </div>
    )
}

export default Navbar