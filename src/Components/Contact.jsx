import Logo from '../assets/logo.png'
import { Link } from "react-router-dom"

import React, { useRef } from 'react';
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';

function Contact() {
    const menus = [
        { name: "Intro", src: "../" },
        { name: "Home", src: "/home" },
        { name: "Talent", src: "/talent" },
        { name: "About", src: "/about" },
        { name: "Merch", src: "/merch" },
    ];

    const form = useRef();

    const redirectToGmail = (e) => {
        e.preventDefault();
    
        const email = 'dakaralive.v@gmail.com'; // Ganti dengan alamat email tujuan
        const subject = 'Pesan dari ' + e.target.user_name.value; // Menggunakan nilai dari input Nama sebagai subjek
        const body = e.target.message.value; // Menggunakan nilai dari textarea Komentar sebagai isi pesan
    
        const url = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
        window.open(url);
    };

    return (
        <div className="w-full h-auto relative max-md:h-auto lg:mt-40 ">
            <div className="flex h-3/5 bg-white/10 pb-5 lg:px-2 max-md:px-6">
                <div className="w-full mx-auto max-w-7xl mt-28 flex justify-evenly max-md:flex-col max-md:mt-10 max-md:ml-3">
                    {/* LOGO-DAKARA */}
                    <div className="flex w-64 h-auto text-center max-md:mb-7">
                        <img src={Logo} alt="logos" className="w-11 h-11 inline-block" />
                        <span className="ml-2 text-2xl max-md:text-lg mt-1 font-bold text-white">Dakara Live</span>
                    </div>

                    {/* QUICK-LINKS */}
                    <div className="links w-64 h-auto text-white max-md:mb-5">
                        <h3 className=' font-semibold text-2xl max-md:text-lg mb-3'>QUICK LINKS</h3>
                        <ul className='pl-0'>
                            {menus.map((menu, index) => (
                                <li className="duration-100 lg:pl-2 hover:bg-sky-300/40 hover:border-l-2 hover:border-l-white"
                                    key={index}>
                                    <Link to={menu.src} className="h-12 flex items-center cursor-pointer decoration-transparent text-white text-lg border-transparent">
                                        {menu.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* FORM KONTAK*/}
                    <div className="kontak w-80 max-[460px]:w-full h-auto text-white max-md:mb-5 pr-5">
                        <h3 className=' font-semibold text-2xl max-md:text-lg mb-5'>KONTAK KAMI</h3>
                        <form className=' inline-block w-full'
                            target="_blank" onSubmit={redirectToGmail}>
                            <input className='w-full max-sm:w-full bg-transparent border-white border-b-2 mb-5 outline-0 pl-1 pb-1 text-md font-thin '
                                type="text"
                                placeholder='Nama'
                                name='user_name'
                                required /> <br />

                            <input className='w-full max-sm:w-full bg-transparent border-white border-b-2 mb-4 outline-0 pl-1 pb-1 text-md font-thin'
                                type="email"
                                placeholder='Email'
                                name="user_email"
                                required /> <br />

                            <label >Komentar</label> <br />

                            <textarea className='bg-transparent border-white border-2 mb-3 w-full max-sm:w-full outline-0 pl-1 pt-1 text-md font-thin resize-none'
                                name="message" 
                                rows="5"
                                required>
                            </textarea>

                            <div className='flex justify-end'>
                                <button type='submit' className=' text-md font-semibold bg-white/50 text-white h-[47px] w-[110px] rounded-md border-2 border-white hover:bg-white/30'>KIRIM</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact