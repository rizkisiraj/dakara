import Logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';

import { motion } from 'framer-motion';

function About() {
  const navigate = useNavigate();

  return (

    <div className="flex lg:flex-row justify-center lg:w-10/12 max-lg:w-full  mx-auto items-center max-md:flex-col md:h-screen text-center max-md:px-2 max-md:my-28">

      {/* logo */}
      <motion.div className='basis-1/4 md:w-[290px] max-md:w-[200px] max-md:h-auto h-3/5 mx-auto flex items-center max-md:mb-5'
        initial = {{opacity : 0}}
        whileInView = {{opacity : 1}}
        transition={{duration : 2}}>
        <motion.img src={Logo} alt="logo" className='mx-auto w-full pr-0 max-md:w-48 max-sm:w-44 items-center'
          whileInView = {{y : [-20, 20, -20]}}
          transition={{repeat : Infinity, duration : 2}}/>
      </motion.div>

      {/* About */}
      <motion.div className='basis-3/5 lg:ml-2 px-1'
        initial={{opacity: 0 ,x : 300}}
        animate={{opacity: 1 ,x : 0}}
        transition={{duration : 2.5}}>
        <h2 className=' text-4xl max-md:text-3xl max-sm:text-2xl mt-10 font-semibold mx-auto max-md:mt-1'>Tentang Kami</h2>

        <div className="mt-5 py-3 px-4 text-lg max-md:text-md max-sm:text-sm max-lg:max-w-md mx-auto  text-center  before:top-0 before:left-0 before:border-r-[3px] relative before:absolute before:w-full before:h-[40px] before:border-t-[3px] before:border-white">
          <p>
          Dakara Live merupakan agensi entertaiment dari Indonesia yang
          bergerak dalam bidang Virtual Youtuber, kami bertujuan
          mengembangkan bakat dan minat talent untuk kualitas
          yang lebih baik, dan dapat menghibur
          untuk semua kalangan
          </p>
        </div>
        
        <div>
          <button className=' h-14 w-48 py-1.5 mt-7 bg-white/40 hover:bg-white/30 rounded-xl border-white border-2 font-semibold text-md shadow-talentLogo'
            onClick={() => navigate('/about')} >
            <span className='text-center text-lg'>Selengkapnya</span>
          </button>
        </div>
      </motion.div>

    </div>
  )
}

export default About