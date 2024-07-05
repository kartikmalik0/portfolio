"use client"

import { fetchSkills } from "@/actions/fetch-data"
import { useQuery } from "@tanstack/react-query"

type Skill = {
    id: string;
    skillName: string;
    skillType: string;
};



const Skills = () => {

    const { data } = useQuery({
        queryKey: ["skill"],
        queryFn: async () => await fetchSkills()
    })

    const skills: Skill[] = data?.skill[0].skills as Skill[]


    return (
        <div className="flex overflow-hidden flex-col ">
            <div className=" overflow-hidden w-fit ">
                <h3 className="flex text-whitetext items-center font-extrabold text-2xl gap-2 mb-3">
                    <svg className=" text-lightgreen" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1.8rem" width="1.8rem" xmlns="http://www.w3.org/2000/svg"><path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM513.1 518.1l-192 161c-5.2 4.4-13.1.7-13.1-6.1v-62.7c0-2.3 1.1-4.6 2.9-6.1L420.7 512l-109.8-92.2a7.63 7.63 0 0 1-2.9-6.1V351c0-6.8 7.9-10.5 13.1-6.1l192 160.9c3.9 3.2 3.9 9.1 0 12.3zM716 673c0 4.4-3.4 8-7.5 8h-185c-4.1 0-7.5-3.6-7.5-8v-48c0-4.4 3.4-8 7.5-8h185c4.1 0 7.5 3.6 7.5 8v48z"></path></svg>
                    Use at work
                </h3>
                <div className="flex flex-wrap gap-4 mb-6">
                    {skills?.map((skill) => (
                        skill.skillType === "work" && (
                            <span key={skill.skillName} className="bg-lightblack px-2 py-1 rounded-md text-whitetext">
                                {skill.skillName}
                            </span>
                        )
                    ))}
                </div>

            </div>
            <div className=" overflow-hidden w-fit ">
                <h3 className="flex text-whitetext items-center font-extrabold text-2xl gap-2 mb-3">
                    <svg className="text-lightgreen" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1.8rem" width="1.8rem" xmlns="http://www.w3.org/2000/svg"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zM288 421a48.01 48.01 0 0 1 96 0 48.01 48.01 0 0 1-96 0zm224 272c-85.5 0-155.6-67.3-160-151.6a8 8 0 0 1 8-8.4h48.1c4.2 0 7.8 3.2 8.1 7.4C420 589.9 461.5 629 512 629s92.1-39.1 95.8-88.6c.3-4.2 3.9-7.4 8.1-7.4H664a8 8 0 0 1 8 8.4C667.6 625.7 597.5 693 512 693zm176-224a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96z"></path></svg>              Use for fun
                </h3>
                <div className=" flex flex-wrap gap-4 mb-6">
                    {skills?.map((skill) => (
                        skill.skillType === "fun" && (
                            <span key={skill.skillName} className="bg-lightblack px-2 py-1 rounded-md text-whitetext">
                                {skill.skillName}
                            </span>
                        )
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Skills
