import React, { useState } from 'react';
import { motion } from 'framer-motion';

import Logo from '../assets/logo.png';


function LoadingPage() {
    const [loading, setLoading] = useState(true);

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
        <div className="h-screen w-full bg-[url('./assets/bg-loading.png')] relative overflow-hidden">
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
                </div>

            ) : (
                <div />
            )}
        </div>
    );
};

export default LoadingPage;
