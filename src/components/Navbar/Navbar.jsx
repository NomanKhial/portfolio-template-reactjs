import { useEffect, useState } from "react"
import menuLink from "./data.js"
import { Link, NavLink, useLocation } from 'react-router'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdMenu, MdMenuOpen } from "react-icons/md";
export default function Navbar() {
  const [activeLink, setActiveLink] = useState('home')
 const [menuVisible, setMenuVisiblity] = useState(false)
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
    <header className=' fixed left-0 right-0 w-full z-[1000] top-0 mx-auto py-6 bg-white  border-b border-black/10'>
        <nav className=' flex justify-evenly  items-center'>
         <NavLink to='/' className="md:text-2xl text-xl font-bold" onClick={()=>{
          setActiveLink('home')
           scrollTo({top: 0, behavior:'smooth'})} }>NomanKial</NavLink>
            <ul className='hidden md:flex gap-10'>
               {
                menuLink.map((menu, id)=> <NavLink to={`#${menu.toLowerCase()}`} className={`${menu === activeLink ? 'border-b text-primary' : ''}`} onClick={()=> setActiveLink(menu)} key={id}>{menu}</NavLink>)
               }
            </ul>


             <ul className={` ${menuVisible === true ? '-translate-x-0' : 'translate-x-full'} duration-150 md:hidden fixed flex flex-col inset-0 z-[99]  p-10 bg-white w-full`}>
             <button onClick={()=> setMenuVisiblity(false)} className="text-primary self-end">
              <MdMenuOpen size={40}/>
             </button>
               {
                menuLink.map((menu, id)=> <NavLink to={`#${menu.toLowerCase()}`} className={`${menu === activeLink ? 'border-b text-primary' : ''} mb-6`} onClick={()=> {
                  setMenuVisiblity(false)
                  setActiveLink(menu)}} key={id}>{menu}</NavLink>)
               }
            </ul>
            
              <ul className="inline-flex items-center gap-4">
              <li>
                <NavLink to='#contact'  className='bg-primary hidden md:block  animate-pulse  hover:text-white px-4 py-1 md:px-8 md:py-3 rounded-full text-white  font-bold '>Contact Me</NavLink>
              </li>
              <li>
                <Link to='https://github.com/NomanKhial'> <FaGithub size={30} color="black"/> </Link>
              </li>
              <li>
                <Link to='https://pk.linkedin.com/in/noman-khial-2b804035a'> <FaLinkedin size={30} color="#0077B5"/> </Link>
              </li>

              <button onClick={()=> setMenuVisiblity(true)} className="text-primary self-end md:hidden">
              <MdMenu size={40}/>
             </button>
  
              </ul>
        </nav>
    </header>
  )
}
