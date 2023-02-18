import { useNavigate } from "react-router-dom"
import React from "react";


function Journey() {
    const navigate = useNavigate()
    return (
        <div className="bg-[url('./assets/bg-journey.png')] bg-cover h-screen w-full flex justify-center items-center">
            <button className='px-5 py-2 bg-slate-500 hover:bg-slate-500/70 rounded-md border-white border-2 shadow-blue-800 shadow-md' onClick={() => navigate('/home')}>
                <span style={{ textShadow: '0px 2px 2px rgb(47 79 79) ' }} className="text-white font-semibold text-lg">Start Your Journey</span>
            </button>
        </div>
    )
}
export default Journey