'use client';

import { useState } from 'react';
import {Link} from "react-scroll"
const Sidenav = () => {
  const [activeLink, setActiveLink] = useState<number>();

  const links = [
    {
      href: "about",
      text: "About"
    },
    {
      href: "projects",
      text: "Projects"
    },
    {
      href: "experience",
      text: "Exp."
    },
    {
      href: "contact",
      text: "Contact"
    }
  ];

  const handleSetActive = (index: number) => {
    setActiveLink(index);
  };

  return (
    <nav className="sticky top-0 left-0 h-[100vh] text-primary flex flex-col items-center overflow-scroll" style={{ scrollbarWidth: "none" }}>
      <span className="font-[900] w-[45px] h-[45px] text-2xl my-[18px] bg-lightdark flex items-center justify-center text-whitetext">
        K
        <span className="text-lightgreen">.</span>
      </span>
      {links.map((link, index) => (
        <Link
          key={index}
          activeClass="border-r-lightgreen"
          to={link.href}
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          onSetActive={() => handleSetActive(index)}
          className={`h-[100px] cursor-pointer w-full font-[300] text-[18px] flex justify-center items-center border-r ${activeLink === index ? 'border-r-lightgreen' : 'border-transparent'} hover:border-r-lightgreen hover:transition duration-300 ease-in-out`}
          style={{ writingMode: "vertical-lr" }}
        >
          {link.text}
        </Link>
      ))}
    </nav>
  );
};

export default Sidenav;
