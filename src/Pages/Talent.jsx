import { useEffect, useState } from "react";
import Navbar1 from "../Components/Navbar";
import TalentController from "../Components/Talent-controller";
import { motion, useAnimationControls } from "framer-motion";
import Risu from "../assets/risu-setengah-badan.webp";
import Violetta from "../assets/violetta-setengah-badan.webp";
import Luxor from "../assets/luxor-setengah-badan.webp";


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

  const [talent, setTalent] = useState({name: 'Ariya Risu', image: Risu});
  const [isShowing, setIsShowing] = useState(false);
  const [isSmallScreen, setSmallScreen] = useState(false)

  const onClickHandler = () => {
    setIsShowing(!isShowing);
  }

  return (
    <>
      <Navbar1 />
      <div className='font-sans w-full pt-20 min-h-screen relative bg-[url("./assets/bg-talent.png")] bg-cover bg-no-repeat bg-center flex justify-center items-end overflow-x-hidden'>
        <div className="relative w-full text-center flex justify-center overflow-y-hidden">
          <motion.img onClick={onClickHandler} key={talent.name} initial={{y: 500}} animate={isShowing ?  (isSmallScreen ? 'animateSmallScreen' : 'animate') : 'initial'} variants={ImageVariant} transition={{y: {duration: .5}}} src={talent.image} className="cursor-pointer w-full max-w-md block" alt="gambar talent" />
        </div>
          <motion.div initial={{visibility: 'none'}} animate={isShowing ? 'visible' : 'notVisible'} transition={{visibility: {duration: 1}}} variants={infoVariant} className="text-[#3B3BA5] absolute bottom-10 md:bottom-auto md:top-40 md:right-20 lg:right-32 xl:right-64 w-[80%] md:w-full max-w-[493px] bg-white h-fit text-center py-7 md:py-14 rounded-xl shadow-talentCard">
            <h2 className="text-xl md:text-5xl uppercase mb-4">{talent.name}</h2>
            <div>
              <p>Tentang Ariya Risu</p>
              <p>Social Media</p>
              <p>Merchandise</p>
            </div>
        </motion.div>
        <TalentController setIsShowing={setIsShowing} setTalent={setTalent} talent={talent} />
      </div>
    </>
  )
}

export default Talent;