import { FaDiscord } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

import { useState } from 'react';
import { Link } from "react-router-dom";

function Discord() {

    const [open, setOpen] = useState(false);
    const [close, setClose] = useState(true);
    

    return (
        <div className="absolute z-50">
            <div className={`${close ? 'flex' : 'hidden'} fixed flex w-16 h-16 bg-white bottom-1/2 left-5 rounded-full animate-bounce`}>
                <div className="absolute flex w-6 h-6 bg-slate-700 -top-1.5 -right-1.5 rounded-full border-2 border-white" 
                onClick={() => setClose(false)}>
                    <button><span className='m-auto'><AiOutlineClose size={20} style={{ color: 'white' }} /></span></button>
                </div>
                <button className="m-auto h-full w-full rounded-full"
                    onClick={() => {setOpen(!open); setClose(false);}}>
                    <FaDiscord size={50} className=' m-auto' style={{ color: '#5865F2' }} /></button>
            </div>
            <div className={`${open ? 'flex' : 'hidden'} w-[378px] h-[294px] max-sm:w-[318px] max-sm:h-[234px] max-[356px]:w-[240px]  max-[356px]:h-[174px] rounded-lg bg-white fixed flex-col px-4 max-[356px]:px-1" items-center justify-center text-center bottom-14 left-5 `}>
                <h2 className=" text-2xl font-bold m-0 max-md:text-xl max-[356px]:text-base">DISCORD</h2>
                <p className=" text-md font-semibold mt-[37px] mb-16 max-[356px]:my-5 max-sm:my-7 max-md:text-sm max-[356px]:text-xs">Ayo join grup Discord kami sekarang!!
                    <br /> Mau tunggu apalagi??</p>
                <div className="text-sm max-md:text-xs font-semibold max-[356px]:text-[9px]">
                    <Link className="py-2.5 px-8 max-md:py-2 max-md:px-6 max-[356px]:py-1.5 max-[356px]:px-3 border-cyan-400 text-cyan-500 border-2 mr-5 max-[356px]:mr-2 rounded-md hover:bg-cyan-500 hover:text-white no-underline"
                    onClick={() => setOpen(false)}>
                        UDAH KOK</Link>
                    <Link className="py-2.5 px-3 max-md:py-2 max-md:px-5 max-[356px]:py-1.5 max-[356px]:px-0 border-cyan-500 text-gray-50 hover:text-cyan-500 bg-cyan-500 border-2 rounded-md hover:bg-white no-underline" 
                        to={'https://discord.gg/nJBCre7tmt'}  target="_blank"
                        >JOIN SEKARANG</Link>
                </div>
            </div>
        </div>
    )
}
export default Discord