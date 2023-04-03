import Event from '../Components/Event'
import About from '../Components/About'
import Contact from '../Components/Contact'
import Talent from '../Components/Talent'
import Footer from '../Components/Footer'
import Discord from '../Components/Discord'
import AutoScroll from '../Components/AutoScroll'
import { useEffect } from 'react'


function Home() {
    
    useEffect(() => {
        window.scrollTo(0,0);
    })

    return (
        <div className="font-sans intro bg-[url('./assets/bg-home.webp')] bg-no-repeat bg-cover bg-center overflow-hidden ">
            <Event />
            <div className="md:container mx-auto md:px-4  text-white">
                <About/>
                <Talent />
            </div>
            <Contact />
            <Footer />
            <Discord />
            <AutoScroll />
        </div>
    )
}

export default Home