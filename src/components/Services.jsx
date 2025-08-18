import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import Card from './Card'

export default function Services() {
  return (
    <div id='services' className='h-screen pt-20 relative'>
        <h2 className=" absolute top-0 left-0 z-10 text-[250px] tracking-wide font-extrabold text-gray-600/50">Services</h2>
        <div className='absolute z-20 bg-primary/90 inset-0 h-full'>
           <div className=' mt-32 h-full max-w-[70%] m-auto text-white'>
                <div className='flex justify-between items-center'>
                    {/* left side */}
                    <div className='flex flex-col gap-1'>
                        <p className='text-3xl'> - Services</p>
                        <h2 className='text-6xl font-bold'>My <span className='text-secondary'>Services</span></h2>
                    </div>

                    {/* right side */}
                    <div className='flex gap-3 items-center justify-between overflow-hidden text-black bg-white rounded-full w-60 h-14'>
                        <BsArrowRight size={40} color='white' className=' ml-2 bg-primary rounded-full w-10 p-2 h-10'/>
                        <button className='flex-1 bg-secondary h-full text-gray-800 font-bold  rounded-full'>View All Services</button>
                    </div>

                </div>
                    {/* bottom section */}
                    <Card/>
           </div>
        </div>
    </div>
  )
}
