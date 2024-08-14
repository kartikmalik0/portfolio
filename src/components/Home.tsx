"use client"
import About from "./About"
import Contact from "./Contact"
import Experience from "./Experience"
import Navbar from "./Navbar"
import { Element } from 'react-scroll';

import Projects from "./Projects"
import MaxWidthWrapper from "@/providers/maxWidthWrapper"
import Hero from "./Hero"

type HeroData = {
  id: string;
  name: string;
  role: string;
  roleDescription: string;
  email: string;
  phoneNumber: string;
  resumeUrl: string | null;
}[]
type AboutData = {
  id: string;
  description1: string;
  description2: string;
  description3: string;
}[]

const HomePage = ({ heroData, aboutData }: { heroData: HeroData, aboutData: AboutData }) => {
  return (
    <div className="bg-[#111]">
      <Navbar />
      <MaxWidthWrapper>
        <Hero heroData={heroData} />
        <Element name="about">
          <About aboutData={aboutData} />
        </Element>
        <Element name="projects">
          <Projects />
        </Element>
        <Element name="experience">
          <Experience />
        </Element>
        <Element id="contactSection" className="mb-32" name="contact">
          <Contact />
        </Element>
      </MaxWidthWrapper>
    </div>
  )
}

export default HomePage
