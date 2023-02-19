import Logo from '../assets/logo.png'
import { useState } from "react"

function Contact() {
    const menus = [
        { name: "Intro" },
        { name: "Home" },
        { name: "Talent" },
        { name: "About" },
        { name: "News" },
        { name: "Merch" },
    ]

    return (
        <div className="w-full h-auto relative max-md:h-auto ">
            <div className="flex h-3/5 bg-white/20 pb-5">
                <div className="container mx-auto max-w-7xl mt-28 flex justify-evenly max-md:flex-col max-md:mt-10 max-md:ml-3">
                    {/* LOGO-DAKARA */}
                    <div className="flex w-64 h-auto text-center max-md:mb-7">
                        <img src={Logo} alt="logos" className="w-11 h-11 inline-block" />
                        <span className="ml-2 text-2xl mt-1 font-bold text-white">Dakara Live</span>
                    </div>

                    {/* QUICK-LINKS */}
                    <div className="links w-64 h-auto text-white max-md:mb-5">
                        <h3 className=' font-semibold text-2xl mb-3'>QUICK LINKS</h3>
                        <ul className='pl-1'>
                            {menus.map((menu) => (
                                <li className=" py-2 duration-300 hover:bg-sky-300/40">
                                    <a className=" cursor-pointer font-Barlow font-normal decoration-white/0 text-white outline-0 text-lg md:py-2 pl-2 py-2 lg:text-md max-md:text-sm border-l-2 border-transparent hover:border-white">
                                        {menu.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    {/* FORM KONTAK*/}
                    <div className="kontak w-80 h-auto text-white max-md:mb-5 pr-5">
                        <h3 className=' font-semibold text-2xl mb-5'>KONTAK KAMI</h3>
                        <form className=' inline-block w-full'
                        action="">
                            <input className='w-full max-sm:w-3/4 bg-transparent border-white border-b-2 mb-5 outline-0 pl-1 pb-1 text-md font-thin '
                            type="text"
                            placeholder='Nama' /> 
                            <br/>

                            <input className='w-full max-sm:w-3/4 bg-transparent border-white border-b-2 mb-5 outline-0 pl-1 pb-1 text-md font-thin'
                            type="email" name="" id="" 
                            placeholder='Email' /> 
                            <br />
                            
                            <label htmlFor="">Komentar</label> <br />
                            <textarea className='bg-transparent border-white border-2 mb-5 w-full max-sm:w-3/4 outline-0 pl-1 text-md font-thin'
                            name="" id="" rows="5">

                            </textarea>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact