import Navbar from '../Components/Navbar'
import Event from '../Components/Event'
import About from '../Components/About'
import Contact from '../Components/Contact'
import Talent from '../Components/Talent'
import Background from '../assets/bg-home.png'
import Footer from '../Components/Footer'

function Home(){
    return(
        <div className="intro h-max= bg-[url('./assets/bg-home.png')] bg-no-repeat bg-cover bg-center">
            <Navbar />
            <Event />
            <div className="container mx-auto px-4 text-white">
                <About />
            </div>
            <div className="md:container mx-auto md:px-4  text-white">
                <Talent />
            </div>
            <Contact />
            <Footer />
        </div>
    )
}

export default Home