import Risu from '../assets/Risu.png';
import Vio from '../assets/Vio Circle.png';
import Luxor from '../assets/Luxor Circle.png'

const TalentController = () => {
  return (
    <aside className="flex mt-5 absolute bottom-10 right-28">
      <button className='block mr-4'>
        <img src={Vio} alt="Vio" className="border-2 rounded-full object-cover border-blue-200 block w-[102px]" />
      </button>
      <button className='block mr-4'>
        <img src={Luxor} alt="Luxor" className="block w-[102px] object-cover" />
      </button>
      <button className="block mr-4">
        <img src={Risu} alt="Riso" className="block w-[102px] h-[102px] object-cover" />
        </button>
    </aside>
  )
}

export default TalentController;