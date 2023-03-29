import { useEffect, useState } from "react";
import TalentController from "../Components/Talent-controller";
import { motion, useAnimationControls } from "framer-motion";
import talents from '../Talents.json'


const ImageVariant = {
  initial:{y: 0, x: 0},
  animate:{y: 0, x: -200},
  animateSmallScreen: {y: 0, x:0}
}

const infoVariant = {
  notVisible:{ visibility: 'hidden' },
  visible: { visibility: 'visible' }
}

const Talent = () => {
  useEffect(() => {
    window.matchMedia('(max-width: 640px)').addEventListener('change',e => {
      setSmallScreen(e.matches);
      console.log(e.matches);
    });
  },[]);

  useEffect(() => {
    const smallScreen = window.matchMedia('(max-width: 640px)').matches;
    setSmallScreen(smallScreen);
  },[])

  const [talent, setTalent] = useState(talents[0]);
  const [isShowing, setIsShowing] = useState(false);
  const [isSmallScreen, setSmallScreen] = useState(false);
  const [isSocialMediaMode, setIsSocialMediaMode] = useState(false);

  const onClickHandler = () => {
    setIsShowing(!isShowing);
  }

  return (
    <>
      <div className=' font-sans w-full pt-20 min-h-screen relative bg-[url("./assets/bg-talent.png")] bg-cover bg-no-repeat bg-center flex justify-center items-end overflow-x-hidden'>
        <div className="relative w-full text-center flex justify-center overflow-y-hidden">
          <motion.img onClick={onClickHandler} key={talent.Nama} initial={{y: 500}} animate={isShowing ?  (isSmallScreen ? 'animateSmallScreen' : 'animate') : 'initial'} variants={ImageVariant} transition={{y: {duration: .5}}} src={require(`../assets/${talent["Profile Setengah Badan"]}`)} className="cursor-pointer w-full max-w-md block" alt="gambar talent" />
        </div>
          <motion.div initial={{visibility: 'none'}} animate={isShowing ? 'visible' : 'notVisible'} transition={{visibility: {duration: 1}}} variants={infoVariant} className="text-[#3B3BA5] absolute bottom-10 md:bottom-auto md:top-40 md:right-20 lg:right-32 xl:right-64 w-[80%] md:w-full max-w-[493px] bg-white h-fit text-center py-7 md:py-14 rounded-xl shadow-talentCard">
            <h2 className="text-xl md:text-5xl uppercase mb-4">{talent.name}</h2>
            <div>
              {
                !isSocialMediaMode ?
              <>
              <p>Tentang { talent.Nama }</p>
              <button aria-label="social media detail handler" className="block text-inherit" onClick={() => setIsSocialMediaMode(true)}>Social Media</button>
              <p>Merchandise</p>
              </>
              :
              <>
              <a href={talent.Instagram}>Instagram</a>
              <a href={talent.Youtube}>youtube</a>
              <a href={talent.Twitter}>Twitter</a>
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