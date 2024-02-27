export const AboutMe = () => {
    return (
        <>
            <div className='lg:px-0 md:px-0 px-10 lg:grid md:grid lg:grid-cols-2 lg:gap-20 md:grid-cols-2 md:gap-40'>
                <div className='lg:w-[27rem] md:w-[27rem]'>
                    <img src="./coding&coffe.webp" alt="coding" className="border-none rounded-lg" />
                </div>
                <div className="">
                    <h1 className="text-5xl text-white text-bold">About Me</h1>
                    <div className="">
                        <div className="text-2xl text-[#646DFE] pt-5 text-bold">Full Stack Developer based in Barcelona<img src="./location2.png" alt="location" className="relative bottom-8 left-[7.5rem] w-7" /></div>
                    </div>
                    <p className="text-white pt-5 tracking-wider text-sm pb-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Inventore dolor consequuntur temporibus voluptatibus pariatur repudiandae dolorem, eaque
                        officiis ipsa sequi delectus facilis odio dolore commodi, amet praesentium? Facere, fugit aliquam!</p>
                </div>
            </div>
        </>
    )
}

export default AboutMe
