import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/logo.png';
const LoadingPage = () => {
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    // useEffect(() => {
    //     setTimeout(() => {
    //         setLoading(false);
    //         navigate('/intro');
    //     }, 10000);
    // }, []);



    return (
        <div className='h-screen w-full bg-slate-800 relative'>
            {loading ? (
                <div className='flex h-screen justify-center items-center'>
                    <div className='flex z-30 items-center justify-center'>
                        <img src={Logo} alt="" className=' w-28 max-md:w-20' />
                        <span className='text-white font-semibold text-3xl ml-1 max-md:text-xl'>Dakara Live</span>
                    </div>
                    <div class="bubbles flex-wrap">
                        <span style={{ "--i": 11, "--s":"20px" }} className="bottom-32 right-24" ></span>
                        <span style={{ "--i": 16, "--s":"30px" }} className="right-24 top-28"></span>
                        <span style={{ "--i": 24, "--s":"27px" }} className="bottom-64"></span>
                        <span style={{ "--i": 10, "--s":"25px" }} className="bottom-40"></span>
                        <span style={{ "--i": 14, "--s":"22px" }} className="top-40 right-20"></span>
                        <span style={{ "--i": 23, "--s":"40px" }} className="top-44 left-24"></span>
                        <span style={{ "--i": 18, "--s":"20px" }} className="right-24 top-16"></span>
                        <span style={{ "--i": 16, "--s":"32px" }} className="bottom-72"></span>

                        <span style={{ "--i": 20, "--s":"21px" }} className="bottom-36"></span>
                        <span style={{ "--i": 19, "--s":"22px" }} className="bottom-44 left-20"></span>
                        <span style={{ "--i": 25, "--s":"10px" }} className="bottom-48"></span>
                        <span style={{ "--i": 12, "--s":"26px" }} className="top-24 right-5"></span>
                        <span style={{ "--i": 25, "--s":"21px" }} className="top-40"></span>
                        <span style={{ "--i": 18, "--s":"18px" }} className="top-52"></span>
                        <span style={{ "--i": 13, "--s":"15px" }} className="bottom-16 left-20"></span>
                        <span style={{ "--i": 17, "--s":"29px" }} className="top-16"></span>

                    </div>

                </div>

            ) : (
                <div />
            )}
        </div>
    );
};

export default LoadingPage;
