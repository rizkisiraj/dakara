import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import Logo from '../assets/logo.png';


function LoadingPage() {
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    // useEffect(() => {
    //     setTimeout(() => {
    //         setLoading(false);
    //         navigate('/intro');
    //     }, 10000);
    // }, []);


    const ringAnimation  = `
    @keyframes ring  {
        0%{
            transform: rotate(0deg);
            box-shadow: 1px 5px 2px #e65c00;
        }
        50%{
            transform: rotate(180deg);
            box-shadow: 1px 5px 2px #18b201;
        }
        100%{
            transform: rotate(360deg);
            box-shadow: 1px 5px 2px #0456c8;
        }
    }
    .animate-ring {
      animation: ring 2s linear infinite;
    }
    `;



    return (
        <div className='h-screen w-full bg-slate-800 relative overflow-hidden'>
            {loading ? (
                <div className='flex h-screen justify-center items-center'>
                    <div className=' absolute w-64 h-64 rounded-full before:content-none animate-ring'></div>
                    <style>{ringAnimation}</style>
                        <motion.div className='w-48 h-48 mx-auto text-center'
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ repeat: Infinity, duration: 2.5, delay: 0.2 }}>
                            <img src={Logo} className='w-40 h-40 mx-auto mb-1'  alt="" />
                            <span className='text-white font-semibold text-2xl'>Dakara ID</span>
                        </motion.div>


                    {/* <div className='flex items-center justify-center'>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.1, duration: 1 }}>
                            <motion.img src={Logo} alt="" className=' w-28 max-md:w-20'
                                animate={{ y: [-5, 5, -5] }}
                                transition={{ repeat: Infinity, duration: 2, delay: 0.5 }} />
                        </motion.div>

                        <motion.span className='text-white font-semibold text-3xl ml-2 max-md:text-xl'
                            initial={{ x: 1500, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.1 }}>D</motion.span>
                        <motion.span className='text-white font-semibold text-3xl ml-0.5 max-md:text-xl'
                            initial={{ x: 1500, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.7, duration: 0.1 }}>a</motion.span>
                        <motion.span className='text-white font-semibold text-3xl ml-0.5 max-md:text-xl'
                            initial={{ x: 1500, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.9, duration: 0.1 }}>k</motion.span>
                        <motion.span className='text-white font-semibold text-3xl ml-0.5 max-md:text-xl'
                            initial={{ x: 1500, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 1.1, duration: 0.1 }}>a</motion.span>
                        <motion.span className='text-white font-semibold text-3xl ml-0.5 max-md:text-xl'
                            initial={{ x: 1500 }}
                            animate={{ x: 0 }}
                            transition={{ delay: 1.3, duration: 0.1 }}>r</motion.span>
                        <motion.span className='text-white font-semibold text-3xl ml-0.5 max-md:text-xl'
                            initial={{ x: 1500, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 1.5, duration: 0.1 }}>a</motion.span>

                        <motion.span className='text-white font-semibold text-3xl ml-3 max-md:text-xl'
                            initial={{ x: 1500, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 1.7, duration: 0.1 }}>I</motion.span>
                        <motion.span className='text-white font-semibold text-3xl ml-0.5 max-md:text-xl'
                            initial={{ x: 1500 }}
                            animate={{ x: 0 }}
                            transition={{ delay: 1.9, duration: 0.1 }}>D</motion.span>

                        <motion.span className='text-white font-semibold text-3xl ml-1 max-md:text-xl'
                            initial={{ x: 1500, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 2.1, duration: 0.1 }}>.</motion.span>
                        <motion.span className='text-white font-semibold text-3xl ml-0.5 max-md:text-xl'
                            initial={{ x: 1500 }}
                            animate={{ x: 0 }}
                            transition={{ delay: 2.3, duration: 0.1 }}>.</motion.span>
                        <motion.span className='text-white font-semibold text-3xl ml-1 max-md:text-xl'
                            initial={{ x: 1500 }}
                            animate={{ x: 0 }}
                            transition={{ delay: 2.5, duration: 0.1 }}>.</motion.span>
                    </div> */}
                </div>

            ) : (
                <div></div>
            )}
        </div>
    );
};

export default LoadingPage;
