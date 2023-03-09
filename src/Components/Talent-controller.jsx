import Risu from '../assets/Risu.png';
import Vio from '../assets/Vio Circle.png';
import Luxor from '../assets/Luxor Circle.png';
import RisuSetengah from '../assets/risu-setengah-badan.webp';
import LuxorSetengah from '../assets/luxor-setengah-badan.webp';
import ViolettaSetengah from '../assets/violetta-setengah-badan.webp';

const TalentController = ({ setIsShowing, setTalent, talent }) => {
  return (
    <aside className="flex flex-col md:flex-row mt-5 absolute top-10 md:top-auto right-5 md:bottom-10 md:right-28">
      <button onClick={() => {
        setIsShowing(false);
        setTalent({name: 'Violetta Lupin', image:ViolettaSetengah})
        }} className='block mb-2 md:mr-4'>
        <img src={Vio} alt="Vio" className={`rounded-full object-cover ${talent.name === 'Violetta Lupin' ? 'border-2 border-blue-200 w-[76px] md:w-[110px]' : null} block w-[68px] md:w-[102px]`} />
      </button>
      <button onClick={() => {
        setIsShowing(false);
        setTalent({name: 'Maximillian Luxor', image:LuxorSetengah})
        }} className='block mb-2 md:mr-4'>
        <img src={Luxor} alt="Luxor" className={`rounded-full object-cover ${talent.name === 'Maximillian Luxor' ? 'border-2 border-blue-200 w-[76px] md:w-[110px]' : null} block w-[68px] md:w-[102px]`} />
      </button>
      <button onClick={() => {
        setIsShowing(false)
        setTalent({name: 'Ariya Risu', image:RisuSetengah})
        }} className="block mb-2 md:mr-4">
        <img src={Risu} alt="Riso" className={`rounded-full object-cover ${talent.name === 'Ariya Risu' ? 'border-2 border-blue-200 w-[76px] md:w-[110px]' : null} block w-[68px] md:w-[102px]`} />
        </button>
    </aside>
  )
}

export default TalentController;