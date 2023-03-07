import MyVideo from "../assets/Dakara_Live_Teaser.webm";
import React, { useState } from "react";

import { useNavigate } from "react-router-dom"

function Intro() {
    const [muted, setMuted] = useState(false);
    const navigate = useNavigate()
    return (
        <div className=" max-w-screen">
            <div className=" h-screen">
                <video className=" h-screen w-screen object-cover object-center" muted={muted} onClick={() => setMuted(!muted)} autoPlay controls loop >
                    <source src={MyVideo} type="video/webm" />
                    Your browser does not support HTML5 video.
                </video>
            </div>
            <div className="bg-[url('./assets/bg-journey.webp')] bg-cover h-screen w-full flex justify-center items-center">
                <button className=' h-[72px] w-[278px] bg-white/50 hover:bg-white/20 rounded-2xl border-white border-2 shadow-blue-800 shadow-md' onClick={() => navigate('/home')}>
                    <span style={{ textShadow: '0px 2px 2px rgb(47 79 79) ' }} className="text-white font-semibold text-[24px]">Start Your Journey</span>
                </button>
            </div>
        </div>

    )
}

export default Intro