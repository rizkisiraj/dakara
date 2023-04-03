
import { useState } from 'react';
import Scroll from '../assets/Scroll.webp'

function AutoScroll(){
    const [visible, setVisible] = useState(false);

    const changeVisible = () => {
        if (window.scrollY >= 350){
            setVisible(true);
        }else{
            setVisible(false);
        } 
    }

    const scrollToTop = () =>{
        window.scrollTo({
          top: 0, 
          behavior: 'smooth'
        });
      };
      
      window.addEventListener('scroll', changeVisible);


    return(
        <div className="absolute">
            <div className={`${visible ? 'flex' : 'hidden'} fixed justify-center items-center w-14 h-14 max-sm:w-10 max-sm:h-10 bottom-5 right-5 rounded-full cursor-pointer`}
                onClick={scrollToTop}>
                    <img src={Scroll} className='object-cover object-center' alt="" />
            </div>
        </div>
    )
}
export default AutoScroll;