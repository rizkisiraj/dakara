import Navbar from '../Components/Navbar'
import Event from '../Components/Event'
import About from '../Components/About'
import Contact from '../Components/Contact'
import Talent from '../Components/Talent'
import Footer from '../Components/Footer'
import Discord from '../Components/Discord'

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'

function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init({ duration: 2000 });
    }, [])
    return (
        <div className="intro  h-max= bg-[url('./assets/bg-home.png')] bg-no-repeat bg-cover bg-center overflow-hidden ">
            <Navbar/>
            <Event />
            <div className="md:container mx-auto md:px-4  text-white backdrop-blur-sm">
                <About/>
                <Talent />
            </div>
            <Contact />
            <Footer />
            <Discord />
        </div>
    )
}

export default Home