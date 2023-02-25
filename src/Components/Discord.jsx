import { FaDiscord } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

import { useEffect, useState } from 'react';

function Discord() {

    const [open, setOpen] = useState(false);
    const [close, setClose] = useState(true);
    

    return (
        <div className="absolute">
            <div className={`${close ? 'flex' : 'hidden'} fixed flex w-16 h-16 bg-white bottom-1/3 right-5 rounded-full animate-bounce`}>
                <div className="absolute flex w-6 h-6 bg-slate-700 -top-1.5 -right-1.5 rounded-full border-2 border-white" 
                onClick={() => setClose(false)}>
                    <button><span className='m-auto'><AiOutlineClose size={20} style={{ color: 'white' }} /></span></button>
                </div>
                <button className="m-auto h-full w-full rounded-full"
                    onClick={() => {setOpen(!open); setClose(false);}}>
                    <FaDiscord size={50} className=' m-auto' style={{ color: '#5865F2' }} /></button>
            </div>
            <div className={`${open ? 'flex' : 'hidden'} w-[378px] h-[294px] rounded-lg bg-white fixed flex-col px-4 items-center justify-center text-center bottom-5 right-5`}>
                <h2 className=" text-2xl font-semibold m-0 ">DISCORD</h2>
                <p className=" text-md font-semibold mt-[37px] mb-16">Ayo join grup Discord kami sekarang!!
                    <br /> Mau tunggu apalagi??</p>
                <div className="text-sm font-semibold">
                    <button className="h-10 w-36 border-cyan-400 text-cyan-500 border-2 mr-5 rounded-md hover:bg-cyan-500 hover:text-white"
                    onClick={() => setOpen(false)}>
                        UDAH KOK</button>
                    <button className="h-10 w-36 border-cyan-500 text-gray-50 hover:text-cyan-500 bg-cyan-500 border-2 rounded-md hover:bg-white">JOIN SEKARANG</button>
                </div>
            </div>
        </div>
    )
}
export default Discord