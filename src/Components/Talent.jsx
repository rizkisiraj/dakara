
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { AiOutlineClose } from "react-icons/ai";

import { useState } from 'react';
import talents from "../Talents.json"
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function Talent() {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 0 },
            items: 3,
            speed: 1000,
            slidesToSlide: 3
        }
    };

    const [open, setOpen] = useState(false);
    const [talent, setTalent] = useState(talents[0]);
    const navigate = useNavigate()

    return (
        <motion.div className="flex flex-col md:h-screen  lg:max-w-5xl max-w-5xl max-md:max-w-screen max-md:my-40 mx-auto items-center relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 2 }}>
            <span className="font-semibold text-3xl max-md:text-3xl max-sm:text-2xl w-full md:my-5 max-md:my-4  max-md:ml-2 ">Our Talent</span>
            <div className='w-full h-auto relative'>
                <Carousel responsive={responsive} className='z-10'>
                    {talents.length && talents.map((item, index) => (
                        <div className="flex w-full justify-center key={index} aspect-[3/5] max-sm:aspect-[1/2] relative brightness-90 group object-contain "
                            key={item.Nama}>
                            <img
                                onClick={() => {
                                    if (talents[index] === talent)
                                        setTalent(talent[index]);
                                    setOpen(!open)
                                }}
                                src={require(`../assets/${item.GambarIntro}`)}
                                alt="talent"
                                className={`w-full object-cover object-top brightness-95`}

                            />
                            <div onClick={() => {
                                setTalent(talents[index]);
                                setOpen(!open)
                            }} className="absolute inset-0 bg-gradient-to-b from-transparent group-hover:from-black/20 group-hover:via-black/50 group-hover:to-black/80"></div>
                            <div className=' absolute group-hover:block bottom-7 left-6 max-md:text-center max-md:left-1/2 max-md:-translate-x-1/2 translate-y-[200%] group-hover:translate-y-0 transition-all duration-500'>
                                <span className='lg:text-xl max-md:text-md font-bold uppercase block'>{item.Nama}</span>
                                <span className='lg:text-md max-md:text-sm font-light'>Gen 1 Talent</span>
                            </div>

                        </div>
                    ))}
                </Carousel>

                {/* Profil Singkat */}
                <motion.div className={`${open ? 'block' : 'hidden'} flex absolute max-md:flex-col max-md:items-center top-0 z-20 w-full border-[2px] h-full max-md:min-h-[400px] rounded-xl duration-1000 bg-gradient-to-b  from-[#512275] to-[#3B3BA5]`}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }} >
                    <div className="absolute w-10 h-10 rounded-full -right-5 -top-5 max-md:right-1 max-md:top-1 bg-white/50 flex" onClick={() => setOpen(!open)}>
                        <span className='m-auto'><AiOutlineClose size={20} /></span>
                    </div>
                    <div className=" w-1/3 h-full max-md:h-2/3 max-md:w-full flex items-center justify-center">
                        <img src={require(`../assets/${talent.Profile}`)} alt={talent.Nama} className='mx-auto w-72 max-md:w-36 items-center' />
                    </div>
                    <div className="flex flex-col w-2/3 max-md:w-full h-full px-3 lg:py-5 max-md:my-2 justify-center lg:text-lg max-lg:text-md">
                        <h2 className='lg:text-4xl max-lg:text-2xl max-md:text-xl uppercase text-center font-semibold'>{talent.Nama}</h2>
                        <p className='lg:mt-4 mb-3 max-md:text-center max-md:text-sm max-md:mb-1'>{talent['Profile Singkat']}</p>
                        <ul className='max-md:mx-auto max-md:text-sm pl-0'>
                            <li>Ras : {talent.Ras}</li>
                            <li>Ulang Tahun : {talent['Ulang Tahun']}</li>
                            <li>Tinggi : {talent.Tinggi}</li>
                        </ul>
                        <button onClick={() => navigate('/talent')} className='w-40 mx-auto h-auto py-1.5 px-4 mt-8 max-md:mt-0  bg-white/50 hover:bg-white/30 rounded-xl max-md:rounded-md border-white border-2 font-semibold text-md max-md:text-sm shadow-blue-800 shadow-2xl'>
                            <span style={{ textShadow: '0px 2px 2px rgb(47 79 79) ' }}>Lebih Detail</span>
                        </button>

                    </div>


                </motion.div>

            </div>
        </motion.div>
    )
}

export default Talent;