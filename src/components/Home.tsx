import About from "./About"
import Hero from "./Hero"
import Navbar from "./Navbar"
import Projects from "./Projects"

const HomePage = () => {
  return (
    <div className="bg-[#111]">
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
    </div>
  )
}

export default HomePage
