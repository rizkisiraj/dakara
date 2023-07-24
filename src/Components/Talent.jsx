
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { AiOutlineClose } from "react-icons/ai";

import { useState } from 'react';
import talents from "../Talents.json"
import { useLocation, useNavigate } from 'react-router-dom';
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
        <motion.div className={`flex flex-col md:h-screen  lg:max-w-5xl max-w-5xl max-md:max-w-screen mx-auto items-center relative ${open ? 'max-md:mb-72' : 'max-md:mb-28'}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}>
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
                                src={require(`../assets/Talent/${item.GambarIntro}`)}
                                alt="talent"
                                className={`w-full object-cover object-top brightness-95`}
                            />
                            <div onClick={() => {
                                setTalent(talents[index]);
                                setOpen(!open)
                            }} className="absolute inset-0 bg-gradient-to-b from-transparent group-hover:from-black/20 group-hover:via-black/50 group-hover:to-black/80"></div>
                            <div className=' absolute group-hover:block bottom-7 left-6 max-md:text-center max-md:left-1/2 max-md:-translate-x-1/2 translate-y-[200%] group-hover:translate-y-0 transition-all duration-500'>
                                <span className='lg:text-xl max-md:text-md font-bold uppercase block'>{item.Nama}</span>
                                <span className='lg:text-md max-md:text-sm font-light'>Gen {item.Gen} Talent</span>
                            </div>

                        </div>
                    ))}
                </Carousel>

                {/* Profil Singkat */}
                <motion.div className={`${open ? 'block' : 'hidden'} flex absolute max-md:flex-col max-md:items-center pl-5 pr-10 max-md:pr-5 py-20 max-lg:py-12 max-md:py-6 top-0 z-20 w-full border-[1px] h-full max-md:h-auto rounded-lg duration-1000 bg-gradient-to-l from-[#6E347A] to-[#305581] bg-cover bg-center shadow-button`}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.5 }} >
                    <button className="absolute z-20 w-10 h-10 rounded-full -right-5 -top-5 max-md:right-1 max-md:top-1 bg-[#1DB3E2] hover:bg-[#20a0c7] border-2 border-white flex" onClick={() => setOpen(!open)}>
                        <span className='m-auto'><AiOutlineClose size={25} className='text-white' /></span>
                    </button>

                    <div className=" w-1/3 h-full max-md:h-2/3 max-md:w-full flex items-center justify-center">
                        <img src={require(`../assets/Talent/${talent.Profile}`)} alt={talent.Nama} className='mx-auto w-72 max-md:w-28 items-center' />
                    </div>

                    <div className="flex flex-col relative w-2/3 max-md:w-full h-full px-4 max-md:my-2 lg:text-lg max-lg:text-md justify-between text-white font-medium">

                        <h2 className='lg:text-4xl max-lg:text-2xl max-md:text-xl uppercase text-center font-semibold'>{talent.Nama}</h2>
                        <div>
                            <p className=' mb-3 max-md:mb-0 max-md:text-center max-md:text-sm'>{talent['Profile Singkat']}</p>
                            <ul className='max-md:text-center max-md:text-sm pl-0 mt-12 max-md:my-6'>
                                <li>Ras : {talent.Ras}</li>
                                <li>Ulang Tahun : {talent['Ulang Tahun']}</li>
                                <li>Tinggi : {talent.Tinggi}</li>
                            </ul>
                        </div>
                        <button onClick={() => navigate('/talent')} className='w-40 self-end max-md:self-center h-auto py-2 px-4  bg-[#1DB3E2] hover:bg-[#20a0c7] text-white rounded-xl max-md:rounded-md border-white border-2 font-semibold text-md max-md:text-sm shadow-button'>
                            <span style={{ textShadow: '0px 2px 2px rgb(47 79 79) ' }}>Lebih Detail</span>
                        </button>

                    </div>


                </motion.div>

            </div>
        </motion.div>
    )
}

export default Talent;