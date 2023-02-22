import Event1 from '../assets/event1.png'
import Event2 from '../assets/bg-journey.png'
import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'

function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const items = [
        { src: Event1 }, { src: Event2 }, { src: "https://via.placeholder.com/900x400" }
    ];

    const handlePrevClick = () => {
        setCurrentIndex(
            currentIndex === 0 ? items.length - 1 : currentIndex - 1
        );
    };

    const handleNextClick = () => {
        setCurrentIndex(
            currentIndex === items.length - 1 ? 0 : currentIndex + 1
        );
    };

    return (

        <div className="flex w-full md:h-screen mx-auto items-center justify-center max-md:h-98"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="10"
            data-aos-offset="0">
            <div className="relative w-3/4 h-4/5  bg-cover max-lg:w-11/12 max-lg:h-2/3  max-md:w-full max-md:h-[450px] max-[600px]:h-[330px] max-[400px]:h-72 mt-6 max-md:mt-20 max-md:mb-24 group">
                {items.map((item, index) => (
                    <img
                        key={index}
                        src={item.src}
                        alt={item.alt}
                        className={` w-full h-full object-cover md:rounded-xl ${currentIndex === index ? "" : "hidden"
                            }`}
                    />
                ))}
                <div class="absolute transition duration-500 ease-in-out inset-0 bg-black/50 hover:bg-black/20">
                    <button className="md:hidden group-hover:block absolute ml-2 top-1/2 left-0 p-2 rounded-full bg-black/50  text-white hover:text-black hover:bg-white/50 cursor-pointer" onClick={handlePrevClick}>
                        <BsChevronCompactLeft size={25} />
                    </button>
                    <button className="md:hidden group-hover:block absolute mr-2 top-1/2 right-0 p-2 rounded-full bg-black/50  text-white hover:text-black hover:bg-white/50 cursor-pointer" onClick={handleNextClick}>
                        <BsChevronCompactRight size={25} />
                    </button>

                    <div className=" bottom-0 left-1/2 p-3 -translate-x-1/2  text-white absolute" >
                        {items.map((item, index) => (
                            <div key={index} className={`inline-block h-1 w-6 mx-0.5 max-md:w-4 rounded-md bg-white ${currentIndex === index ? 'px-3 max-md:px-3' : 'opacity-50'}`} ></div>
                        ))}
                    </div>
                    <div className='absolute bottom-8 left-8 text-white'>
                        <span className=' font-semibold text-lg'>NEWS</span> <br />
                        <span className=' font-normal text-sm'>Selengkapnya...</span>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Carousel;