import Footer from '../Components/Footer'
import AutoScroll from '../Components/AutoScroll'
// import '../css/border.css'

import Logo from '../assets/logo.png'

// foto staff
import Staff1 from '../assets/staff1.webp'
import Staff2 from '../assets/staff2.webp'
import Staff3 from '../assets/staff3.webp'
import Staff4 from '../assets/staff4.webp'

import { IoLogoTwitter } from "react-icons/io"
import { SiDiscord } from "react-icons/si"
import { IoLogoYoutube } from "react-icons/io"
import { AiFillInstagram } from "react-icons/ai"
import { SiFacebook } from "react-icons/si"

import { Link } from "react-router-dom";
import { motion }  from "framer-motion";

function About() {
    const imgStaff = [ 
        {staff: Staff1}, 
        {staff: Staff2}, 
        {staff: Staff3}, 
        {staff: Staff4} 
    ];

    return (
        <div className="font-sans intro bg-[url('./assets/bg-home.webp')] bg-no-repeat bg-cover bg-center overflow-hidden ">
            <div className="container md:px-5 max-md:px-3 text-white ">

                {/* About */}
                <div className=' h-screen w-full mx-auto  flex justify-center items-center'>
                    <motion.div className='mx-auto text-center'
                        initial = {{opacity : 0, y: -100}}
                        animate = {{opacity : 1, y:0} }
                        transition={{duration : 1.5}}>
                        <h2 className=' text-5xl max-sm:text-4xl font-bold py-4'>Dakara ID</h2>
                        <p className=" lg:px-16 py-4 px-4 font-normal text-lg  border-t-2 ">Dakara Live merupakan agensi entertaiment dari Indonesia yang
                            bergerak dalam bidang Virtual Youtuber, kami bertujuan
                            mengembangkan bakat dan minat talent untuk kualitas
                            yang lebih baik, dan dapat menghibur
                            untuk semua kalangan</p>
                    </motion.div>
                </div>

                {/* Visi */}
                <div className='w-full h-fit mt-2 flex justify-center '>
                    <motion.div className='w-full flex justify-center space-x-5 items-center max-md:flex-col bg-gradient-to-b from-cyan-600 to-blue-700 md:aspect-[16/7] rounded-3xl max-md:p-5'
                        initial = {{opacity : 0, x : 200}}
                        whileInView = {{opacity : 1, x : 0}}
                        transition={{duration : 1.5}}>

                        <h2 className='md:hidden text-[42px] max-md:text-3xl'>Visi</h2>
                        <div className='w-2/6 flex justify-center items-center mx-auto my-3'>
                            <motion.img src={Logo} alt="Logo" className='w-9/12 max-sm:w-full'
                               animate = {{y : [-20, 20, -20]}}
                               transition={{repeat : Infinity, duration: 2}}/>
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
                    </motion.div>
                </div>

                {/* Misi */}
                <div className='w-full h-fit flex justify-center my-36'>
                    <motion.div className='w-full flex justify-center space-x-5 items-center max-md:flex-col bg-gradient-to-b from-blue-800 via-violet-600 to-fuchsia-300 md:aspect-[16/7] rounded-3xl max-md:p-5'
                        initial = {{opacity : 0, x : -200}}
                        whileInView = {{opacity : 1, x : 0}}
                        transition={{duration : 1.5}}>
                        <h2 className='md:hidden text-[42px] max-md:text-3xl'>Misi</h2>
                        <div className='md:hidden w-2/6 flex justify-center items-center mx-auto my-3'>
                            <motion.img src={Logo} alt="" className='w-9/12 max-sm:w-full'
                                animate = {{y : [-20, 20, -20]}}
                                transition={{repeat : Infinity, duration: 2}}/>
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
                            <motion.img src={Logo} alt="Logo" className='w-9/12'
                                animate = {{y : [-20, 20, -20]}}
                                transition={{repeat : Infinity, duration: 2}}/>
                        </div>
                    </motion.div>
                </div>

                {/* MeetOurStaff */}
                <div className=' h-auto w-full flex flex-col justify-center items-center'>
                    <motion.h2 className='md:py-14 max-md:py-5 md:text-[40px] max-md:text-3xl text-center'
                        initial = {{opacity : 0}}
                        whileInView = {{opacity : 1}}
                        transition={{ duration : 1.5 }}>
                        Meet Our Team
                    </motion.h2>
                    <motion.div className='lg:w-5/12 max-lg:w-7/12 max-md:w-9/12 max-sm:w-10/12 aspect-video grid grid-cols-4 lg:gap-12 justify-items-center max-lg:gap-8'
                        initial = {{opacity : 0}}
                        whileInView = {{opacity : 1}}
                        transition={{ duration : 1.5 }}>
                        {imgStaff.map((item, index) => (
                            <div className="col-span-2 w-full aspect-[5/6] rounded-md relative" key={index}>
                                <img src={item.staff} alt="" className=' object-cover rounded-md' />
                                <div className="absolute object-cover inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80 rounded-md "></div>
                            </div>
                        ))}
                    </motion.div>
                </div>

            </div>

            {/* ConnectToUs */}
            <div className=' h-[600px] text-white  w-full flex flex-col items-center bg-white/5 mt-32'>
                <h2 className='py-16 text-[40px] max-md:text-3xl text-center'>Connect to Us</h2>
                <div className=' w-2/3 grid justify-items-center grid-cols-5 md:gap-8 h-[300px] md:px-10 max-sm:w-full max-md:px-5 max-md:gap-2 text-center font-semibold '>
                    <div className="col-start-1 col-end-2 h-full rounded-md relative"><Link to='https://twitter.com/DakaraLive' target="_blank" className="text-white no-underline "><IoLogoTwitter className='w-[64px] h-auto max-md:w-12 max-sm:w-10 mx-auto' /><span className='text-xl max-md:text-lg max-sm:text-base'>Twitter</span></Link></div>
                    <div className="col-start-3 col-end-4 h-full rounded-md relative"><Link to='https://discord.gg/nJBCre7tmt' target="_blank" className="text-white no-underline "><SiDiscord className='w-[64px] h-auto max-md:w-12 max-sm:w-10 mx-auto' /><span className='text-xl max-md:text-lg max-sm:text-base'>Discord</span></Link></div>
                    <div className="col-start-5 col-end-6 h-full rounded-md relative"><Link to='https://www.youtube.com/@DakaraLiveEntertainment' target="_blank" className="text-white no-underline "><IoLogoYoutube className='w-[64px] h-auto max-md:w-12 max-sm:w-10 mx-auto' /><span className='text-xl max-md:text-lg max-sm:text-base'>Youtube</span></Link></div>
                    <div className="col-start-2 col-end-3 h-full rounded-md relative"><Link to='https://www.facebook.com/profile.php?id=100075887293085' target="_blank" className="text-white no-underline "><SiFacebook className='w-[64px] h-auto max-md:w-12 max-sm:w-10 mx-auto' /><span className='text-xl max-md:text-lg max-sm:text-base'>Facebook</span></Link></div>
                    <div className="col-start-4 col-end-5 h-full rounded-md relative"><Link to='https://www.instagram.com/dakaralive/' target="_blank" className="text-white no-underline "><AiFillInstagram className='w-[64px] h-auto max-md:w-12 max-sm:w-10 mx-auto' /><span className='text-xl max-md:text-lg max-sm:text-base'>Instagram</span></Link></div>
                </div>
            </div>

            <Footer />
            <AutoScroll/>

        </div>

    )
}

export default About