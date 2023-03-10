import Navbar from '../Components/Navbar'
import Event from '../Components/Event'

import Event1 from '../assets/event1.webp'

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'

function News() {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])
    return (
        <div className="intro  h-max= bg-[url('./assets/bg-home.png')] bg-no-repeat bg-cover bg-center overflow-hidden ">
            <Navbar />
            <Event />

            <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-10 w-10/12 mx-auto lg:my-20">
                <div class="col-span-1 w-full aspect-[3/2] rounded-md relative">
                    <div className='w-full aspect-[2/1]'>
                        <img src={Event1} alt="" />
                    </div>
                    <div className='flex flex-col text-white'>
                        <div className='flex justify-between items-center my-2'>
                            <span className=' text-lg font-semibold bg-[#9625A8]  px-3 rounded-full max-md:text-base '>Tournament</span>
                            <span className=' text-base max-md:text-sm font-normal'>20/04/2023</span>
                        </div>
                        <p className=' text-xl max-md:text-lg font-semibold'>Gartic.io Tournament With The Talents</p>
                    </div>
                </div>
                <div class="col-span-1 w-full aspect-[3/2] rounded-md relative">
                    <div className='w-full aspect-[2/1]'>
                        <img src={Event1} alt="" />
                    </div>
                    <div className='flex flex-col text-white'>
                        <div className='flex justify-between items-center my-2'>
                            <span className=' text-lg font-semibold bg-[#9625A8]  px-3 rounded-full max-md:text-base '>Tournament</span>
                            <span className=' text-base max-md:text-sm font-normal'>20/04/2023</span>
                        </div>
                        <p className=' text-xl max-md:text-lg font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A magnam rerum consequatur dolorum accusamus.
                        </p>
                    </div>
                </div>
                <div class="col-span-1 w-full aspect-[3/2] rounded-md relative">
                    <div className='w-full aspect-[2/1]'>
                        <img src={Event1} alt="" />
                    </div>
                    <div className='flex flex-col text-white'>
                        <div className='flex justify-between items-center my-2'>
                            <span className=' text-lg font-semibold bg-[#9625A8]  px-3 rounded-full max-md:text-base '>Tournament</span>
                            <span className=' text-base max-md:text-sm font-normal'>20/04/2023</span>
                        </div>
                        <p className=' text-xl max-md:text-lg font-semibold'>Gartic.io Tournament With The Talents</p>
                    </div>
                </div>
                <div class="col-span-1 bg-white w-full aspect-[3/2] rounded-md  "></div>



            </div>

        </div>
    )
}

export default News