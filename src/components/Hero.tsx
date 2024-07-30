"use client"
import { useQuery } from "@tanstack/react-query"
import { HeroHighlight } from "./ui/hero-highlight"
import { fetchHero } from "@/actions/fetch-data"
import BoxReveal from "./text-revel/box-revel"

const Hero = () => {

    const boxRevelColor = "#0aff9d"
    const { data } = useQuery({
        queryKey: ["hero"],
        queryFn: async () => await fetchHero()
    })


    return (
        <HeroHighlight className="w-full">
            {
                data?.hero && data.hero.map((hero) => (
                    <section key={hero.id} className="section py-20 ">
                        <div className=" px-4 sm:px-0">
                            <div className="z-10 overflow-hidden relative">
                                <BoxReveal boxColor={boxRevelColor} duration={0.5}>
                                    <div className="relative w-fit  text-white">
                                        <h1 className="text-[3.4rem] md:text-[6rem] leading-[60px] md:leading-[90px] lg:leading-[110px] font-[900]" >Hey I&#39;m {hero.name} <span className=" ml-[-12px] text-lightgreen">.</span></h1>
                                    </div>
                                </BoxReveal>
                                <div>
                                    <BoxReveal boxColor={boxRevelColor} duration={0.5}>
                                        <h2 className="text-white text-[2rem] font-[200] mt-3">
                                            {"I'm a "}
                                            <span className=" text-lightgreen font-[800]">{hero.role}</span>
                                        </h2>
                                    </BoxReveal>
                                </div>
                                <div className=" max-w-[700px] my-3">
                                    <BoxReveal boxColor={boxRevelColor} duration={0.5}>
                                        <p className=" text-white opacity-[1] font-[200] ">
                                            {hero.roleDescription}
                                        </p>
                                    </BoxReveal>
                                </div>
                            </div>
                            <BoxReveal boxColor={boxRevelColor} duration={0.5}>
                                <button className=" mt-3 inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-lightgreen px-6 font-medium text-black">
                                    <span>
                                        Contact me
                                    </span>
                                    <div className="ml-1 transition hover:translate-x-1">
                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5">
                                            <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd">
                                            </path>
                                        </svg>
                                    </div>
                                </button>
                            </BoxReveal>
                        </div>
                    </section>
                ))
            }
        </HeroHighlight>

    )
}

export default Hero
