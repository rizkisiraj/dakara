import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

import Logo from '../assets/logo.png'
import Team from '../assets/team.png'

import { IoLogoTwitter } from "react-icons/io"
import { SiDiscord } from "react-icons/si"
import { IoLogoYoutube } from "react-icons/io"
import { AiFillInstagram } from "react-icons/ai"
import { SiFacebook } from "react-icons/si"
import { SiTiktok } from "react-icons/si"

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'

function About() {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])
    return (
        <div className="intro h-max= bg-[url('./assets/bg-home.png')] bg-no-repeat bg-cover bg-center ">
            <Navbar />
            <div className=" mx-auto  text-white ">

                {/* About */}
                <div className=' h-screen w-9/12 mx-auto  flex justify-center items-center'>
                    <div className='mx-auto text-center'
                        data-aos="fade-left">
                        <h2 className=' text-5xl font-bold py-5'>Dakara ID</h2>
                        <p className=" lg:px-16 py-4 px-4 font-normal text-lg  border-t-2">Dakara Live merupakan agensi entertaiment dari Indonesia yang
                            bergerak dalam bidang Virtual Youtuber, kami bertujuan
                            mengembangkan bakat dan minat talent untuk kualitas
                            yang lebih baik, dan dapat menghibur
                            untuk semua kalangan</p>
                    </div>
                </div>

                {/* Visi */}
                <div className=' h-screen w-full max-md:h-[650px] flex justify-center items-center '>
                    <div className='flex max-md:flex-col max-md:my-auto items-center w-[1161px] max-xl:w-11/12 px-12 justify-center h-3/4 max-h-full bg-blue-500 rounded-3xl max-md:text-center'>

                        <h2 className='md:hidden text-[42px]'>Visi</h2>

                        <div className='lg:w-1/3 max-md:w-[200px] h-2/3 max-md:h-[200px] flex justify-center items-center mx-auto my-3'>
                            <img src={Logo} alt="" className='w-[80%] max-md:w-[85%]' />
                        </div>

                        <div className='lg:w-2/3 max-md:w-full block justify-center items-center text-white lg:pr-20 max-md:px-10 max-sm:px-1'>
                            <h2 className='max-md:hidden text-[42px] mb-[55px] -mt-10'>Visi</h2>
                            <p className=' text-[20px] max-md:text-[16px] max-md:leading-6  font-semibold leading-loose'>
                                Memperkenalkan konsep dunia virtual kepada
                                masyarakat luas, serta menyediakan hiburan
                                yang memiliki kualitas dan kemampuan
                                bersaing yang tinggi.
                            </p>
                        </div>
                    </div>
                </div>


                {/* Misi */}
                <div className=' h-screen w-full max-md:h-[650px] flex justify-center items-center '>
                    <div className='flex max-md:flex-col max-md:my-auto items-center w-[1161px] max-xl:w-11/12 px-12 justify-center h-3/4 max-h-full bg-violet-500 rounded-3xl max-md:text-center'>
                        <h2 className='md:hidden text-[42px]'>Misi</h2>
                        <div className='lg:w-2/3 max-md:w-full block justify-center items-center text-white lg:pl-20 max-md:px-10 max-sm:px-1'>
                            <h2 className='max-md:hidden text-[42px] mb-[55px] -mt-10'>Misi</h2>
                            <div className='md:hidden lg:w-1/3 max-md:w-[200px] h-2/3 max-md:h-[200px] flex justify-center items-center mx-auto my-3'>
                                <img src={Logo} alt="" className='w-[80%] max-md:w-[85%]' />
                            </div>
                            <p className=' text-[20px] max-md:text-[10px] max-md:leading-6  font-semibold leading-loose'>
                                Menyediakan konten yang dapat menghibur khalayak umum,
                                memberikan pengalaman interaksi yang menyenangkan
                                dengan viewers, serta mengutamakan hubungan
                                yang professional sebagai entertainer.
                            </p>
                        </div>
                        <div className='max-md:hidden lg:w-1/3 max-md:w-[200px] h-2/3 max-md:h-[200px] flex justify-center items-center mx-auto my-3'>
                            <img src={Logo} alt="" className='w-[80%] max-md:w-[85%]' />
                        </div>



                    </div>
                </div>

                {/* Misi */}
                {/* <div className=' h-screen w-full flex justify-center items-center'>
                    <div className='flex items-center w-4/5 px-20 justify-center h-3/4 max-h-full bg-violet-500 rounded-3xl '>
                        <div className='md:w-2/3 block justify-center items-center text-white pl-16'>
                            <h2 className=' text-[42px] mb-[55px] -mt-10'>Misi</h2>
                            <p className=' text-[20px] pr-28 font-semibold leading-loose'>
                                Menyediakan konten yang dapat menghibur khalayak umum,
                                memberikan pengalaman interaksi yang menyenangkan
                                dengan viewers, serta mengutamakan hubungan
                                yang professional sebagai entertainer.
                            </p>
                        </div>

                        <div className='md:w-1/3 h-2/3 flex justify-center items-center'>
                            <img src={Logo} alt="" className='bg-black w-full' />
                        </div>
                    </div>
                </div> */}


                {/* MeetOurStaff */}
                <div className=' h-auto w-full flex flex-col justify-center items-center'>
                    <h2 className='py-14 text-[40px] text-center max-md:py-7'>Meet Our Team</h2>
                    <div className=' lg:w-[900px] grid grid-cols-6 md:gap-10 justify-items-center lg:h-screen  w-full max-lg:px-6 max-lg:gap-4 max-[770px]-h[800px] max-md:h-[550px]'>

                        <div class="col-span-2 bg-white w-full aspect-[5/6] rounded-md relative self-end"><img src={Team} alt="" className=' object-cover h-full object-left rounded-md ' /><div class="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80 rounded-md "></div></div>
                        <div class="col-span-2 bg-white w-full aspect-[5/6] rounded-md relative self-end"><img src={Team} alt="" className=' object-cover h-full object-left rounded-md' /><div class="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80 rounded-md"></div></div>
                        <div class="col-span-2 bg-white w-full aspect-[5/6] rounded-md relative self-end"><img src={Team} alt="" className=' object-cover h-full object-left rounded-md' /><div class="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80 rounded-md"></div></div>
                        <div class="col-start-2 col-end-4 bg-white w-full aspect-[5/6] rounded-md relative"><img src={Team} alt="" className=' object-cover h-full object-left rounded-md' /><div class="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80 rounded-md"></div></div>
                        <div class="col-end-6 col-span-2 bg-white w-full aspect-[5/6] rounded-md relative"><img src={Team} alt="" className=' object-cover h-full object-left rounded-md' /><div class="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80 rounded-md"></div></div>


                        {/* <div class="col-span-2 bg-white h-[310] w-[250px] max-[960px]:h-[280px] max-[960px]:w-[220px] rounded-md relative"><img src={Team} alt="" className=' object-cover h-full object-left rounded-md' /><div class="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80 rounded-md "></div></div>
                        <div class="col-span-2 bg-white h-[310] w-[250px] max-[960px]:h-[280px] max-[960px]:w-[220px] rounded-md relative"><img src={Team} alt="" className=' object-cover h-full object-left rounded-md' /><div class="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80 rounded-md"></div></div>
                        <div class="col-span-2 bg-white h-[310] w-[250px] max-[960px]:h-[280px] max-[960px]:w-[220px] rounded-md relative"><img src={Team} alt="" className=' object-cover h-full object-left rounded-md' /><div class="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80 rounded-md"></div></div>
                        <div class="col-start-2 col-end-4 bg-white h-[310] max-[960px]:h-[280px] max-[960px]:w-[220px] w-[250px] rounded-md relative"><img src={Team} alt="" className=' object-cover h-full object-left rounded-md' /><div class="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80 rounded-md"></div></div>
                        <div class="col-end-6 col-span-2 bg-white h-[310] w-[250px] max-[960px]:h-[280px] max-[960px]:w-[220px] rounded-md relative"><img src={Team} alt="" className=' object-cover h-full object-left rounded-md' /><div class="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80 rounded-md"></div></div> */}

                    </div>
                </div>

                {/* ConnectToUs */}
                <div className=' h-[600px]  w-full flex flex-col items-center bg-white/5 mt-32'>
                    <h2 className='py-16 text-[40px] text-center'>Connect to Us</h2>
                    <div className=' md:w-2/3 grid grid-cols-7 max-md:grid-cols-6 md:gap-8 md:h-[300px] md:px-10 max-md:w-full max-md:px-5 max-md:gap-2 max-md:h-[350px] text-center font-semibold '>
                        <div class="col-start-1 col-end-2 h-full max-md:col-span-2 rounded-md relative "><IoLogoTwitter className='w-full h-auto max-[1100px]:w-20 max-md:w-14 mx-auto' /><span className='text-xl'>Twitter</span></div>
                        <div class="col-start-3 col-end-4 h-full max-md:col-span-2 rounded-md relative"><SiDiscord className='w-full h-auto max-[1100px]:w-20 max-md:w-14 mx-auto' /><span className='text-xl'>Discord</span></div>
                        <div class="col-start-5 col-end-6 h-full max-md:col-span-2 rounded-md relative"><IoLogoYoutube className='w-full h-auto max-[1100px]:w-20 max-md:w-14 mx-auto' /><span className='text-xl'>Youtube</span></div>
                        <div class="col-start-7 col-end-8 h-full max-md:col-span-2 rounded-md relative"><AiFillInstagram className='w-full h-auto max-[1100px]:w-20 max-md:w-14 mx-auto' /><span className='text-xl'>Instagram</span></div>
                        <div class="col-start-2 col-end-3 h-full max-md:col-span-2 rounded-md relative"><SiFacebook className='w-full h-auto max-[1100px]:w-20 max-md:w-14 mx-auto' /><span className='text-xl'>Facebook</span></div>
                        <div class="col-start-6 col-end-7 h-full max-md:col-span-2 rounded-md relative"><SiTiktok className='w-full h-auto max-[1100px]:w-20 max-md:w-14 mx-auto' /><span className='text-xl'>Tiktiok</span></div>

                    </div>

                </div>


            </div>
            <Footer />

        </div>

    )
}

export default About