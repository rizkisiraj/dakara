import Navbar1 from "../Components/Navbar";
import RisuFullBody from "../assets/risu-full-body.webp"
import RisuLogo from "../assets/Risu_Logo.webp"

import {FaRegUserCircle} from 'react-icons/fa'
import {MdDateRange} from 'react-icons/md'
import {GiBodyHeight} from 'react-icons/gi'



export default function FullTalent({ talent }) {

  return (
    <>
      <Navbar1 />
      <main className="w-full h-auto aspect-[16/11] bg-[url('./assets/bg-full-talent.webp')] bg-cover bg-top bg-fixed">
        <div className=" flex flex-col w-full">
          <div className=" w-[30%] max-lg:w-1/3  max-md:w-2/3 mx-auto mt-40">
            <img className="w-full" src={RisuFullBody} alt="karakter" />
          </div>

          <div className=" w-[30%] max-lg:w-1/3 max-md:w-2/3 mx-auto  bg-white rounded-xl px-7">
            <img className="w-full aspect-[7/3]" src={RisuLogo} alt="logo" />
          </div>
        </div>

        <div className=" flex flex-col w-full  px-40 max-lg:px-20 max-md:px-10">
            <section className="w-full flex justify-around max-md:justify-between px-20 max-md:px-0 my-52 max-md:my-20">
              <div className="w-[23%] max-lg:w-[30%] aspect-[5/6] bg-slate-400 rounded-md">

              </div>
              <div className="w-[23%] max-lg:w-[30%] aspect-[5/6] bg-slate-400 rounded-md">

              </div>
              <div className="w-[23%] max-lg:w-[30%] aspect-[5/6] bg-slate-400 rounded-md">

              </div>
            </section>

            <section className=" w-full h-auto mx-auto bg-blue-50 rounded-t-[41px] py-[55px]">
              <h1 className="text-6xl text-center font-bold mb-[40px] max-xl:text-4xl max-sm:text-2xl">ARIYA RISU</h1>
              <div className="py-4 w-[80%] space-y-14 mx-auto after:bottom-0 after:right-0 after:border-r-4 after:absolute after:border-b-4 after:w-[143px] after:h-[143px] after:border-[#554184] before:top-0 before:left-0 before:border-l-4 relative before:absolute before:w-[143px] before:h-[143px] before:border-t-4 before:border-[#554184] text-[20px] max-xl:text-base max-sm:text-sm font-medium">
                <p className=" text-left max-lg:text-center pl-14 lg:pr-40 max-lg:px-5">
                  Seorang mahasiswa Jenius, Ilmuan dan Ahli teknologi yang sangat terkenal di dunia.
                  Penemuan terakhirnya adalah sebuah alat yang membuat perang dunia ketiga
                  terjadi. Dia jadi incaran petinggi di seluruh dunia dan memutuskan
                  bersembunyi hingga semuanya membaik. Lalu hari demi hari berlalu, karena merasa putus asa akhirnya dia memutuskan
                  untuk menciptakan sebuah alat bernama ???Aria Virtual Projrct ON???.
                  Dan eksperimen ke dunia virtual pun dimulai.
                </p>
                <p className=" text-right max-lg:text-center pr-14 lg:pl-52 max-lg:px-5">
                  Lalu hari demi hari berlalu, karena merasa putus asa akhirnya dia memutuskan
                  untuk menciptakan sebuah alat bernama ???Aria Virtual Projrct ON???.
                  Dan eksperimen ke dunia virtual pun dimuali.
                </p>
              </div>
              <div className="flex justify-end max-lg:justify-center max-lg:mx-auto w-[80%] text-[20px] max-xl:text-base max-sm:text-sm font-medium mt-5">
                <table className="border-separate border-spacing-3">
                  <tbody>
                  <tr>
                    <td><FaRegUserCircle size={35} /></td>
                    <td className="font-medium mx-5">Race</td>
                    <td className="font-medium">:</td>
                    <td className="font-medium">Human</td>
                  </tr>
                  <tr>
                    <td><MdDateRange size={35}/></td>
                    <td className="font-medium">Birthday</td>
                    <td className="font-medium">:</td>
                    <td className="font-medium">4th July</td>
                  </tr>
                  <tr>
                    <td><GiBodyHeight size={35}/></td>
                    <td className="font-medium">Height</td>
                    <td className="font-medium">:</td>
                    <td className="font-medium">171</td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </div>

        
      </main>
    </>
  )
}