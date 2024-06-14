"use client"
import { useParams } from "next/navigation";
import { useState } from "react";

const Sidenav = () => {
    const projects = useParams(); // projectId will be "projects" in this case
    console.log(projects);

    const [activeLink, setActiveLink] = useState<number>();

    const link = [
        {
            href: "#about",
            text: "About"
        },
        {
            href: "#projects",
            text: "Projects"
        },
        {
            href: "#exp",
            text: "Exp."
        },
        {
            href: "#contact",
            text: "Contact"
        }
    ];

    const handleClick = (index:number) => {
        setActiveLink(index);
    };

    return (
        <nav className="sticky  top-0 left-0 h-[100vh] text-primary flex flex-col items-center overflow-scroll" style={{ scrollbarWidth: "none" }}>
            <span className="font-[900] w-[45px] h-[45px] text-2xl my-[18px] bg-lightdark flex items-center justify-center text-whitetext">
                K
                <span className="text-lightgreen">.</span>
            </span>
            {
                link.map((link, index) => (
                    <a
                        href={link.href}
                        onClick={() => handleClick(index)}
                        className={`h-[100px] w-full font-[300] text-[18px] flex justify-center items-center border-r ${activeLink === index ? 'border-r-lightgreen' : 'border-transparent'} hover:border-r-lightgreen hover:transition duration-300 ease-in-out`}
                        key={index}
                        style={{ writingMode: "vertical-lr" }}>
                        {link.text}
                    </a>
                ))
            }
        </nav>
    )
}

export default Sidenav;
