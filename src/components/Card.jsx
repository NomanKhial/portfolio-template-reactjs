import React from 'react'
import { DiJavascript } from 'react-icons/di'
import { GrReactjs } from 'react-icons/gr'
import { IoArrowForwardCircle, IoLogoJavascript } from 'react-icons/io5'
import { TbBrandReactNative } from 'react-icons/tb'

const servicesProvided = [
    {
        skill: 'ReactJs',
        description: `I have expertise in creating robust and precise React application. That just don't suck`,
        Icon: GrReactjs,
        linkText: 'learn more',
    },
    {
        skill: 'React Native',
        description: `I have expertise in creating robust and precise React Native application. That just don't suck`,
                Icon: TbBrandReactNative,

        linkText: 'learn more',
    },

     {
        skill: 'Web Development',
        description: `I hold strong grip over HTML, CSS and Javascript, which makes it a pice of cake for me when creating web apps.`,
                Icon: IoLogoJavascript,

        linkText: 'learn more',
    },


]

export default function Card() {
  return (
    <div className='grid md:grid-cols-3 gap-2 text-black'>
            {
                servicesProvided.map(({skill, description, linkText, Icon}, index)=>(
                    <div className='bg-white max-w-[600px] h-auto p-4 rounded-lg' key={index}>
                    <h1 className='text-xl bg-secondary inline-block text-slate-600 p-1
                     px-4 rounded-full'>{skill}</h1>
                    <div className='flex items-center mt-3 gap-2 '>
                        <Icon size={90}/>
                        <p>{description}</p>
                    </div>
                        <p className='flex justify-end gap-2 cursor-pointer items-center'>{linkText} <IoArrowForwardCircle size={40}/> </p>
                    </div>
                ))
            }
    </div>
  )
}
