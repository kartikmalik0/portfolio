
const Contact = () => {
    return (
        <section id="contact" className="section" style={{paddingBlock:"5rem"}}>
            <div className=" flex items-center gap-6 text-5xl md:text-6xl w-full mb-6">
                <h3 className=" text-whitetext font-[900] mx-auto">Contact<span className="text-lightgreen">.</span></h3>
            </div>
            <div className="w-full flex justify-center">
                <p className="mb-6 max-w-[50%] text-[19px] text-center font-extralight text-whitetext">
                    Shoot me an email if you want to connect! You can also find me on {" "}
                    <a href=""><span className="text-lightgreen">
                        Linkedin
                    </span>
                    </a> {" "}
                    or {" "}
                    <a href=""><span className="text-lightgreen">
                        Twitter
                    </span>
                    </a>{" "}
                    if {"that's"} more your speed. {" "}
                </p>
            </div>
            <div>
                <a href="#">
                    <div className="text-whitetext hover:text-lightgreen transition-all flex items-center justify-center gap-2">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="2.4rem" width="2.4rem" xmlns="http://www.w3.org/2000/svg"><path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-80.8 108.9L531.7 514.4c-7.8 6.1-18.7 6.1-26.5 0L189.6 268.9A7.2 7.2 0 0 1 194 256h648.8a7.2 7.2 0 0 1 4.4 12.9z"></path></svg>
                        <p className=" text-[21px] font-bold ">kartik20044@gmail.com</p>
                    </div>
                </a>
            </div>
        </section>
    )
}

export default Contact
