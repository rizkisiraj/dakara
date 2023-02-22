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

        <div className="container text-center lg:max-w-6xl max-w-5xl mx-auto md:flex items-center h-screen max-md:h-auto max-md:my-28">
            <div className='md:w-1/3 h-2/5 mx-auto flex items-center'
             data-aos="fade-right">
                <img src={Logo} alt="" className='mx-auto w-56 h-56 pr-0 max-md:w-44 max-md:h-44 items-center animate-up-down'/>
                <style>{upDownAnimation}</style>
            </div>
            <div className='mx-auto'
             data-aos="fade-left">
                <h2 className='text-3xl max-md:text-2xl mt-6 font-semibold max-w-xl mx-auto max-md:mt-1'>Tentang Kami</h2>
                    <p className="mt-4 py-2 px-3 text-md max-w-lg max-lg:max-w-md mx-auto border-t-2 border-r-2/2">Dakara Live merupakan agensi entertaiment dari Indonesia yang
                        bergerak dalam bidang Virtual Youtuber, kami bertujuan
                        mengembangkan bakat dan minat talent untuk kualitas
                        yang lebih baik, dan dapat menghibur
                        untuk semua kalangan</p>
                <div>
                    <button className='w-auto h-auto py-1.5 px-4 mt-8 bg-white/20 hover:bg-slate-500 rounded-xl border-white border-2 font-semibold text-md shadow-md shadow-blue-500/50'>
                        <span style={{textShadow: '0px 2px 2px rgb(47 79 79) '}}>Selengkapnya</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default About