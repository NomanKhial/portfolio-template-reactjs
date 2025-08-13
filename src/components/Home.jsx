import Hero from './Hero/Hero'
import Navbar from './Navbar/Navbar'
import Services from './Services'

export default function Home() {
  return (
    <div className="parent">
        <Navbar/>
        <Hero/>
        <Services/>
    </div>
  )
}
