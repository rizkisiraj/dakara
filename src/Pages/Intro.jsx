import MyVideo from "../assets/Dakara_Live_Teaser.webm";
import React, { useState } from "react";

import { useNavigate } from "react-router-dom"

function Intro() {
    const [muted, setMuted] = useState(false);
    const navigate = useNavigate()
    return (
        <div className="font-sans max-w-screen h-fit max-md:h-screen">
            <div className="w-full h-screen max-md:h-[50vh] bg-black flex items-center">
                <video className="w-screen xl:h-screen max-xl:aspect-video object-cover object-center" muted={muted} onClick={() => setMuted(!muted)} autoPlay loop >
                    <source src={MyVideo} type="video/webm" />
                    Your browser does not support HTML5 video.
                </video>
            </div>
            <div className="bg-[url('./assets/bg-journey.webp')] bg-cover bg-center lg:h-screen max-lg:h-[50vh] w-full flex justify-center items-center">
                <button className=' w-[278px] max-lg:w-1/3 max-[500px]:w-1/2 aspect-[17/5] bg-white/50 hover:bg-white/20 rounded-2xl border-white border-2 shadow-blue-800 shadow-md' onClick={() => navigate('/home')}>
                    <span style={{ textShadow: '0px 2px 2px rgb(47 79 79) ' }} className="text-white font-semibold text-[24px] max-lg:text-xl max-md:text-lg max-sm:text-base max-[400px]:text-sm max-[300px]:text-xs">Start Your Journey</span>
                </button>
            </div>
        </div>

    )
}

export default Intro