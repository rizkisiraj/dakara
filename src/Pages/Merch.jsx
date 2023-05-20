import Merchs from '../Merchs.json';

function Merch() {
    console.log(Merchs.length);
    return (
        <div className="intro font-sans min-h-screen bg-[url('./assets/bg-home.webp')] bg-no-repeat bg-cover bg-center overflow-hidden ">

            {
                Merchs.length === 0 ? <div className='text-center mt-24 text-2xl text-white font-semibold'><p>Coming Soon</p></div> : 
              <div className="grid grid-cols-3 max-lg:grid-cols-2 gap-10 w-10/12 mx-auto my-28">
                {
                    Merchs.map(merch => <div class="col-span-1 w-full aspect-[3/2] rounded-md relative">
                    <div className='flex w-full aspect-square border-[1px] border-white justify-center rounded-xl py-2'>
                        <img src={require(`../assets/Merch/${merch.Gambar}`)} alt="merch" className='h-full' />
                    </div>
                    <div className='flex flex-col text-white'>
                        <div className='flex justify-between items-center mb-2 mt-3'>
                            <span className=' text-lg max-md:text-base max-sm:text-xs font-semibold bg-[#9625A8] py-0.5  px-3 max-sm:px-1 rounded-full '>{merch.Kategori}</span>
                        </div>
                        <p className=' text-xl max-md:text-lg max-sm:text-sm font-semibold'>{merch.Nama}</p>
                    </div>
                </div>)
                }
              </div>
            }

            </div>
    )
}

export default Merch;