import React from 'react'
import brandImage from "../../assets/woman-8852668_1920.jpg"
import Button from '../Button'
import Strip from '../Strip'
export default function Hero() {
  return (
    <div className='relative min-h-[100vh] py-10'>
        <div className='text-center'>
          <p className='text-xl'>- Hello</p>
          <h2 className='text-7xl font-bold'>I'm <span className='text-primary underline'>Noman Khial,</span> <br/> ReactJs Developer</h2>

          <div className='overflow-hidden  max-w-[700px] mx-auto absolute bottom-30 left-1/2 translate-x-[-50%]'>
            <img src={brandImage } className='rounded-lg w-full' alt='brand image' fetchPriority='high'/>
          </div>
          <div className='flex items-center p-2 gap-2  max-w-[500px] mx-auto bg-white rounded-full border absolute bottom-40 left-1/2 translate-x-[-50%]'>
            <Button label='Portfolio'/>
            <Button label='Hire Me'/>
          </div>

            <div className='absolute left-16 bottom-40 text-start flex flex-col gap-1 text-slate-900'>
            <h3 className='text-2xl font-bold'>450+</h3>
            <p className='text-xl'>Happy Clients</p>
            <div className='flex'>
              <img className='w-16 h-16 rounded-full' src={brandImage} />
            </div>
        </div>

        {/* circle */}

        <div className='text-2xl w-40 h-40 bg-[#f9bc02] flex items-center justify-center rounded-full text-black font-bold   absolute right-16 top-16 border-8 border-white border-dashed'>
         Hire Me
        </div>

        {/* bottom strip */}

        <Strip/>
        </div>
      
    </div>
  )
}
