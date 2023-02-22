import { FaDiscord } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";



function Discord(){
    return(
        <div className="fixed flex w-16 h-16 bg-white bottom-5 right-5 rounded-full animate-bounce">
            <div className="absolute flex w-6 h-6 bg-slate-700 -top-1.5 -right-1.5 rounded-full border-2 border-white">
                <button><span className='m-auto'><AiOutlineClose size={20} style={{ color: 'white' }} /></span></button>
            </div>
             <button className="m-auto h-full w-full rounded-full"><FaDiscord size={50} className=' m-auto' style={{ color: '#5865F2' }}/></button>
        </div>
    )
}
export default Discord