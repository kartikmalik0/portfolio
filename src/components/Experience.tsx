"use client"

import { fetchExp } from "@/actions/fetch-data"
import { useQuery } from "@tanstack/react-query"

const Experience = () => {


    const { data } = useQuery({
        queryKey: ["exp"],
        queryFn: async () => await fetchExp()
    })

    const formatDate = (date: Date | null) => {
        if (!date) return "Present";
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
        });
    };


    return (
        <section className="section">
            <div className=" flex items-center gap-4 text-5xl md:text-6xl mb-6">
                <h3 className=" text-whitetext font-[900]">Experience<span className="text-lightgreen">.</span></h3>
                <div className=" w-full h-[1px] opacity-30 bg-whitetext" />
            </div>
            {
                data?.exp && data.exp.map((exp) => (
                    <div key={exp.id} className=" mt-4 border-b border-whitetext border-opacity-[.1]">
                        {/* company */}
                        <div className=" flex justify-between items-center mb-3 text-whitetext">
                            <h3 className="font-extrabold text-[1.4rem]">{exp.companyName}</h3>
                            <div>
                                <span className="text-[20px] font-[300]">
                                    {formatDate(exp.joinDate)} - {formatDate(exp.leaveDate)}
                                </span>
                            </div>
                        </div>


                        {/* position  */}
                        <div className=" flex justify-between items-center mb-3 ">
                            <h3 className="font-extrabold text-[1.2rem] text-lightgreen">{exp.role}</h3>
                            <div>
                                <span className="text-[20px] font-[400] text-whitetext">{exp.location}</span>
                            </div>
                        </div>
                        {/* about company  */}
                        <div>
                            <p className="mb-6 text-[19px] font-extralight text-whitetext">
                                {exp.description}. {" "}
                            </p>
                        </div>
                        {/* skills in company */}
                        <div className=" flex flex-wrap gap-4 mb-6">
                            {
                                exp.techUsed.map((item, index) => (
                                    <span key={index} className=" bg-lightblack px-2 py-1 rounded-md text-whitetext">
                                        {item}
                                    </span>
                                ))
                            }
                        </div>
                    </div>
                ))
            }

        </section>
    )
}

export default Experience
