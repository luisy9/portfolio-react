export const AboutMe = () => {
    return (
        <>
            <div className='flex lg:grid md:grid lg:grid-cols-2 lg:gap-20 md:grid-cols-2 md:gap-40 flex-col-reverse'>
                <div className='lg:w-[27rem] md:w-[27rem]'>
                    <img src="./coding&coffe.webp" alt="coding" className="border-none rounded-lg" />
                </div>
                <div className="lg:w-[27rem] md:w-[27rem]">
                    <h1 className="text-5xl text-white text-bold">About Me</h1>
                    <h4 className="text-2xl text-[#646DFE] pt-5 text-bold">Full Stack Developer based in Barcelona</h4>
                    <p className="text-white pt-5 tracking-wider text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Inventore dolor consequuntur temporibus voluptatibus pariatur repudiandae dolorem, eaque 
                        officiis ipsa sequi delectus facilis odio dolore commodi, amet praesentium? Facere, fugit aliquam!</p>
                </div>
            </div>
        </>

    )
}

export default AboutMe
