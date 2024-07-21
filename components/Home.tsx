"use client"
import About from "./About"
import Contact from "./Contact"
import Experience from "./Experience"
import Hero from "./Hero"
import Navbar from "./Navbar"
import { Element } from 'react-scroll';

import Projects from "./Projects"
import MaxWidthWrapper from "@/providers/maxWidthWrapper"

const HomePage = () => {
  return (
    <div className="bg-[#111]">
      <Navbar />
      <MaxWidthWrapper>
        <Hero />
        <Element name="about"><About /></Element>
        <Element name="projects"><Projects /></Element>
        <Element name="experience"><Experience /></Element>
        <Element id="contactSection" className="mb-32" name="contact"><Contact /></Element>
      </MaxWidthWrapper>
    </div>
  )
}

export default HomePage
