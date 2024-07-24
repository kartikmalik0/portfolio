"use client"

import { fetchExp } from "@/actions/fetch-data"
import { useQuery } from "@tanstack/react-query"
import BoxReveal from "./magicui/box-revel"
import { useEffect, useState } from "react"

const Experience = () => {

    const [isMobile, setIsMobile] = useState(false);

    const boxRevelColor = "#0aff9d"
    const { data } = useQuery({
        queryKey: ["exp"],
        queryFn: async () => await fetchExp()
    })

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        // Initial check on mount
        handleResize();

        // Event listener for window resize
        window.addEventListener('resize', handleResize);

        // Cleanup
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
                <BoxReveal boxColor={boxRevelColor} duration={0.5}>
                    <h3 className="text-whitetext font-[900]">
                        {isMobile ? "Exp" : "Experience"}
                        <span className="text-lightgreen">.</span>
                    </h3>
                </BoxReveal>
                <div className=" flex-1 h-[1px] opacity-30 bg-whitetext" />
            </div>
            {
                data?.exp && data.exp.map((exp) => (
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


                        {/* position  */}
                        <div className=" flex justify-between items-center mb-3 ">
                            <BoxReveal boxColor={boxRevelColor} duration={0.5}>
                                <h3 className="font-extrabold text-[1.2rem] text-lightgreen">{exp.role}</h3>
                            </BoxReveal>
                            <BoxReveal boxColor={boxRevelColor} duration={0.5}>
                                <div className="text-end">
                                    <span className=" text-[14px] sm:text-[20px] font-[400] text-whitetext ">{exp.location}</span>
                                </div>
                            </BoxReveal>
                        </div>
                        {/* about company  */}
                        <div>
                            <BoxReveal boxColor={boxRevelColor} duration={0.5}>
                                <p className="mb-6 text-[19px] font-extralight text-whitetext">
                                    {exp.description}. {" "}
                                </p>
                            </BoxReveal>
                        </div>
                        {/* skills in company */}
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
            }

        </section>
    )
}

export default Experience
