
import { fetchLinks, fetchResume } from "@/actions/fetch-data"
// import Loading from "@/app/loading"
import { useQuery } from "@tanstack/react-query"

type Link = {
    id: string,
    url: string,
    platform: string
}

const Navbar = () => {

    const { data,isLoading } = useQuery({
        queryKey: ["links"],
        queryFn: async () => await fetchLinks()
    })

    

    const { data: resume } = useQuery({
        queryKey: ["resume"],
        queryFn: async () => await fetchResume()
    })

    const resumeUrl =  resume?.resumeUrl ?? undefined;

    const links: Link[] = data?.links[0].links as Link[]

    const getLinkUrl = (platform: string) => {
        const link = links && links.find(link => link.platform.toLowerCase() === platform.toLowerCase());
        return link ? link.url : "#";
    }

    // if(isLoading){
    //     return <Loading/>
    // }

    return (
        <header className=" sticky z-50 h-[calc(30px+3.6rem)] top-0 backdrop-blur-[12px] bg-[hsla(0,0%,7%,.25)] text-whitetext flex justify-between items-center px-2 sm:px-8 md:px-10  ">
            <div className="flex md:gap-2 items-center">
                {/* todo Tooltip */}
                <a target="_blank" href={getLinkUrl("linkedin")}>
                    <svg className=" h-[22px] opacity-[0.5] hover:text-lightgreen hover:opacity-[1]" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="2.4rem" width="2.4rem" xmlns="http://www.w3.org/2000/svg"><path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z"></path></svg>
                </a>
                <a target="_blank" href={getLinkUrl("github")}><svg className=" h-[22px] opacity-[0.5] hover:text-lightgreen hover:opacity-[1]" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="2.4rem" width="2.4rem" xmlns="http://www.w3.org/2000/svg"><path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path></svg></a>
                <a target="_blank" href={getLinkUrl("twitter")}><svg className=" h-[22px] opacity-[0.5] hover:text-lightgreen hover:opacity-[1]" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="2.4rem" width="2.4rem" xmlns="http://www.w3.org/2000/svg"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm215.3 337.7c.3 4.7.3 9.6.3 14.4 0 146.8-111.8 315.9-316.1 315.9-63 0-121.4-18.3-170.6-49.8 9 1 17.6 1.4 26.8 1.4 52 0 99.8-17.6 137.9-47.4-48.8-1-89.8-33-103.8-77 17.1 2.5 32.5 2.5 50.1-2a111 111 0 0 1-88.9-109v-1.4c14.7 8.3 32 13.4 50.1 14.1a111.13 111.13 0 0 1-49.5-92.4c0-20.7 5.4-39.6 15.1-56a315.28 315.28 0 0 0 229 116.1C492 353.1 548.4 292 616.2 292c32 0 60.8 13.4 81.1 35 25.1-4.7 49.1-14.1 70.5-26.7-8.3 25.7-25.7 47.4-48.8 61.1 22.4-2.4 44-8.6 64-17.3-15.1 22.2-34 41.9-55.7 57.6z"></path></svg></a>
                {/* <a target="_blank" href={getLinkUrl("codepen")}><svg className=" h-[22px] opacity-[0.5] hover:text-lightgreen hover:opacity-[1]" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="2.4rem" width="2.4rem" xmlns="http://www.w3.org/2000/svg"><path d="M488.1 414.7V303.4L300.9 428l83.6 55.8zm254.1 137.7v-79.8l-59.8 39.9zM512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm278 533c0 1.1-.1 2.1-.2 3.1 0 .4-.1.7-.2 1a14.16 14.16 0 0 1-.8 3.2c-.2.6-.4 1.2-.6 1.7-.2.4-.4.8-.5 1.2-.3.5-.5 1.1-.8 1.6-.2.4-.4.7-.7 1.1-.3.5-.7 1-1 1.5-.3.4-.5.7-.8 1-.4.4-.8.9-1.2 1.3-.3.3-.6.6-1 .9-.4.4-.9.8-1.4 1.1-.4.3-.7.6-1.1.8-.1.1-.3.2-.4.3L525.2 786c-4 2.7-8.6 4-13.2 4-4.7 0-9.3-1.4-13.3-4L244.6 616.9c-.1-.1-.3-.2-.4-.3l-1.1-.8c-.5-.4-.9-.7-1.3-1.1-.3-.3-.6-.6-1-.9-.4-.4-.8-.8-1.2-1.3a7 7 0 0 1-.8-1c-.4-.5-.7-1-1-1.5-.2-.4-.5-.7-.7-1.1-.3-.5-.6-1.1-.8-1.6-.2-.4-.4-.8-.5-1.2-.2-.6-.4-1.2-.6-1.7-.1-.4-.3-.8-.4-1.2-.2-.7-.3-1.3-.4-2-.1-.3-.1-.7-.2-1-.1-1-.2-2.1-.2-3.1V427.9c0-1 .1-2.1.2-3.1.1-.3.1-.7.2-1a14.16 14.16 0 0 1 .8-3.2c.2-.6.4-1.2.6-1.7.2-.4.4-.8.5-1.2.2-.5.5-1.1.8-1.6.2-.4.4-.7.7-1.1.6-.9 1.2-1.7 1.8-2.5.4-.4.8-.9 1.2-1.3.3-.3.6-.6 1-.9.4-.4.9-.8 1.3-1.1.4-.3.7-.6 1.1-.8.1-.1.3-.2.4-.3L498.7 239c8-5.3 18.5-5.3 26.5 0l254.1 169.1c.1.1.3.2.4.3l1.1.8 1.4 1.1c.3.3.6.6 1 .9.4.4.8.8 1.2 1.3.7.8 1.3 1.6 1.8 2.5.2.4.5.7.7 1.1.3.5.6 1 .8 1.6.2.4.4.8.5 1.2.2.6.4 1.2.6 1.7.1.4.3.8.4 1.2.2.7.3 1.3.4 2 .1.3.1.7.2 1 .1 1 .2 2.1.2 3.1V597zm-254.1 13.3v111.3L723.1 597l-83.6-55.8zM281.8 472.6v79.8l59.8-39.9zM512 456.1l-84.5 56.4 84.5 56.4 84.5-56.4zM723.1 428L535.9 303.4v111.3l103.6 69.1zM384.5 541.2L300.9 597l187.2 124.6V610.3l-103.6-69.1z"></path></svg></a> */}
            </div>
            <div className=" flex items-center">
                <a target="_blank" href={resumeUrl} download>
                    <button className="border border-lightgreen group relative z-0 h-12 hover:text-black overflow-hidden overflow-x-hidden rounded-md bg-transparent px-4 md:px-8 py-[0.3rem] md:py-2 text-lightgreen">
                        <span className="relative z-10">
                            My Resume
                        </span>
                        <span className="absolute inset-0 overflow-hidden rounded-md">
                            <span className="absolute left-0 aspect-square w-full origin-center translate-x-full text-black rounded-full bg-lightgreen transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150">
                            </span>
                        </span>
                    </button>
                </a>
            </div>
        </header>
    )
}

export default Navbar
