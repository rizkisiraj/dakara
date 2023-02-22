
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { AiOutlineClose } from "react-icons/ai";

import Talent1 from '../assets/talent1.png'
import Talent2 from '../assets/talent2.png'
import Talent3 from '../assets/talent3.png'

import Risu from '../assets/Risu.png'

import { useEffect, useState } from 'react';

function Talent() {
    
    const items = [
        { src: Talent1 }, { src: Talent2 }, { src: Talent3 }, { src: Talent1 }, { src: Talent2 }, { src: Talent3 }
    ];
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 0 },
            items: 3,
            speed: 1000,
            slidesToSlide: 3
        }
    };

    const [open, setOpen] = useState(false)

    // const [data,setData] = useState();

    // const getData = async () => {
    //     try {
    //         const res = await fetch('https://sheet.best/api/sheets/c59df346-06b3-4085-ab70-4309e3d53b1c');
    //         const data = await res.json();
    //         console.log(data);
    //     } catch(error){
    //         console.log(error);
    //     }
    // };

    // useEffect(() => {
    //     getData();
    // }, []);


    return (
        <div className="flex flex-col h-screen  lg:max-w-5xl max-w-5xl max-md:max-w-screen mx-auto relative"
            data-aos="fade-up"
            data-aos-duration="5000">
            <span className="font-semibold text-3xl w-full my-5 max-md:my-3 max-md:ml-2 ">Our Talent</span>
            <div className='w-full h-auto relative'
                data-aos="fade-down">
                <Carousel responsive={responsive} className='z-10'>
                    {items.map((item, index) => (
                        <div class="flex w-full justify-center key={index} h-[500px] max-lg:h-[450px] max-sm:h-[400px] max-[500px]:h-[350px] relative brightness-90 group object-contain ">
                            <img
                                key={index}
                                src={item.src}
                                alt={item.alt}
                                className={`w-full object-cover object-top brightness-95`}
                                onClick={() => setOpen(!open)}
                            />
                            <div onClick={() => setOpen(!open)} class="absolute inset-0 bg-gradient-to-b from-transparent group-hover:from-black/20 group-hover:via-black/50 group-hover:to-black/80"></div>
                            <div className=' absolute group-hover:block bottom-7 left-6 max-md:text-center max-md:left-1/2 max-md:-translate-x-1/2 translate-y-[200%] group-hover:translate-y-0 transition-all duration-500'>
                                <span className='text-xl font-bold uppercase block'>Ariya Risu</span>
                                <span className='text-md font-light'>Gen 1 Talent</span>
                            </div>

                        </div>
                    ))}
                </Carousel>

                {/* Profil Singkat */}
                <div class={`flex absolute max-md:flex-col max-md:items-center  top-0 z-20 w-full border-[2px] h-[500px] max-lg:h-[450px] bg-black/20 rounded-xl duration-1000 ${open ? 'block' : 'hidden'}`}
                    data-aos="zoom-in"
                    data-aos-duration="1000">
                    <div className="absolute w-10 h-10 rounded-full -right-5 -top-5 max-md:right-1 max-md:top-1 bg-white/50 flex" onClick={() => setOpen(!open)}>
                        <span className='m-auto'><AiOutlineClose size={20} /></span>
                    </div>
                    <div className=" w-1/3 h-full max-md:w-full flex items-center justify-center">
                        <img src={Risu} alt="" className='mx-auto w-72 h-72 max-md:w-36 max-md:h-36 pr-0 items-center' />
                    </div>
                    <div className="flex flex-col w-2/3 max-md:w-full h-full px-3 lg:py-5 max-md:my-4 justify-center">
                        <h2 className='text-3xl max-md:text-2xl uppercase text-center font-semibold'>Ariya Risu</h2>
                        <p className='lg:mt-4 mb-3 max-md:text-center max-md:text-sm max-md:mb-1'>Seorang mahasiswa jenius yang memutuskan untuk pergi ke dunia virtual,
                            siapkah kalian untuk mengikuti perjalanannya?</p>
                        <ul className='max-md:mx-auto max-md:text-sm pl-0'>
                            <li>Ras : Manusia</li>
                            <li>Ulang Tahun : 29 Agustus</li>
                            <li>Tinggi : 173cm</li>
                        </ul>
                        <button className='w-40 mx-auto h-auto py-1.5 px-4 mt-8 max-md:mt-0  bg-white/20 hover:bg-white/60 rounded-xl max-md:rounded-md border-white border-2 font-semibold text-md max-md:text-sm shadow-blue-800 shadow-2xl'>
                            <span style={{ textShadow: '0px 2px 2px rgb(47 79 79) ' }}>Lebih Detail</span>
                        </button>

                    </div>


                </div>

            </div>
        </div>
    )
}

export default Talent;