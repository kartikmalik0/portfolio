
const Hero = () => {
    return (
        <section className=" max-w-[1150px] p-36">
            <div>
                <div className="relative w-fit overflow-hidden text-white">
                    <h1 className=" text-[4rem] md:text-[6rem] font-[900]" style={{ lineHeight: "110px" }}>{"Hey, I'm Kartik"} <span className=" ml-[-12px] text-lightgreen">.</span></h1>
                </div>
                <div>
                    <h2 className="text-white text-[2rem] font-[200] mt-3">
                        {"I'm a "}
                        <span className=" text-lightgreen font-[800]">Full Stack Developer</span>
                    </h2>
                </div>
                <div className=" max-w-[700px] my-3">
                    <p className=" text-white opacity-[1] font-[200] ">
                        {"I've spent the last 5 years building and scaling software for some pretty cool companies. I also teach people to paint online (incase you've got an empty canvas layin' around 🎨). Let's connect!"}
                    </p>
                </div>
            </div>
            <div></div>
        </section>
    )
}

export default Hero
