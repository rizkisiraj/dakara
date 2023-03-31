import talents from '../Talents.json';

const TalentController = ({ setIsShowing, setTalent, talent }) => {
  return (
    <aside className="flex flex-col md:flex-row mt-5 absolute top-10 md:top-auto right-5 md:bottom-10 md:right-28">
      {
        talents.map((tal, index) => {
          return (
            <button key={tal.Nama} onClick={() => {
              setIsShowing(false);
              setTalent(tal);
              }} className='block mb-2 md:mr-4'>
              <img src={require(`../assets/${tal.Profile}`)} alt="Vio" className={`rounded-full object-cover ${talent.Nama === tal.Nama ? 'border-2 border-blue-200 w-[76px] md:w-[110px]' : null} block w-[68px] md:w-[102px]`} />
            </button>
          )
        })
      }
    </aside>
  )
}

export default TalentController;