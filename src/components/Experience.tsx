
const Experience = () => {
    const chip = [
        { title: "JavaScipt" },
        { title: "TypeScript" },
        { title: "React" },
        { title: "Redux" },
        { title: "NodeJs" },
        { title: "Next.js" },
        { title: "GitHub" },
        { title: "Jira" },
        { title: "Prisma" },
    ]
    return (
        <section className="section">
            <div className=" flex items-center gap-4 text-5xl md:text-6xl mb-6">
                <h3 className=" text-whitetext font-[900]">Experience<span className="text-lightgreen">.</span></h3>
                <div className=" w-full h-[1px] opacity-30 bg-whitetext" />
            </div>
            <div className=" mt-4 border-b border-whitetext border-opacity-[.1]">
                {/* company */}
                <div className=" flex justify-between items-center mb-3 text-whitetext">
                    <h3 className="font-extrabold text-[1.4rem]">VISETECH</h3>
                    <div>
                        <span className="text-[20px] font-[300]">2023 - Present</span>
                    </div>
                </div>


                {/* position  */}
                <div className=" flex justify-between items-center mb-3 ">
                    <h3 className="font-extrabold text-[1.2rem] text-lightgreen">Software Engineer</h3>
                    <div>
                        <span className="text-[20px] font-[400] text-whitetext">Bhiwani</span>
                    </div>
                </div>
                {/* about company  */}
                <div>
                    <p className="mb-6 text-[19px] font-extralight text-whitetext">
                        A real-time coaching app for students learning to paint. This app is my baby, designed and built on my own. {" "}
                    </p>
                </div>
                {/* skills in company */}
                <div className=" flex flex-wrap gap-4 mb-6">
                    {
                        chip.map((item, index) => (
                            <span key={index} className=" bg-lightblack px-2 py-1 rounded-md text-whitetext">
                                {item?.title}
                            </span>
                        ))
                    }
                </div>
            </div>
            <div className=" mt-4 border-b border-whitetext border-opacity-[.1]">
                {/* company */}
                <div className=" flex justify-between items-center mb-3 text-whitetext">
                    <h3 className="font-extrabold text-[1.4rem]">VISETECH</h3>
                    <div>
                        <span className="text-[20px] font-[300]">2023 - Present</span>
                    </div>
                </div>


                {/* position  */}
                <div className=" flex justify-between items-center mb-3 ">
                    <h3 className="font-extrabold text-[1.2rem] text-lightgreen">Software Engineer</h3>
                    <div>
                        <span className="text-[20px] font-[400] text-whitetext">Bhiwani</span>
                    </div>
                </div>
                {/* about company  */}
                <div>
                    <p className="mb-6 text-[19px] font-extralight text-whitetext">
                        A real-time coaching app for students learning to paint. This app is my baby, designed and built on my own. {" "}
                    </p>
                </div>
                {/* skills in company */}
                <div className=" flex flex-wrap gap-4 mb-6">
                    {
                        chip.map((item, index) => (
                            <span key={index} className=" bg-lightblack px-2 py-1 rounded-md text-whitetext">
                                {item?.title}
                            </span>
                        ))
                    }
                </div>
            </div>
            <div className=" mt-4 border-b border-whitetext border-opacity-[.1]">
                {/* company */}
                <div className=" flex justify-between items-center mb-3 text-whitetext">
                    <h3 className="font-extrabold text-[1.4rem]">VISETECH</h3>
                    <div>
                        <span className="text-[20px] font-[300]">2023 - Present</span>
                    </div>
                </div>


                {/* position  */}
                <div className=" flex justify-between items-center mb-3 ">
                    <h3 className="font-extrabold text-[1.2rem] text-lightgreen">Software Engineer</h3>
                    <div>
                        <span className="text-[20px] font-[400] text-whitetext">Bhiwani</span>
                    </div>
                </div>
                {/* about company  */}
                <div>
                    <p className="mb-6 text-[19px] font-extralight text-whitetext">
                        A real-time coaching app for students learning to paint. This app is my baby, designed and built on my own. {" "}
                    </p>
                </div>
                {/* skills in company */}
                <div className=" flex flex-wrap gap-4 mb-6">
                    {
                        chip.map((item, index) => (
                            <span key={index} className=" bg-lightblack px-2 py-1 rounded-md text-whitetext">
                                {item?.title}
                            </span>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Experience
