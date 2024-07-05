"use client"
import About from "./About"
import Contact from "./Contact"
import Experience from "./Experience"
import Hero from "./Hero"
import Navbar from "./Navbar"
import { Element } from 'react-scroll';

import Projects from "./Projects"

const HomePage = () => {
  return (
    <div className="bg-[#111]">
      <Navbar />
      <Hero />
      <Element name="about"><About /></Element>
      <Element name="projects"><Projects /></Element>
      <Element name="experience"><Experience /></Element>
      <Element className="mb-12" name="contact"><Contact /></Element>
    </div>
  )
}

export default HomePage
