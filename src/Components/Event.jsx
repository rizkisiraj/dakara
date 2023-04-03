import Event1 from '../assets/event1.webp'
import Event2 from '../assets/bg-journey.webp'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { motion } from 'framer-motion'

function Event() {

    const items = [
        { src: Event1 }, { src: Event2 }, { src: "https://via.placeholder.com/900x400" }
    ];

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 0 },
            items: 1,
            speed: 1000,
            slidesToSlide: 1
        }
    };

    return (

        <div className="flex w-full md:h-screen mx-auto items-center justify-center max-md:h-98">
            <div className="relative w-3/4 h-4/5 bg-cover max-lg:w-11/12 max-md:w-full mt-6 max-md:mt-20 max-md:mb-24 group">
                <Carousel responsive={responsive} className='z-10'>
                    {items.map((item, index) => (
                        <motion.div className="flex w-full justify-center aspect-video" 
                        key={index}
                        initial = {{opacity : 0}}
                        animate = {{opacity : 1}}
                        transition={{delay : 0.5, duration : 1}}>
                            <img
                                key={index}
                                src={item.src}
                                alt={item.alt}
                                className={`w-full object-cover object-top brightness-75 md:rounded-xl`}  
                            />
                            <div className="w-full absolute text-white inset-0 bg-black/30 ease-in duration-150 transition-all hover:bg-black/0 md:rounded-xl">
                                <div className=' absolute bottom-16 left-12'>
                                    <h2 className=' text-2xl m-0'>NEWS</h2>
                                    <p className=' text-lg m-0'>Selengkapnya</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </Carousel>

            </div>
        </div>
    )
};

export default Event;