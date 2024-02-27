export const AboutMe = () => {
    return (
        <>
            <div className='lg:grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1'>
                <div className="xl:flex xl:justify-start lg:flex lg:justify-start md:flex md:justify-center px-10">
                    <div className='lg:w-[27rem] md:w-[27rem]'>
                        <img src="./coding&coffe.webp" alt="coding" className="border-none rounded-lg" />
                    </div>
                </div>

                <div className="">
                    <h1 className="text-5xl text-white text-bold md:text-center lg:text-start text-center md:py-5 lg:py-0 py-5">About Me</h1>
                    <div className="md:flex md:justify-center md:py-0 lg:flex lg:justify-start flex justify-center">
                        <div className="text-2xl text-[#646DFE] text-bold px-10 lg:px-0 lg:text-start text-center">Full Stack Developer based in Barcelona💻</div>
                    </div>
                    <p className="text-white tracking-wider lg:text-sm md:text-md pb-2 lg:pb-0 md:text-center lg:text-start text-center px-10 lg:px-0 md:px-14">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Inventore dolor consequuntur temporibus voluptatibus pariatur repudiandae dolorem, eaque
                        officiis ipsa sequi delectus facilis odio dolore commodi, amet praesentium? Facere, fugit aliquam!</p>
                </div>
            </div>
        </>
    )
}

export default AboutMe
