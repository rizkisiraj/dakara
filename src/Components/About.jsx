import Logo from '../assets/logo.png'

function About() {
  const upDownAnimation = `
    @keyframes up-down {
      0% {
        transform: translateY(20);
      }
      50% {
        transform: translateY(-20px);
      }
      100% {
        transform: translateY(20);
      }
    }

    .animate-up-down {
      animation: up-down 2s ease-in-out infinite;
    }
  `;

  return (

    <div className="flex lg:flex-row justify-center lg:w-10/12 max-lg:w-full  mx-auto items-center max-md:flex-col md:h-screen text-center max-md:px-2 max-md:my-28">
      <div className='basis-1/4 md:w-[290px] max-md:w-[200px] max-md:h-auto h-3/5 mx-auto flex items-center max-md:mb-5'
        data-aos="fade-right">
        <img src={Logo} alt="" className='mx-auto w-full pr-0 max-md:w-48 max-sm:w-44 items-center animate-up-down' />
        <style>{upDownAnimation}</style>
      </div>
      <div className='basis-3/5 lg:ml-2 px-1'
        data-aos="fade-left">
        <h2 className=' text-4xl max-md:text-3xl max-sm:text-2xl mt-10 font-semibold mx-auto max-md:mt-1'>Tentang Kami</h2>
        <p className="mt-4 py-2 md:pr-5 text-lg max-md:text-md max-sm:text-sm max-w-[38rem] max-lg:max-w-md mx-auto border-t-2 border-r-2/2 text-center">Dakara Live merupakan agensi entertaiment dari Indonesia yang
          bergerak dalam bidang Virtual Youtuber, kami bertujuan
          mengembangkan bakat dan minat talent untuk kualitas
          yang lebih baik, dan dapat menghibur
          untuk semua kalangan</p>
        <div>
          <button className=' h-12 w-44 py-1.5 px-4 mt-7 bg-white/50 hover:bg-white/30 rounded-xl border-white border-2 font-semibold text-md shadow-md shadow-blue-500/50'>
            <span className=' text-lg'>Selengkapnya</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default About