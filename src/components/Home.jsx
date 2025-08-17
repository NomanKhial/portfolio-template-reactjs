import About from './About'
import Contact from './Contact'
import Hero from './Hero/Hero'
import Navbar from './Navbar/Navbar'
import Pricing from './Pricing'
import Projects from './Projects'
import Services from './Services'
import Testimonials from './Testimonials'

export default function Home() {
  return (
    <div className="parent">
        <Navbar/>
        <Hero/>
        <Services/>
        <About/>
        <Projects/>
        <Pricing/>
        <Contact/>
        <Testimonials/>
    </div>
  )
}
