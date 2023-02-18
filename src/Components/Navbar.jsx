import { useState } from "react"
import logo from '../assets/logo.png';
import hamburger from '../assets/hamburger.png';
import close from '../assets/icon-close.png';

function Navbar () {
    const [open, setopen] = useState(false)
    const menus = [
        { name: "INTRO" },
        { name: "HOME" },
        { name: "TALENT" },
        { name: "ABOUT" },
        { name: "NEWS" },
        { name: "MERCH" },
    ]
    return (
        <nav className="flex items-center z-50 sticky top-0 py-2 max-md:pt-4 bg-white">
            <img src={open ? close : hamburger} alt="navigation" className="md:hidden  fixed right-5 cursor-pointer z-20 w-9 h-9" onClick={() => setopen(!open)} />
            <img src={logo} alt="logos" className="w-9 h-9 ml-12 max-md:ml-5" />
            <p className="ml-2 text-lg z-0"><strong> Dakara Live </strong></p>
            <ul className={`bg-white/90  md:static pr-24 fixed duration-300 ease-linear top-0 md:h-auto h-screen z-10 ${!open ? 'right-[-100%] ' : 'right-0'} ml-auto max-md:pt-16 max-md:pr-25`}>
                {
                    menus.map((menu) => (
                        <li className="md:inline-block  md:ml-6 ml-5 md:my-0 border-b-2 border-transparent hover:border-black duration-300">
                            <a className="text-black cursor-pointer font-Barlow font-semibold text-sm inline-block md:py-2 py-2 lg:text-md max-md:text-sm">
                                <span className="font-bold"></span>  {menu.name}</a>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}
export default Navbar