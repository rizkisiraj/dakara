import Navbar from '../Components/Navbar'
import Event from '../Components/Event'

import Merch1 from '../assets/merch.png'

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'

function News() {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])
    return (
        <div className="intro  min-h-screen bg-[url('./assets/bg-home.png')] bg-no-repeat bg-cover bg-center overflow-hidden ">
            <Navbar />
            <div className="grid grid-cols-3 max-lg:grid-cols-2 max-xs:grid-cols-1 gap-12  max-md:gap-8 max-sm:gap-4 w-10/12 mx-auto my-36">
                <div class="col-span-1 w-full aspect-[3/2] rounded-md relative">
                    <div className='flex w-full aspect-square border-[1px] border-white justify-center rounded-xl py-2'>
                        <img src={Merch1} alt="" className='h-full' />
                    </div>
                    <div className='flex flex-col text-white'>
                        <div className='flex justify-between items-center mb-2 mt-3'>
                            <span className=' text-lg max-md:text-base max-sm:text-sm font-semibold bg-[#9625A8]  px-3 rounded-full '>Voicepack</span>
                        </div>
                        <p className=' text-xl max-md:text-lg max-sm:text-base font-semibold'>GongXi Luxor Ganci</p>
                    </div>
                </div>

                <div class="col-span-1 w-full aspect-[3/2] rounded-md relative">
                    <div className='flex w-full aspect-square border-[1px] border-white justify-center rounded-xl py-2'>
                        <img src={Merch1} alt="" className='h-full' />
                    </div>
                    <div className='flex flex-col text-white'>
                        <div className='flex justify-between items-center mb-2 mt-3'>
                            <span className=' text-lg max-md:text-base max-sm:text-sm font-semibold bg-[#9625A8]  px-3 rounded-full '>Voicepack</span>
                        </div>
                        <p className=' text-xl max-md:text-lg max-sm:text-base font-semibold'>GongXi Luxor Ganci</p>
                    </div>
                </div>
                
                <div class="col-span-1 w-full aspect-[3/2] rounded-md relative">
                    <div className='flex w-full aspect-square border-[1px] border-white justify-center rounded-xl py-2'>
                        <img src={Merch1} alt="" className='h-full' />
                    </div>
                    <div className='flex flex-col text-white'>
                        <div className='flex justify-between items-center mb-2 mt-3'>
                            <span className=' text-lg max-md:text-base max-sm:text-sm font-semibold bg-[#9625A8]  px-3 rounded-full '>Voicepack</span>
                        </div>
                        <p className=' text-xl max-md:text-lg max-sm:text-base font-semibold'>GongXi Luxor Ganci</p>
                    </div>
                </div>

                <div class="col-span-1 w-full aspect-[3/2] rounded-md relative">
                    <div className='flex w-full aspect-square border-[1px] border-white justify-center rounded-xl py-2'>
                        <img src={Merch1} alt="" className='h-full' />
                    </div>
                    <div className='flex flex-col text-white'>
                        <div className='flex justify-between items-center mb-2 mt-3'>
                            <span className=' text-lg max-md:text-base max-sm:text-sm font-semibold bg-[#9625A8]  px-3 rounded-full '>Voicepack</span>
                        </div>
                        <p className=' text-xl max-md:text-lg max-sm:text-base font-semibold'>GongXi Luxor Ganci</p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default News