import React from 'react'
import About from "../assets/img/About.jpg"
import Button from './elements/Button';


const Content = () => {
    return (
        <main className='container'>
            <section id='hero'>
                <h1 className="dark:text-white pt-24 font-black text-5xl max-w-2xl text-center mx-auto leading-snug lg:text-4xl lg:pt-16 md:text-3xl md:pt-12 md:max-w-full sm:pt-10 sm:text-2xl">
                    Grow your business online.
                    Get. More. Leads.
                </h1>
                <p className="dark:text-gray-300 text-xl tracking-tight text-center max-w-xl mx-auto mt-[5px] md:text-lg md:mt-4 sm:mt-2 sm:text-base">
                    Wanna get serious into digital marketing? Then you need leads and this is where we can help you.
                </p>
                <div className="flex justify-center gap-7 sm:flex-col sm:gap-0 sm:mt-4">
                    <Button className='text-white shadow-customred bg-lightred'>
                        Start here.
                    </Button>
                    <Button className='dark:text-white text-lightred border-lightred border-2'>
                        Learn More
                    </Button>
                </div>
            </section>
            <section id="about">
                <div className="flex justify-between mt-40 pb-32 lg:flex-col lg:mt-32 lg:pb-24">
                    <div className="flex flex-col w-1/2 lg:w-full">
                        <div className="text-darkred font-bold text-xl tracking-tighter">
                            about as
                        </div>
                        <h2 className="dark:text-white mt-[2px] text-4xl font-black lg:text-3xl sm:text-2xl"> 
                            The team behind the brand.
                        </h2>
                        <p className="dark:text-gray-300 mt-[10px] max-w-sm text-lg lg:max-w-full sm:text-base">
                            Proin elementum fermentum auctor. Nulla semper, est eget congue pellentesque, erat nulla molestie mi,
                            in finibus leo nisl ac lectus. Praesent non urna. Nulla congue porta lectus in laoreet. Aenean
                            pellentesque vitae metus id porttitor.t
                        </p>
                        <Button className='text-white shadow-customred bg-lightred'>
                            Learn more
                        </Button>
                    </div>
                    <div className="flex flex-col w-[450px] lg:w-full lg:mt-6">
                        <img src={About} alt='about'/>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Content