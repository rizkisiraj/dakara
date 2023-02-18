
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'

import Talent1 from '../assets/talent1.png'
import Talent2 from '../assets/talent2.png'
import Talent3 from '../assets/bg-journey.png'

import { useEffect, useState } from 'react';

function Talent() {
    const items = [
        { src: Talent1 }, { src: Talent2 }, { src: Talent3 }, { src: Talent2 }, { src: Talent1 }, { src: Talent2 }
    ];
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 0 },
            items: 3,
            slidesToSlide: 3
        }
    };

    const [data,setData] = useState();

    const getData = async () => {
        try {
            const res = await fetch('https://sheet.best/api/sheets/fd1930aa-0ea5-4fb2-93c3-bcc4337fc078');
            const data = await res.json();
            console.log(data);
        } catch(error){
            console.log(error);
        }
    };

    useEffect(() => {
        getData();
    }, []);


    return (
        <div className="flex flex-col h-screen lg:max-w-5xl max-w-5xl max-md:max-w-screen mx-auto">
            <span className="font-semibold text-2xl w-full my-5">Gen 1 Talent</span>
            <Carousel responsive={responsive}>
                {items.map((item, index) => (
                    <div class="flex w-full h-[500px] max-lg:h-[450px] max-sm:h-[400px] max-[500px]:h-[350px] brightness-75 hover:brightness-95 relative group object-contain ">
                        <img
                            key={index}
                            src={item.src}
                            alt={item.alt}
                            className={`w-full h-full object-cover object-top pl-0.5 `}
                        />
                        <div className='hidden absolute group-hover:block bottom-16 left-6'>
                            <span className='text-xl font-bold uppercase block'>Ariya Risu</span>
                            <span>Lihat lebih...</span>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    )
}

export default Talent;