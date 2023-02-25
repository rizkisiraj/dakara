import { useEffect, useState } from "react";
import Navbar1 from "../Components/Navbar";
import TalentController from "../Components/Talent-controller";
import { motion, useAnimationControls } from "framer-motion";
import Risu from "../assets/risu-setengah-badan.webp";
import Violetta from "../assets/violetta-setengah-badan.webp";
import Luxor from "../assets/luxor-setengah-badan.webp";


const variant = {
  initial:{y: 0, x: 0},
  animate:{y: 0, x: -200}
}

const Talent = () => {

  const [talent, setTalent] = useState(Risu);
  const [talentPosition, setTalentPosition] = useState(0);
  const [isShowing, setIsShowing] = useState(false);

  const onClickHandler = () => {
    setIsShowing(!isShowing);
  }

  return (
    <>
      <Navbar1 />
      <div className='font-sans w-full pt-20 min-h-screen relative bg-[url("./assets/bg-talent.png")] bg-cover bg-no-repeat bg-center flex justify-center items-end'>
        <div className="relative w-full text-center flex justify-center overflow-y-hidden">
          <motion.img key={talentPosition} initial={{y: 500}} animate={isShowing ? 'animate' : 'initial'} variants={variant} transition={{y: {duration: .5}}} src={talent} className="max-w-md block" alt="gambar talent" />
        </div>
          <div className="absolute top-40 right-64 w-[493px] bg-white h-fit text-center">
            <h2 className="text-5xl uppercase">Ariya Risu</h2>
            <button onClick={onClickHandler}>Switch</button>
            <div>
              <p>Tentang Ariya Risu</p>
              <p>Tentang Ariya Risu</p>
              <p>Tentang Ariya Risu</p>
            </div>
        </div>
        <TalentController />
      </div>
    </>
  )
}

export default Talent;