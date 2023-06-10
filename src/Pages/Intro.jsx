import MyVideo from "../assets/Dakara_Live_Teaser.webm";
import React, { useState } from "react";

import { useNavigate } from "react-router-dom"

function Intro() {
    const [muted, setMuted] = useState(true);
    const navigate = useNavigate()
    return (
        <div className="font-sans max-w-screen h-fit max-md:h-screen">
            <div className="w-full h-screen bg-black flex items-center">
                <video className="w-screen xl:h-screen max-xl:aspect-video object-cover object-center" muted={true} autoPlay loop >
                    <source src={MyVideo} type="video/webm" />
                </video>
            </div>

            <button className='absolute bottom-10 left-1/2 transform -translate-x-1/2 bottom  w-[278px] max-lg:w-1/3 max-[500px]:w-1/2 h-20 max-md:h-14 bg-gray-700 hover:bg-gray-500 rounded-2xl border-white border-2 shadow-blue-800 shadow-md' onClick={() => navigate('/home')}>
                <span style={{ textShadow: '0px 2px 2px rgb(47 79 79) ' }} className="text-white font-semibold text-[24px] max-lg:text-xl max-md:text-lg max-sm:text-base max-[400px]:text-sm max-[300px]:text-xs">Start Your Journey</span>
            </button>
        </div>

    )
}

export default Intro