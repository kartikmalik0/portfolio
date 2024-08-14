import { fetchAbout, fetchLinks } from "@/actions/fetch-data"
import { useQuery } from "@tanstack/react-query"
import Skills from "./Skills"
import BoxReveal from "./text-revel/box-revel"
import { Key, ReactChild, ReactFragment, ReactPortal } from "react"
import AboutSuspense from "./suspenses/AboutSuspense"
import AboutLInksSuspense from "./suspenses/AboutLInksSuspense"


type Link = {
  id: string,
  url: string,
  platform: string
}

type AboutData = {
  id: string;
  description1: string;
  description2: string;
  description3: string;
}[]

const About = ({ aboutData }: { aboutData: AboutData }) => {


  const boxRevelColor = "#0aff9d"
  // const { data: linksData, isLoading: isLinksLoading } = useQuery({
  //   queryKey: ["links"],
  //   queryFn: async () => await fetchLinks()
  // })


  // const { data } = useQuery({
  //   queryKey: ["about"],
  //   queryFn: async () => await fetchAbout()
  // })





  // const links: Link[] = linksData?.links[0].links as Link[]


  // const getLinkUrl = (platform: string) => {
  //   const link = links && links.find(link => link.platform.toLowerCase() === platform.toLowerCase());
  //   return link ? link.url : "#";
  // }


  return (
    <section className="section mt-4 md:mt-0">
      <div className="px-4 sm:px-0">
        <div className=" flex items-center gap-6 text-4xl md:text-6xl mb-6">
          {/* <BoxReveal boxColor={boxRevelColor} duration={0.5}> */}
          <h3 className=" text-whitetext font-[900]">About<span className="text-lightgreen">.</span></h3>
          {/* </BoxReveal> */}
          <div className=" flex-1 h-[1px] opacity-30 bg-whitetext" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-7 ">
          <div>
            <div className="  relative overflow-hidden">
              {aboutData ?
                aboutData.map((about: { id: Key | null | undefined; description1: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; description2: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; description3: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined }) => (
                  <div key={about.id}>
                    <BoxReveal boxColor={boxRevelColor} duration={0.5}>
                      <p key={1} className=" mb-6 font-extralight text-whitetext">
                        {about.description1}
                      </p>
                    </BoxReveal>
                    <BoxReveal boxColor={boxRevelColor} duration={0.5}>
                      <p key={2} className=" mb-6 font-extralight text-whitetext">
                        {about.description2}
                      </p>
                    </BoxReveal>
                    <BoxReveal boxColor={boxRevelColor} duration={0.5}>
                      <p key={3} className=" mb-6 font-extralight text-whitetext">
                        {about.description3}
                      </p>
                    </BoxReveal>
                  </div>
                )) : (
                  <AboutSuspense />
                )
              }

            </div>
          </div>
          <Skills />
        </div>
      </div>
    </section>
  )
}

export default About
