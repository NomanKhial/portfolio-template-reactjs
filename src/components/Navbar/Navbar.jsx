import { useEffect, useState } from "react"
import menuLink from "./data.js"
import { NavLink, useLocation } from 'react-router'
export default function Navbar() {
  const [activeLink, setActiveLink] = useState('home')
 
  const location = useLocation();

  function handleScroll() {
     if (location.hash) {
      const section = document.querySelector(location.hash)
     
      if (section) {
         section.scrollIntoView({behavior: 'smooth'})
      }
    }
  }

  useEffect(handleScroll, [location.hash])

  return (
    <header className='max-w-[90%] mx-auto py-6 bg-white  border-b border-black/10'>
        <nav className='flex justify-between items-center'>
         <NavLink to='/' className="md:text-3xl font-bold">NomanKial</NavLink>
            <ul className='hidden md:flex gap-10'>
               {
                menuLink.map((menu, id)=> <NavLink to={`#${menu.toLowerCase()}`} className={`${menu === activeLink ? 'border-b text-primary' : ''}`} onClick={()=> setActiveLink(menu)} key={id}>{menu}</NavLink>)
               }
            </ul>
            <NavLink to='#contact'  className='bg-primary hover:text-white px-4 py-1 md:px-8 md:py-3 rounded-full text-white  font-bold '>Contact Me</NavLink>
        </nav>
    </header>
  )
}
