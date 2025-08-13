import { useState } from "react"
import menuLink from "./data.js"
import { NavLink } from 'react-router'
export default function Navbar() {
  const [activeLink, setActiveLink] = useState('home')

  return (
    <header className='max-w-[90%] mx-auto py-6 bg-white shadow-md rounded-lg'>
        <nav className='flex justify-between items-center'>
         <h1 className="text-3xl font-bold">NomanKial</h1>
            <ul className='hidden md:flex gap-10'>
               {
                menuLink.map((menu, id)=> <NavLink className={`${menu === activeLink ? 'border-b text-primary' : ''}`} onClick={()=> setActiveLink(menu)} key={id}>{menu}</NavLink>)
               }
            </ul>
            <button className='bg-primary px-8 py-3 rounded-full text-white  font-bold '>Contact Me</button>
        </nav>
    </header>
  )
}
