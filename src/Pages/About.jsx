import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
// import '../css/border.css'

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
        window.scrollTo(0,0);
        AOS.init({ duration: 2000 });
    }, [])
    const upDownAnimation = `
    @keyframes up-down {
      0% {
        transform: translateY(20);
      }
      50% {
        transform: translateY(-20px);
      }
      100% {
        transform: translateY(20);
      }
    }

    .animate-up-down {
      animation: up-down 2s ease-in-out infinite;
    }
  `;
    return (
        <div className="font-sans intro h-max= bg-[url('./assets/bg-home.png')] bg-no-repeat bg-cover bg-center ">
            <div className="container md:px-5 max-md:px-3 text-white ">

                {/* About */}
                <div className=' h-screen w-full mx-auto  flex justify-center items-center'>
                    <div className='mx-auto text-center'
                        data-aos="fade-down">
                        <h2 className=' text-5xl max-sm:text-4xl font-bold py-4'>Dakara ID</h2>
                        <p className=" lg:px-16 py-4 px-4 font-normal text-lg  border-t-2 ">Dakara Live merupakan agensi entertaiment dari Indonesia yang
                            bergerak dalam bidang Virtual Youtuber, kami bertujuan
                            mengembangkan bakat dan minat talent untuk kualitas
                            yang lebih baik, dan dapat menghibur
                            untuk semua kalangan</p>
                    </div>
                </div>

                {/* Visi */}
                <div className='w-full h-fit flex justify-center '>
                    <div className='w-full flex justify-center space-x-5 items-center max-md:flex-col bg-gradient-to-b from-cyan-600 to-blue-700 md:aspect-[16/7] rounded-3xl max-md:p-5'
                    data-aos="fade-left">
                        <h2 className='md:hidden text-[42px] max-md:text-3xl'>Visi</h2>
                        <div className='w-2/6 flex justify-center items-center mx-auto my-3'>
                            <img src={Logo} alt="Logo" className='w-9/12 max-sm:w-full animate-up-down' />
                            <style>{upDownAnimation}</style>
                        </div>
                        <div className='md:w-3/6 block max-md:px-3 text-white lg:pr-28 md:pr-5 max-sm:px-1 m-0 max-md:text-center'>
                            <h2 className='max-md:hidden lg:text-[42px] max-lg:text-4xl lg:mb-[50px] max-lg:mb-5'>Visi</h2>
                            <p className=' lg:text-xl max-lg:text-lg max-md:text-sm max-md:leading-5  font-normal leading-relaxed'>
                            Memperkenalkan konsep dunia virtual kepada
                                masyarakat luas, serta menyediakan hiburan
                                yang memiliki kualitas dan kemampuan
                                bersaing yang tinggi.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Misi */}
                <div className='w-full h-fit flex justify-center my-36'>
                    <div className='w-full flex justify-center space-x-5 items-center max-md:flex-col bg-gradient-to-b from-blue-800 via-violet-600 to-fuchsia-300 md:aspect-[16/7] rounded-3xl max-md:p-5'
                    data-aos="fade-right">
                        <h2 className='md:hidden text-[42px] max-md:text-3xl'>Misi</h2>
                        <div className='md:hidden w-2/6 flex justify-center items-center mx-auto my-3'>
                            <img src={Logo} alt="" className='w-9/12 max-sm:w-full animate-up-down' />
                            <style>{upDownAnimation}</style>
                        </div>
                        <div className='md:w-3/6 block max-md:px-3 text-white lg:pr-10 max-sm:px-1 m-0 max-md:text-center'>
                            <h2 className='max-md:hidden lg:text-[42px] max-lg:text-4xl lg:mb-[50px] max-lg:mb-5'>Misi</h2>
                            <p className=' lg:text-xl max-lg:text-lg max-md:text-sm max-md:leading-5  font-normal leading-relaxed'>
                            Menyediakan konten yang dapat menghibur khalayak umum,
                                memberikan pengalaman interaksi yang menyenangkan
                                dengan viewers, serta mengutamakan hubungan
                                yang professional sebagai entertainer.
                            </p>
                        </div>
                        <div className='w-2/6 flex justify-center max-md:hidden'>
                            <img src={Logo} alt="Logo" className='w-9/12 animate-up-down' />
                            <style>{upDownAnimation}</style>
                        </div>
                    </div>
                </div>

                {/* MeetOurStaff */}
                <div className=' h-auto w-full flex flex-col justify-center items-center'>
                    <h2 className='md:py-14 max-md:py-5 md:text-[40px] max-md:text-3xl text-center'>Meet Our Team</h2>
                    <div className='md:w-8/12 max-md:w-full aspect-video grid grid-cols-6 md:gap-12 justify-items-center max-lg:gap-4'
                    data-aos="zoom-in-down">
                        <div class="col-span-2 bg-white w-full aspect-[5/6] rounded-md relative self-end"><img src={Team} alt="" className=' object-cover h-full object-left rounded-md ' /><div class="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80 rounded-md "></div></div>
                        <div class="col-span-2 bg-white w-full aspect-[5/6] rounded-md relative self-end"><img src={Team} alt="" className=' object-cover h-full object-left rounded-md' /><div class="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80 rounded-md"></div></div>
                        <div class="col-span-2 bg-white w-full aspect-[5/6] rounded-md relative self-end"><img src={Team} alt="" className=' object-cover h-full object-left rounded-md' /><div class="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80 rounded-md"></div></div>
                        <div class="col-start-2 col-end-4 bg-white w-full aspect-[5/6] rounded-md relative"><img src={Team} alt="" className=' object-cover h-full object-left rounded-md' /><div class="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80 rounded-md"></div></div>
                        <div class="col-end-6 col-span-2 bg-white w-full aspect-[5/6] rounded-md relative"><img src={Team} alt="" className=' object-cover h-full object-left rounded-md' /><div class="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80 rounded-md"></div></div>
                    </div>
                </div>
            
            </div>

                {/* ConnectToUs */}
                <div className=' h-[600px] text-white  w-full flex flex-col items-center bg-white/5 mt-32'>
                    <h2 className='py-16 text-[40px] max-md:text-3xl text-center'>Connect to Us</h2>
                    <div className=' md:w-2/3 grid grid-cols-7 max-md:grid-cols-6 md:gap-8 md:h-[300px] md:px-10 max-md:w-full max-md:px-5 max-md:gap-2 max-md:h-[350px] text-center font-semibold '>
                        <div class="col-start-1 col-end-2 h-full max-md:col-span-2 rounded-md relative "><IoLogoTwitter className='w-[64px] h-auto max-md:w-12 mx-auto' /><span className='text-xl max-md:text-lg'>Twitter</span></div>
                        <div class="col-start-3 col-end-4 h-full max-md:col-span-2 rounded-md relative"><SiDiscord className='w-[64px] h-auto max-md:w-12 mx-auto' /><span className='text-xl max-md:text-lg'>Discord</span></div>
                        <div class="col-start-5 col-end-6 h-full max-md:col-span-2 rounded-md relative"><IoLogoYoutube className='w-[64px] h-auto max-md:w-12 mx-auto' /><span className='text-xl max-md:text-lg'>Youtube</span></div>
                        <div class="col-start-7 col-end-8 h-full max-md:col-span-2 rounded-md relative"><AiFillInstagram className='w-[64px] h-auto max-md:w-12 mx-auto' /><span className='text-xl max-md:text-lg'>Instagram</span></div>
                        <div class="col-start-2 col-end-3 h-full max-md:col-span-2 rounded-md relative"><SiFacebook className='w-[64px] h-auto max-md:w-12 mx-auto' /><span className='text-xl max-md:text-lg'>Facebook</span></div>
                        <div class="col-start-6 col-end-7 h-full max-md:col-span-2 rounded-md relative"><SiTiktok className='w-[64px] h-auto max-md:w-12 mx-auto' /><span className='text-xl max-md:text-lg'>Tiktok</span></div>

                    </div>

                </div>
            <Footer />

        </div>

    )
}

export default About