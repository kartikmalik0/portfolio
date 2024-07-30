"use client"
import { fetchProjects } from "@/actions/fetch-data"
import { useInfiniteQuery, useQuery } from "@tanstack/react-query"
import Image from "next/image"
import BoxReveal from "./text-revel/box-revel"
import { useEffect, useState } from "react"



interface Project {
    id: string;
    title: string;
    imageUrl: string;
    liveUrl: string;
    githubUrl: string;
    techUsed: string[];
    description: string;
}

const Projects = () => {

    const [projects, setProjects] = useState<Project[]>([]);

    const boxRevelColor = "#0aff9d"
    const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery(
        {
            queryKey: ["projects"],
            queryFn: ({ pageParam = 4 }) => fetchProjects(pageParam),
            initialPageParam: 0,
            getNextPageParam: (lastPage, allPages) => {
                if (lastPage.project.length < 4) {
                    return undefined;
                }
                return allPages.length * 4;
            },
        }
    );

    useEffect(() => {
        if (data?.pages) {
            setProjects(prevProjects => {
                // Flatten the project arrays from all pages
                const newProjects = data.pages.map(page => page.project).flat();
                // Merge the previous projects with new projects and remove duplicates
                const mergedProjects = [...prevProjects, ...newProjects].reduce((unique, project) => {
                    if (!unique.some(p => p.id === project.id)) {
                        unique.push(project);
                    }
                    return unique;
                }, [] as Project[]);
                return mergedProjects;
            });
        }
    }, [data?.pages]);





    return (
        <section className="section ">
            <div className="  items-center px-4 sm:px-0 flex gap-6 text-4xl md:text-6xl mb-6">
                <div className=" flex-1 h-[1px] opacity-30 bg-whitetext" />
                <BoxReveal boxColor={boxRevelColor} duration={0.5}>
                    <h3 className=" text-whitetext font-[900]">Projects<span className="text-lightgreen">.</span></h3>
                </BoxReveal>
            </div>

            <div className=" grid px-4 sm:px-0 grid-cols-1 md:grid-cols-2 gap-8">
                {
                    projects && projects.map((project) => (
                        <div key={project.id}>
                            {/* imagecontainer */}
                            <div className=" relative bg-lightblack w-full rounded-lg aspect-video overflow-hidden cursor-pointer">
                                <Image src={project.imageUrl}
                                    alt="Project1"
                                    width={400}
                                    height={100}
                                    quality={100}
                                    className="w-[85%] absolute bottom-4 left-[50%] translate-x-[-50%] translate-y-[20%] transition-all duration-200 rounded-[0.4rem] hover:rotate-6 "
                                />
                            </div>
                            {/* content container */}
                            <div>
                                <div className="text-whitetext flex items-center mt-3 gap-3">
                                    <BoxReveal boxColor={boxRevelColor} duration={0.5}>
                                        <h3 className={`text-whitetext font-extrabold text-2xl mt-3 ${project.title.length > 10 ? 'w-[10rem]' : 'w-fit'}`} style={{ wordBreak: "break-all" }}>
                                            {project.title}
                                        </h3>
                                    </BoxReveal>
                                    <div className=" flex-1 h-[1px] opacity-30 bg-whitetext" />
                                    <BoxReveal boxColor={boxRevelColor} duration={0.5}>
                                        <div className="flex md:gap-2 items-center">
                                            {/* todo Tooltip */}
                                            <a target="_blank" href={project.githubUrl}><svg className=" h-[28px] opacity-[0.5] hover:text-lightgreen hover:opacity-[1]" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="2.8rem" width="2.8rem" xmlns="http://www.w3.org/2000/svg"><path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path></svg></a>
                                            <a target="_blank" rel="nofollow" href={project.liveUrl}><svg stroke="currentColor" className="h-[28px] opacity-[0.5] hover:text-lightgreen hover:opacity-[1]" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="2.8rem" width="2.8rem" xmlns="http://www.w3.org/2000/svg"><path d="M888.3 757.4h-53.8c-4.2 0-7.7 3.5-7.7 7.7v61.8H197.1V197.1h629.8v61.8c0 4.2 3.5 7.7 7.7 7.7h53.8c4.2 0 7.7-3.4 7.7-7.7V158.7c0-17-13.7-30.7-30.7-30.7H158.7c-17 0-30.7 13.7-30.7 30.7v706.6c0 17 13.7 30.7 30.7 30.7h706.6c17 0 30.7-13.7 30.7-30.7V765.1c0-4.3-3.5-7.7-7.7-7.7zm18.6-251.7L765 393.7c-5.3-4.2-13-.4-13 6.3v76H438c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 0 0 0-12.6z"></path></svg></a>
                                        </div>
                                    </BoxReveal>
                                </div>
                                <BoxReveal boxColor={boxRevelColor} duration={0.5}>
                                    <div className=" flex text-[17px] flex-wrap gap-2 font-[400] text-lightgreen mt-3">
                                        {
                                            project.techUsed.map((tech: {} | null | undefined, idx: any) => (
                                                <p key={idx}>
                                                    {tech}
                                                </p>
                                            ))
                                        }
                                    </div>
                                </BoxReveal>
                                <div>
                                    <BoxReveal boxColor={boxRevelColor} duration={0.5}>
                                        <p className="mb-6 text-[19px] font-extralight text-whitetext">
                                            {project.description} {" "}
                                            <span>
                                                <button role="link" className=" font-[400] text-[15px] relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:translate-y-1 after:bg-lightgreen after:opacity-0 after:transition after:duration-150   after:ease-in-out hover:after:translate-y-0 hover:after:opacity-100 text-lightgreen">Read More {">"}</button>
                                            </span>
                                        </p>
                                    </BoxReveal>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

            {
                hasNextPage &&
                <div className=" w-full text-center mt-10 mb-5 md:mb-0">
                    {
                        !isFetchingNextPage ?
                            <button
                                onClick={() => fetchNextPage()}
                                className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-[#0aff9d] px-6 font-medium text-black duration-500">
                                <div className="translate-y-0 opacity-100 transition group-hover:-translate-y-[150%] group-hover:opacity-0">
                                    Load More Projects
                                </div>
                                <div className="absolute translate-y-[150%] opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6">
                                        <path d="M7.5 2C7.77614 2 8 2.22386 8 2.5L8 11.2929L11.1464 8.14645C11.3417 7.95118 11.6583 7.95118 11.8536 8.14645C12.0488 8.34171 12.0488 8.65829 11.8536 8.85355L7.85355 12.8536C7.75979 12.9473 7.63261 13 7.5 13C7.36739 13 7.24021 12.9473 7.14645 12.8536L3.14645 8.85355C2.95118 8.65829 2.95118 8.34171 3.14645 8.14645C3.34171 7.95118 3.65829 7.95118 3.85355 8.14645L7 11.2929L7 2.5C7 2.22386 7.22386 2 7.5 2Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd">
                                        </path>
                                    </svg>
                                </div>
                            </button> :
                            <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-[#0aff9d] px-6 font-medium text-black disabled:pointer-events-none disabled:opacity-50">
                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1 h-5 w-5 animate-spin text-black">
                                    <path d="M1.90321 7.29677C1.90321 10.341 4.11041 12.4147 6.58893 12.8439C6.87255 12.893 7.06266 13.1627 7.01355 13.4464C6.96444 13.73 6.69471 13.9201 6.41109 13.871C3.49942 13.3668 0.86084 10.9127 0.86084 7.29677C0.860839 5.76009 1.55996 4.55245 2.37639 3.63377C2.96124 2.97568 3.63034 2.44135 4.16846 2.03202L2.53205 2.03202C2.25591 2.03202 2.03205 1.80816 2.03205 1.53202C2.03205 1.25588 2.25591 1.03202 2.53205 1.03202L5.53205 1.03202C5.80819 1.03202 6.03205 1.25588 6.03205 1.53202L6.03205 4.53202C6.03205 4.80816 5.80819 5.03202 5.53205 5.03202C5.25591 5.03202 5.03205 4.80816 5.03205 4.53202L5.03205 2.68645L5.03054 2.68759L5.03045 2.68766L5.03044 2.68767L5.03043 2.68767C4.45896 3.11868 3.76059 3.64538 3.15554 4.3262C2.44102 5.13021 1.90321 6.10154 1.90321 7.29677ZM13.0109 7.70321C13.0109 4.69115 10.8505 2.6296 8.40384 2.17029C8.12093 2.11718 7.93465 1.84479 7.98776 1.56188C8.04087 1.27898 8.31326 1.0927 8.59616 1.14581C11.4704 1.68541 14.0532 4.12605 14.0532 7.70321C14.0532 9.23988 13.3541 10.4475 12.5377 11.3662C11.9528 12.0243 11.2837 12.5586 10.7456 12.968L12.3821 12.968C12.6582 12.968 12.8821 13.1918 12.8821 13.468C12.8821 13.7441 12.6582 13.968 12.3821 13.968L9.38205 13.968C9.10591 13.968 8.88205 13.7441 8.88205 13.468L8.88205 10.468C8.88205 10.1918 9.10591 9.96796 9.38205 9.96796C9.65819 9.96796 9.88205 10.1918 9.88205 10.468L9.88205 12.3135L9.88362 12.3123C10.4551 11.8813 11.1535 11.3546 11.7585 10.6738C12.4731 9.86976 13.0109 8.89844 13.0109 7.70321Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd">
                                    </path>
                                </svg>
                                <span>
                                    Loading...
                                </span>
                            </button>
                    }


                </div>
            }
        </section>
    )
}

export default Projects
