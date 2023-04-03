import Merch1 from '../assets/merch.webp'

function Merch() {
    return (
        <div className="intro font-sans min-h-screen bg-[url('./assets/bg-home.webp')] bg-no-repeat bg-cover bg-center overflow-hidden ">

            <div className="grid grid-cols-3 max-lg:grid-cols-2 gap-10 w-10/12 mx-auto my-28">
                
                <div class="col-span-1 w-full aspect-[3/2] rounded-md relative">
                    <div className='flex w-full aspect-square border-[1px] border-white justify-center rounded-xl py-2'>
                        <img src={Merch1} alt="merch" className='h-full' />
                    </div>
                    <div className='flex flex-col text-white'>
                        <div className='flex justify-between items-center mb-2 mt-3'>
                            <span className=' text-lg max-md:text-base max-sm:text-xs font-semibold bg-[#9625A8] py-0.5  px-3 max-sm:px-1 rounded-full '>Voicepack</span>
                        </div>
                        <p className=' text-xl max-md:text-lg max-sm:text-sm font-semibold'>GongXi Luxor Ganci</p>
                    </div>
                </div>

                <div class="col-span-1 w-full aspect-[3/2] rounded-md relative">
                    <div className='flex w-full aspect-square border-[1px] border-white justify-center rounded-xl py-2'>
                        <img src={Merch1} alt="merch" className='h-full' />
                    </div>
                    <div className='flex flex-col text-white'>
                        <div className='flex justify-between items-center mb-2 mt-3'>
                            <span className=' text-lg max-md:text-base max-sm:text-xs font-semibold bg-[#9625A8] py-0.5  px-3 max-sm:px-1 rounded-full '>Voicepack</span>
                        </div>
                        <p className=' text-xl max-md:text-lg max-sm:text-sm font-semibold'>GongXi Luxor Ganci</p>
                    </div>
                </div>

                <div class="col-span-1 w-full aspect-[3/2] rounded-md relative">
                    <div className='flex w-full aspect-square border-[1px] border-white justify-center rounded-xl py-2'>
                        <img src={Merch1} alt="merch" className='h-full' />
                    </div>
                    <div className='flex flex-col text-white'>
                        <div className='flex justify-between items-center mb-2 mt-3'>
                            <span className=' text-lg max-md:text-base max-sm:text-xs font-semibold bg-[#9625A8] py-0.5  px-3 max-sm:px-1 rounded-full '>Voicepack</span>
                        </div>
                        <p className=' text-xl max-md:text-lg max-sm:text-sm font-semibold'>GongXi Luxor Ganci</p>
                    </div>
                </div>

                <div class="col-span-1 w-full aspect-[3/2] rounded-md relative">
                    <div className='flex w-full aspect-square border-[1px] border-white justify-center rounded-xl py-2'>
                        <img src={Merch1} alt="merch" className='h-full' />
                    </div>
                    <div className='flex flex-col text-white'>
                        <div className='flex justify-between items-center mb-2 mt-3'>
                            <span className=' text-lg max-md:text-base max-sm:text-xs font-semibold bg-[#9625A8] py-0.5  px-3 max-sm:px-1 rounded-full '>Voicepack</span>
                        </div>
                        <p className=' text-xl max-md:text-lg max-sm:text-sm font-semibold'>GongXi Luxor Ganci</p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Merch;