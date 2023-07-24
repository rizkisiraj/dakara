import talents from "../Talents.json";
import { FaRegUserCircle } from 'react-icons/fa'
import { MdDateRange } from 'react-icons/md'
import { GiBodyHeight } from 'react-icons/gi'
import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import LoadingPage from "./LoadingPage";
import { Link } from "react-router-dom";

import { IoLogoTwitter } from "react-icons/io"
import { AiFillInstagram } from "react-icons/ai"
import { IoLogoYoutube } from "react-icons/io"
import { MdKeyboardBackspace } from "react-icons/md"

export default function FullTalent() {

  const { id } = useParams();
  const navigate = useNavigate();
  const [talent, setTalent] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    talents.forEach(tal => {
      if (tal.Nama === id) {
        setTalent(tal);
        setIsLoading(false);
      }
    })
  }, [id])

  return (
    <>
      {
        isLoading ? <LoadingPage /> :

          <main className="relative font-sans w-full h-auto aspect-[16/11] bg-[url('./assets/bg-full-talent.webp')] bg-cover max-md:bg-auto bg-top max-md:bg-center bg-fixed">
            <div className={` flex h-6 bg-transparent top-24 left-14 max-sm:left-4 absolute`} >
              <button onClick={()=> {
                navigate('/talent',{state:{talent: talent, isActive: true}});
              }}>
                <span className='m-auto flex items-center text-[#fff] hover:text-[#EFC3F6] text-lg font-semibold max-sm:text-base'><MdKeyboardBackspace className="text-[30px] max-sm:text[25px] mr-4 max-sm:mr-2" /> Back to Talent </span>
                </button>
            </div>

            <div className=" flex flex-col w-full">
              <div className=" w-[18rem] max-md:w-[15rem] max-[400px]:w-[12rem] mx-auto mt-40">
                <img className="w-full" src={require(`../assets/Talent/${talent["Profile Full Body"]}`)} alt="karakter" />
              </div>

              <div className=" w-[55vh] aspect-[3/1] max-lg:w-[50vh] max-md:w-[40vh] max-[400px]:w-[35vh] mx-auto  bg-white rounded-xl mt-10 relative shadow-talentLogo">
                <div className="absolute inset-0 flex items-center justify-center px-4">
                  <img className=" w-full " src={require(`../assets/Talent/${talent.Logo}`)} alt="logo" />
                </div>
              </div>
            </div>

            <div className=" flex flex-col flex-wrap w-full  px-40 max-lg:px-16 max-md:px-10">
              <section className="w-full flex justify-around max-md:justify-between px-10 max-md:px-0 my-52 max-md:my-20 space-x-2">
                <div className="w-[25vh] max-lg:w-[23vh] max-sm:w-[18vh] aspect-[5/6] rounded-md">
                  <img src={require(`../assets/Talent/${talent["Mini Profil Talent1"]}`)} alt="" className="w-full object-cover" />
                </div>
                <div className="w-[25vh] max-lg:w-[23vh] max-sm:w-[18vh] aspect-[5/6] rounded-md">
                  <img src={require(`../assets/Talent/${talent["Mini Profil Talent2"]}`)} alt="" className="w-full object-cover" />
                </div>
                <div className="w-[25vh] max-lg:w-[23vh] max-sm:w-[18vh] aspect-[5/6] rounded-md">
                  <img src={require(`../assets/Talent/${talent["Mini Profil Talent3"]}`)} alt="" className="w-full object-cover" />
                </div>
              </section>

              <section className=" w-full h-auto mx-auto bg-blue-50 rounded-t-[41px] py-[55px]">
                <h1 className="text-6xl text-center font-bold mb-[40px] max-xl:text-4xl max-sm:text-2xl">{talent.Nama}</h1>
                <div className="py-4 w-[80%] space-y-14 mx-auto after:bottom-0 after:right-0 after:border-r-4 after:absolute after:border-b-4 after:w-[143px] after:h-[143px] after:border-[#554184] before:top-0 before:left-0 before:border-l-4 relative before:absolute before:w-[143px] before:h-[143px] before:border-t-4 before:border-[#554184] text-[20px] max-xl:text-base max-sm:text-sm font-medium">
                  <p className=" text-left pl-14 lg:pr-40 max-lg:px-5">
                    {
                      talent["Profil Lengkap Paragraf1"]
                    }
                  </p>
                  <p className=" text-right pr-14 lg:pl-40 max-lg:px-5">
                    {
                      talent["Profil Lengkap Paragraf2"]
                    }
                  </p>
                </div>
                <div className="flex justify-center mx-auto w-[80%] text-[20px] max-xl:text-base max-sm:text-xs font-medium mt-5">
                  <table className="border-separate border-spacing-3">
                    <tbody>
                      <tr>
                        <td><FaRegUserCircle size={35} /></td>
                        <td className="font-medium mx-5">Race</td>
                        <td className="font-medium">:</td>
                        <td className="font-medium">{talent.Ras}</td>
                      </tr>
                      <tr>
                        <td><MdDateRange size={35} /></td>
                        <td className="font-medium">Birthday</td>
                        <td className="font-medium">:</td>
                        <td className="font-medium">{talent["Ulang Tahun"]}</td>
                      </tr>
                      <tr>
                        <td><GiBodyHeight size={35} /></td>
                        <td className="font-medium">Height</td>
                        <td className="font-medium">:</td>
                        <td className="font-medium">{talent["Tinggi"]}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="flex items-center justify-center space-x-14 max-md:space-x-2 max-sm:space-x-1 mt-10">
                  <div className="h-full w-28 max-md:w-24 text-center rounded-md relative"><Link to={talent.Twitter} target="_blank" className="text-[#000] no-underline hover:text-[#3B3BA5]"><IoLogoTwitter className='w-[50px] h-auto max-md:w-12 max-sm:w-10 mx-auto' /><span className='text-xl max-md:text-base max-sm:text-sm'>Twitter</span></Link></div>
                  <div className="h-full w-28 max-md:w-24 text-center rounded-md relative"><Link to={talent.Instagram} target="_blank" className="text-[#000] no-underline hover:text-[#3B3BA5]"><AiFillInstagram className='w-[50px] h-auto max-md:w-12 max-sm:w-10 mx-auto' /><span className='text-xl max-md:text-base max-sm:text-sm'>Instagram</span></Link></div>
                  <div className="h-full w-28 max-md:w-24 text-center rounded-md relative"><Link to={talent.Youtube} target="_blank" className="text-[#000] no-underline hover:text-[#3B3BA5]"><IoLogoYoutube className='w-[50px] h-auto max-md:w-12 max-sm:w-10 mx-auto' /><span className='text-xl max-md:text-base max-sm:text-sm'>Youtube</span></Link></div>
                </div>
              </section>
            </div>


          </main>
      }
    </>
  )
}