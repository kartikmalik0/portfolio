"use client"

import { fetchEmail, fetchLinks } from "@/actions/fetch-data"
import { useQuery } from "@tanstack/react-query"
import BoxReveal from "./magicui/box-revel"

type Link = {
    id: string,
    url: string,
    platform: string
}


const Contact = () => {

    const boxRevelColor = "#0aff9d"
    const { data } = useQuery({
        queryKey: ["links"],
        queryFn: async () => await fetchLinks()
    })


    const { data: emailData } = useQuery({
        queryKey: ["email"],
        queryFn: async () => await fetchEmail()
    })



    const links: Link[] = data?.links[0].links as Link[]
    const email = emailData?.email ?? undefined


    const getLinkUrl = (platform: string) => {
        const link = links && links.find(link => link.platform.toLowerCase() === platform.toLowerCase());
        return link ? link.url : "#";
    }

    return (
        <section id="contact" className="section" style={{ paddingBlock: "5rem" }}>
            <div className=" flex justify-center gap-6 text-5xl md:text-6xl w-full mb-6">
                <BoxReveal boxColor={boxRevelColor} duration={0.5}>
                    <h3 className=" text-whitetext font-[900] mx-auto">Contact<span className="text-lightgreen">.</span></h3>
                </BoxReveal>
            </div>
            <div className="w-full flex justify-center">
                <BoxReveal boxColor={boxRevelColor} duration={0.5}>
                    <p className="mb-6 mx-auto max-w-[50%] text-[19px] font-extralight text-whitetext">
                        Shoot me an email if you want to connect! You can also find me on {" "}
                        <a target="_blank" href={getLinkUrl("linkedin")}><span className="text-lightgreen">
                            Linkedin
                        </span>
                        </a> {" "}
                        or {" "}
                        <a target="_blank" href={getLinkUrl("github")}><span className="text-lightgreen">
                            Github
                        </span>
                        </a>{" "}
                        if {"that's"} more your speed. {" "}
                    </p>
                </BoxReveal>
            </div>
            <div className=" w-full flex justify-center">
                <BoxReveal boxColor={boxRevelColor} duration={0.5}>
                    <a href={`mailto:${email}`} className=" mx-auto">
                        <div className="text-whitetext cursor-pointer hover:text-lightgreen transition-all flex items-center justify-center gap-2">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="2.4rem" width="2.4rem" xmlns="http://www.w3.org/2000/svg"><path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-80.8 108.9L531.7 514.4c-7.8 6.1-18.7 6.1-26.5 0L189.6 268.9A7.2 7.2 0 0 1 194 256h648.8a7.2 7.2 0 0 1 4.4 12.9z"></path></svg>
                            <p className=" text-[21px] font-bold ">{email}</p>
                        </div>
                    </a>
                </BoxReveal>
            </div>
        </section>
    )
}

export default Contact
