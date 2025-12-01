"use client";

import About from "./About";
import Contact from "./Contact";
import Experience from "./Experience";
import Navbar from "./Navbar";
import { Element } from "react-scroll";

import Projects from "./Projects";
import MaxWidthWrapper from "@/providers/maxWidthWrapper";
import Hero from "./Hero";

const heroData = [
  {
    id: "1",
    name: "Kartik Malik",
    role: "Full-Stack Developer",
    roleDescription: "I build high-performance apps with React, Next.js & AI.",
    email: "example@gmail.com",
    phoneNumber: "1234567890",
    resumeUrl: null,
  },
];

const aboutData = [
  {
    id: "1",
    description1: "👋 Hey, I’m Kartik Malik a Full-Stack Developer who enjoys turning ideas into smooth, fast web experiences. I work with React.js, Next.js, Prisma, PostgreSQL, tRPC, and AI tools like LangChain.",
    description2: "I’m a 3x founder, currently building YapYap, a tool that changes how you engage on X and LinkedIn helping creators reply faster, grow quicker, and stay consistent.",
    description3: "I focus on creating products that scale, fit into marketing workflows, and make growth easier. If you enjoy tech or building cool things, let’s connect always happy to chat and create together.",
  },
];

export default function HomePage() {
  return (
    <div className="bg-[#111]">
      <Navbar />
      <MaxWidthWrapper>
        <Hero />
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
  );
}
