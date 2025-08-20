import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import Card from './Card'
import Button from './Button'

export default function Services() {
  return (
   <section id='services'  className='min-h-screen pt-20 bg-primary/90 py-2 '>
     <div className='relative'>
        <h2 className="absolute top-0 left-0 -z-10 text-4xl md:text-9xl tracking-wide font-extrabold text-black">Services</h2>
        <div className='py-2 max-w-[90%] h-screen m-auto text-white'>
           <div className='flex flex-col h-full justify-center gap-6'>
                <div className='flex justify-between flex-wrap gap-4 items-center'>
                    {/* left side */}
                    <div className='flex flex-col gap-1'>
                        <p className='text-3xl'> - Services</p>
                        <h2 className='text-6xl font-bold'>My <span className='text-secondary'>Services</span></h2>
                    </div>

                    {/* right side */}
                    <Button label="View All Services" themeButton={true}  ThemeBtnIcon={BsArrowRight} />

                </div>
                    {/* bottom section */}
                <Card/>
           </div>
        </div>
    </div>
   </section>
  )
}
