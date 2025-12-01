"use client"
import BoxReveal from "./text-revel/box-revel"
import { useEffect, useState } from "react"
import ExpSuspense from "./suspenses/ExpSuspense"

const Experience = () => {

    const [isMobile, setIsMobile] = useState(false);

    const boxRevelColor = "#0aff9d"

    // ✅ STATIC EXPERIENCE DATA
    const expData = [
        {
            id: "6",
            companyName: "YapYap",
            joinDate: new Date("2025-11-01"),
            leaveDate: null,
            role: "Founder",
            location: "Remote",
            description:
                "Building YapYap, a tool that helps creators engage faster on X and LinkedIn with smart, high-quality AI replies.",
            techUsed: ["Next.js", "AI", "Prisma", "PostgreSQL", "TypeScript"]
        },
        {
            id: "5",
            companyName: "Metanect",
            joinDate: new Date("2025-05-01"),
            leaveDate: new Date("2025-11-01"),
            role: "Founder",
            location: "Remote",
            description:
                "Built products with founders across Web3 and AI, focusing on fast experimentation and real user validation.",
            techUsed: ["Next.js", "LangChain", "AI", "tRPC", "PostgreSQL", "Web3", "Rust"]
        },
        {
            id: "4",
            companyName: "FeedAura",
            joinDate: new Date("2025-01-01"),
            leaveDate: new Date("2025-05-01"),
            role: "Founder",
            location: "Remote",
            description:
                "Created FeedAura, an AI-powered feedback collection tool that helps creators analyze content and gather insights instantly.",
            techUsed: ["Next.js", "LangChain", "AI", "tRPC", "PostgreSQL"]
        },
        {
            id: "3",
            companyName: "Viseatech",
            joinDate: new Date("2024-08-01"),
            leaveDate: new Date("2025-01-01"),
            role: "Full Stack Developer",
            location: "Remote • India",
            description:
                "Worked directly with clients, delivered production-grade apps using Next.js, Node.js, Prisma, AWS, and Docker. Helped the company acquire two new clients through consistent high-quality work.",
            techUsed: ["Next.js", "React", "Node.js", "Prisma", "Tailwind", "AWS", "Socket.io"]
        },
        {
            id: "2",
            companyName: "ReactLens",
            joinDate: new Date("2024-02-01"),
            leaveDate: new Date("2024-08-01"),
            role: "Founder",
            location: "Remote",
            description:
                "Building ReactLens, a faster and lightweight alternative to Vercel Analytics with developer-focused insights.",
            techUsed: ["Next.js", "Prisma", "PostgreSQL", "TypeScript"]
        },
        {
            id: "1",
            companyName: "MCSAM",
            joinDate: new Date("2023-08-01"),
            leaveDate: new Date("2024-02-01"),
            role: "Frontend Intern",
            location: "On-site • India",
            description:
                "Completed a 6-month internship focused on frontend fundamentals, UI workflows, and building production-ready components.",
            techUsed: ["HTML", "CSS", "JavaScript", "React"]
        }
    ];



    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);


    const formatDate = (date: Date | null) => {
        if (!date) return "Present";
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
        });
    };


    return (
        <section className="section">
            <div className=" flex px-4 sm:px-0 items-center gap-4 text-5xl md:text-6xl mb-6">
                <h3 className="text-whitetext font-[900]">
                    {isMobile ? "Exp" : "Experience"}
                    <span className="text-lightgreen">.</span>
                </h3>
                <div className=" flex-1 h-[1px] opacity-30 bg-whitetext" />
            </div>

            {
                expData.length > 0 ? expData.map((exp) => (
                    <div key={exp.id} className=" mt-4 px-4 sm:px-0 border-b border-whitetext border-opacity-[.1]">

                        {/* company */}
                        <div className=" flex justify-between items-center mb-3 text-whitetext">
                            <BoxReveal boxColor={boxRevelColor} duration={0.5}>
                                <h3 className="font-extrabold text-[1.4rem]">{exp.companyName}</h3>
                            </BoxReveal>

                            <BoxReveal boxColor={boxRevelColor} duration={0.5}>
                                <div className="text-end">
                                    <span className="text-[14px] sm:text-[20px] font-[300] ">
                                        {formatDate(exp.joinDate)} - {formatDate(exp.leaveDate)}
                                    </span>
                                </div>
                            </BoxReveal>
                        </div>

                        {/* position */}
                        <div className=" flex justify-between items-center mb-3 ">
                            <BoxReveal boxColor={boxRevelColor} duration={0.5}>
                                <h3 className="font-extrabold text-[1.2rem] text-lightgreen">{exp.role}</h3>
                            </BoxReveal>

                            <BoxReveal boxColor={boxRevelColor} duration={0.5}>
                                <div className="text-end">
                                    <span className=" text-[14px] sm:text-[20px] font-[400] text-whitetext ">
                                        {exp.location}
                                    </span>
                                </div>
                            </BoxReveal>
                        </div>

                        {/* about company */}
                        <div>
                            <BoxReveal boxColor={boxRevelColor} duration={0.5}>
                                <p className="mb-6 text-[19px] font-extralight text-whitetext">
                                    {exp.description}.
                                </p>
                            </BoxReveal>
                        </div>

                        {/* skills */}
                        <BoxReveal boxColor={boxRevelColor} duration={0.5}>
                            <div className=" flex flex-wrap gap-4 mb-6">
                                {
                                    exp.techUsed.map((item, index) => (
                                        <span key={index} className=" bg-lightblack px-2 py-1 rounded-md text-whitetext">
                                            {item}
                                        </span>
                                    ))
                                }
                            </div>
                        </BoxReveal>

                    </div>
                ))
                    :
                    <ExpSuspense />
            }

        </section>
    )
}

export default Experience
