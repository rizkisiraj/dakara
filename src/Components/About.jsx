import Logo from '../assets/logo.png'

function About() {
    return (

        <div className="container text-center lg:max-w-6xl max-w-5xl mx-auto md:flex items-center h-screen">
            <div className='md:w-1/3 h-2/5 mx-auto flex items-center'>
                                
                <img src={Logo} alt="" className='mx-auto w-56 h-56 animate-bounce pr-0 items-center' />
            </div>
            <div className='mx-auto'>
                <h2 className='text-3xl mt-6 font-semibold max-w-xl mx-auto'>Tentang Kami</h2>
                    <p className="mt-4 py-2 px-1  text-md max-w-lg max-lg:max-w-md mx-auto border-t-2 border-r-2">Dakara Live merupakan agensi entertaiment dari Indonesia yang
                        bergerak dalam bidang Virtual Youtuber, kami bertujuan
                        mengembangkan bakat dan minat talent untuk kualitas
                        yang lebih baik, dan dapat menghibur
                        untuk semua kalangan</p>
                <div>
                    <button className='w-auto h-auto py-1.5 px-4 mt-8 bg-white/20 hover:bg-slate-500 rounded-xl border-white border-2 font-semibold text-md shadow-blue-800 shadow-md'>
                        <span style={{textShadow: '0px 2px 2px rgb(47 79 79) '}}>Selengkapnya</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default About