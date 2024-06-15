import Image from "next/image"

const Projects = () => {
    return (
        <section className="section ">
            <div className=" flex items-center gap-6 text-6xl mb-6">
                <div className=" w-full h-[1px] opacity-30 bg-whitetext" />
                <h3 className=" text-whitetext font-[900]">Projects<span className="text-lightgreen">.</span></h3>
            </div>

            <div className=" grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    {/* imagecontainer */}
                    <div className=" relative bg-lightblack w-full rounded-lg aspect-video overflow-hidden cursor-pointer">
                        <Image src={"https://steam-portfolio-demo.vercel.app/project-imgs/example-project.jpg"}
                            quality={100}
                            alt="Project1"
                            width={100}
                            height={100}
                            className="w-[85%] absolute bottom-0 left-[50%] translate-x-[-50%] translate-y-[20%] transition-all duration-200 rounded-[0.4rem] hover:rotate-6 "
                        />
                    </div>
                    {/* content container */}
                    <div>
                        <div className="text-whitetext flex items-center mt-3 gap-3">
                            <h3 className=" w-fit  flex text-whitetext font-extrabold text-2xl mt-3">Paint App</h3>
                            <div className=" w-full h-[1px] opacity-30 bg-whitetext" />
                            <div className="flex md:gap-2 items-center">
                                {/* todo Tooltip */}
                                <a href=""><svg className=" h-[28px] opacity-[0.5] hover:text-lightgreen hover:opacity-[1]" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="2.8rem" width="2.8rem" xmlns="http://www.w3.org/2000/svg"><path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path></svg></a>
                                <a target="_blank" rel="nofollow" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><svg stroke="currentColor" className="h-[28px] opacity-[0.5] hover:text-lightgreen hover:opacity-[1]" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="2.8rem" width="2.8rem" xmlns="http://www.w3.org/2000/svg"><path d="M888.3 757.4h-53.8c-4.2 0-7.7 3.5-7.7 7.7v61.8H197.1V197.1h629.8v61.8c0 4.2 3.5 7.7 7.7 7.7h53.8c4.2 0 7.7-3.4 7.7-7.7V158.7c0-17-13.7-30.7-30.7-30.7H158.7c-17 0-30.7 13.7-30.7 30.7v706.6c0 17 13.7 30.7 30.7 30.7h706.6c17 0 30.7-13.7 30.7-30.7V765.1c0-4.3-3.5-7.7-7.7-7.7zm18.6-251.7L765 393.7c-5.3-4.2-13-.4-13 6.3v76H438c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 0 0 0-12.6z"></path></svg></a>
                            </div>
                        </div>
                        <div className=" text-[17px] font-[400] text-lightgreen mt-3">
                            Flutter - MUI - Python - FastAPI
                        </div>
                        <div>
                            <p className="mb-6 text-[19px] font-extralight text-whitetext">
                                A real-time coaching app for students learning to paint. This app is my baby, designed and built on my own. {" "}
                                <span>
                                    <button role="link" className=" font-[400] text-[15px] relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:translate-y-1 after:bg-lightgreen after:opacity-0 after:transition after:duration-150   after:ease-in-out hover:after:translate-y-0 hover:after:opacity-100 text-lightgreen">Read More {">"}</button>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    {/* imagecontainer */}
                    <div className=" relative bg-lightblack w-full rounded-lg aspect-video overflow-hidden cursor-pointer">
                        <Image src={"https://steam-portfolio-demo.vercel.app/project-imgs/example-project.jpg"}
                            quality={100}
                            alt="Project1"
                            width={100}
                            height={100}
                            className="w-[85%] absolute bottom-0 left-[50%] translate-x-[-50%] translate-y-[20%] transition-all duration-200 rounded-[0.4rem] hover:rotate-6 "
                        />
                    </div>
                    {/* content container */}
                    <div>
                        <div className="text-whitetext flex items-center mt-3 gap-3">
                            <h3 className=" w-fit  flex text-whitetext font-extrabold text-2xl mt-3">Paint App</h3>
                            <div className=" w-full h-[1px] opacity-30 bg-whitetext" />
                            <div className="flex md:gap-2 items-center">
                                {/* todo Tooltip */}
                                <a href=""><svg className=" h-[28px] opacity-[0.5] hover:text-lightgreen hover:opacity-[1]" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="2.8rem" width="2.8rem" xmlns="http://www.w3.org/2000/svg"><path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path></svg></a>
                                <a target="_blank" rel="nofollow" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><svg stroke="currentColor" className="h-[28px] opacity-[0.5] hover:text-lightgreen hover:opacity-[1]" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="2.8rem" width="2.8rem" xmlns="http://www.w3.org/2000/svg"><path d="M888.3 757.4h-53.8c-4.2 0-7.7 3.5-7.7 7.7v61.8H197.1V197.1h629.8v61.8c0 4.2 3.5 7.7 7.7 7.7h53.8c4.2 0 7.7-3.4 7.7-7.7V158.7c0-17-13.7-30.7-30.7-30.7H158.7c-17 0-30.7 13.7-30.7 30.7v706.6c0 17 13.7 30.7 30.7 30.7h706.6c17 0 30.7-13.7 30.7-30.7V765.1c0-4.3-3.5-7.7-7.7-7.7zm18.6-251.7L765 393.7c-5.3-4.2-13-.4-13 6.3v76H438c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 0 0 0-12.6z"></path></svg></a>
                            </div>
                        </div>
                        <div className=" text-[17px] font-[400] text-lightgreen mt-3">
                            Flutter - MUI - Python - FastAPI
                        </div>
                        <div>
                            <p className="mb-6 text-[19px] font-extralight text-whitetext">
                                A real-time coaching app for students learning to paint. This app is my baby, designed and built on my own. {" "}
                                <span>
                                    <button role="link" className=" font-[400] text-[15px] relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:translate-y-1 after:bg-lightgreen after:opacity-0 after:transition after:duration-150   after:ease-in-out hover:after:translate-y-0 hover:after:opacity-100 text-lightgreen">Read More {">"}</button>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    {/* imagecontainer */}
                    <div className=" relative bg-lightblack w-full rounded-lg aspect-video overflow-hidden cursor-pointer">
                        <Image src={"https://steam-portfolio-demo.vercel.app/project-imgs/example-project.jpg"}
                            quality={100}
                            alt="Project1"
                            width={100}
                            height={100}
                            className="w-[85%] absolute bottom-0 left-[50%] translate-x-[-50%] translate-y-[20%] transition-all duration-200 rounded-[0.4rem] hover:rotate-6 "
                        />
                    </div>
                    {/* content container */}
                    <div>
                        <div className="text-whitetext flex items-center mt-3 gap-3">
                            <h3 className=" w-fit  flex text-whitetext font-extrabold text-2xl mt-3">Paint App</h3>
                            <div className=" w-full h-[1px] opacity-30 bg-whitetext" />
                            <div className="flex md:gap-2 items-center">
                                {/* todo Tooltip */}
                                <a href=""><svg className=" h-[28px] opacity-[0.5] hover:text-lightgreen hover:opacity-[1]" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="2.8rem" width="2.8rem" xmlns="http://www.w3.org/2000/svg"><path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path></svg></a>
                                <a target="_blank" rel="nofollow" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><svg stroke="currentColor" className="h-[28px] opacity-[0.5] hover:text-lightgreen hover:opacity-[1]" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="2.8rem" width="2.8rem" xmlns="http://www.w3.org/2000/svg"><path d="M888.3 757.4h-53.8c-4.2 0-7.7 3.5-7.7 7.7v61.8H197.1V197.1h629.8v61.8c0 4.2 3.5 7.7 7.7 7.7h53.8c4.2 0 7.7-3.4 7.7-7.7V158.7c0-17-13.7-30.7-30.7-30.7H158.7c-17 0-30.7 13.7-30.7 30.7v706.6c0 17 13.7 30.7 30.7 30.7h706.6c17 0 30.7-13.7 30.7-30.7V765.1c0-4.3-3.5-7.7-7.7-7.7zm18.6-251.7L765 393.7c-5.3-4.2-13-.4-13 6.3v76H438c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 0 0 0-12.6z"></path></svg></a>
                            </div>
                        </div>
                        <div className=" text-[17px] font-[400] text-lightgreen mt-3">
                            Flutter - MUI - Python - FastAPI
                        </div>
                        <div>
                            <p className="mb-6 text-[19px] font-extralight text-whitetext">
                                A real-time coaching app for students learning to paint. This app is my baby, designed and built on my own. {" "}
                                <span>
                                    <button role="link" className=" font-[400] text-[15px] relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:translate-y-1 after:bg-lightgreen after:opacity-0 after:transition after:duration-150   after:ease-in-out hover:after:translate-y-0 hover:after:opacity-100 text-lightgreen">Read More {">"}</button>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    {/* imagecontainer */}
                    <div className=" relative bg-lightblack w-full rounded-lg aspect-video overflow-hidden cursor-pointer">
                        <Image src={"https://steam-portfolio-demo.vercel.app/project-imgs/example-project.jpg"}
                            quality={100}
                            alt="Project1"
                            width={100}
                            height={100}
                            className="w-[85%] absolute bottom-0 left-[50%] translate-x-[-50%] translate-y-[20%] transition-all duration-200 rounded-[0.4rem] hover:rotate-6 "
                        />
                    </div>
                    {/* content container */}
                    <div>
                        <div className="text-whitetext flex items-center mt-3 gap-3">
                            <h3 className=" w-fit  flex text-whitetext font-extrabold text-2xl mt-3">Paint App</h3>
                            <div className=" w-full h-[1px] opacity-30 bg-whitetext" />
                            <div className="flex md:gap-2 items-center">
                                {/* todo Tooltip */}
                                <a href=""><svg className=" h-[28px] opacity-[0.5] hover:text-lightgreen hover:opacity-[1]" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="2.8rem" width="2.8rem" xmlns="http://www.w3.org/2000/svg"><path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path></svg></a>
                                <a target="_blank" rel="nofollow" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><svg stroke="currentColor" className="h-[28px] opacity-[0.5] hover:text-lightgreen hover:opacity-[1]" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="2.8rem" width="2.8rem" xmlns="http://www.w3.org/2000/svg"><path d="M888.3 757.4h-53.8c-4.2 0-7.7 3.5-7.7 7.7v61.8H197.1V197.1h629.8v61.8c0 4.2 3.5 7.7 7.7 7.7h53.8c4.2 0 7.7-3.4 7.7-7.7V158.7c0-17-13.7-30.7-30.7-30.7H158.7c-17 0-30.7 13.7-30.7 30.7v706.6c0 17 13.7 30.7 30.7 30.7h706.6c17 0 30.7-13.7 30.7-30.7V765.1c0-4.3-3.5-7.7-7.7-7.7zm18.6-251.7L765 393.7c-5.3-4.2-13-.4-13 6.3v76H438c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 0 0 0-12.6z"></path></svg></a>
                            </div>
                        </div>
                        <div className=" text-[17px] font-[400] text-lightgreen mt-3">
                            Flutter - MUI - Python - FastAPI
                        </div>
                        <div>
                            <p className="mb-6 text-[19px] font-extralight text-whitetext">
                                A real-time coaching app for students learning to paint. This app is my baby, designed and built on my own. {" "}
                                <span>
                                    <button role="link" className=" font-[400] text-[15px] relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:translate-y-1 after:bg-lightgreen after:opacity-0 after:transition after:duration-150   after:ease-in-out hover:after:translate-y-0 hover:after:opacity-100 text-lightgreen">Read More {">"}</button>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    )
}

export default Projects
