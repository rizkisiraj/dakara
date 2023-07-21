import { useEffect, useState } from "react";
import TalentController from "../Components/Talent-controller";
import { motion, useAnimationControls } from "framer-motion";
import talents from '../Talents.json'
import { Link, useLocation } from "react-router-dom";

import { AiOutlineClose } from "react-icons/ai";
import { MdKeyboardBackspace } from "react-icons/md";

const ImageVariant = {
  initial: { y: 0, x: 0 },
  animate: { y: 0, x: -200 },
  animateSmallScreen: { y: 0, x: 0 }
}

const infoVariant = {
  notVisible: { visibility: 'hidden' },
  visible: { visibility: 'visible' }
}

const Talent = () => {
  const location = useLocation();
  useEffect(() => {
    window.matchMedia('(max-width: 640px)').addEventListener('change', e => {
      setSmallScreen(e.matches);
      console.log(e.matches);
    });
  }, []);

  useEffect(() => {
    const smallScreen = window.matchMedia('(max-width: 640px)').matches;
    setSmallScreen(smallScreen);

    if(location.state) {
      setTalent(location.state.talent);
      setIsShowing(true);
    }
  }, [location.state])

  const [talent, setTalent] = useState(talents[0]);
  const [isShowing, setIsShowing] = useState(false);
  const [isSmallScreen, setSmallScreen] = useState(false);
  const [isSocialMediaMode, setIsSocialMediaMode] = useState(false);

  const onClickHandler = () => {
    if (isShowing) {
      setIsSocialMediaMode(false);
    }
    setIsShowing(!isShowing);
  }

  return (
    <>
      <div className=' font-sans w-full pt-20 min-h-screen relative bg-[url("./assets/bg-talent.webp")] bg-cover bg-no-repeat bg-center flex justify-center items-end overflow-x-hidden'>
        <div className="relative w-full text-center flex justify-center overflow-y-hidden">
          <motion.img onClick={onClickHandler} key={talent.Nama} initial={{ y: 500 }} animate={isShowing ? (isSmallScreen ? 'animateSmallScreen' : 'animate') : 'initial'} variants={ImageVariant} transition={{ y: { duration: .5 } }} src={require(`../assets/${talent["Profile Setengah Badan"]}`)} className="cursor-pointer w-full max-w-md block" alt="gambar talent" />
        </div>
        <motion.div initial={{ visibility: 'none' }} animate={isShowing ? 'visible' : 'notVisible'} transition={{ visibility: { duration: 1 } }} variants={infoVariant} className="text-white absolute bottom-10 md:bottom-auto md:top-40 md:right-20 lg:right-32 xl:right-64 w-[80%] md:w-full max-w-[493px] bg-gradient-to-b from-[#3B3BA5]/70 to-[#9625A8]/70 h-fit text-center py-7 px-10 md:px-20 md:py-14 rounded-xl shadow-talentCard">
          <div className="absolute flex w-6 h-6 bg-transparent top-2 right-2" onClick={() => { setIsShowing(!isShowing); setIsSocialMediaMode(false) }}>
            <button><span className='m-auto'><AiOutlineClose size={22} className="hover:text-[#EFC3F6]" /></span></button>
          </div>
          <div className={`absolute ${isSocialMediaMode ? 'flex' : 'hidden'} w-6 h-6 bg-transparent top-2 left-2`} onClick={() => { setIsSocialMediaMode(false) }}>
            <button><span className='m-auto'><MdKeyboardBackspace size={35} className="hover:text-[#EFC3F6]" /></span></button>
          </div>
          <h2 className="text-xl md:text-4xl uppercase mb-4">{talent.Nama}</h2>
          <div className="text-white text-lg md:text-xl before:top-0 py-4 before:left-0 before:border-r-[3px] relative before:absolute before:w-full before:h-[30px] before:border-t-[3px] before:border-white">
            {
              !isSocialMediaMode ?
                <>
                  <Link to={`/talent/${talent.Nama}`} className="block text-inherit text-center mx-auto no-underline hover:text-[#EFC3F6]" >Tentang {talent.Nama}</Link>
                  <button aria-label="social media detail handler" className="block text-inherit text-center mx-auto my-4 hover:text-[#EFC3F6]" onClick={() => setIsSocialMediaMode(true)}>Social Media</button>
                  <Link to='/merch' className="text-inherit text-center mx-auto no-underline hover:text-[#EFC3F6] mb-0">Merchandise</Link>
                </>
                :
                <>
                  <a className="block text-inherit no-underline hover:text-[#EFC3F6]" href={talent.Instagram}>Instagram</a>
                  <a className="block text-inherit no-underline my-4 hover:text-[#EFC3F6]" href={talent.Youtube}>Youtube</a>
                  <a className="block text-inherit no-underline hover:text-[#EFC3F6]" href={talent.Twitter}>Twitter</a>
                </>
            }
          </div>
        </motion.div>
        <TalentController setIsShowing={setIsShowing} setTalent={setTalent} talent={talent} />
      </div>
    </>
  )
}

export default Talent;