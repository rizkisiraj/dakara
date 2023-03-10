import Navbar1 from "../Components/Navbar";
import RisuFullBody from "../assets/risu-full-body.webp"

export default function FullTalent({ talent }) {
  
    return (
        <>
          <Navbar1 />
          <main className="pt-20 w-full bg-[#B4CFDE] px-[114px]">
              <div className="max-w-[462px] w-full mx-auto mb-[100px]">
                <img className="block w-full" src={RisuFullBody} alt="karakter" />
              </div>
            <section className="w-full flex justify-center gap-[115px] mb-[105px]">
                <div className="w-[156px] h-[204px] bg-slate-400 rounded-lg">

                </div>
                <div className="w-[156px] h-[204px] bg-slate-400 rounded-lg">

                </div>
                <div className="w-[156px] h-[204px] bg-slate-400 rounded-lg">

                </div>
            </section>
            <section className="bg-blue-50 rounded-t-[41px] py-[50px]">
              <h1 className="text-6xl text-center font-bold mb-[37px]">Ariya Risu</h1>
              <p className="p-4 w-[80%] mx-auto after:bottom-0 after:right-0 after:border-r-4 after:absolute after:border-b-4 after:w-[143px] after:h-[143px] after:border-[#1DB3E2] before:top-0 before:left-0 before:border-l-4 relative before:absolute before:w-[143px] before:h-[143px] before:border-t-4 before:border-[#1DB3E2] text-[20px] font-medium">
              Seorang mahasiswa Jenius, Ilmuan dan Ahli teknologi yang sangat terkenal di dunia.
              Penemuan terakhirnya adalah sebuah alat yang membuat perang dunia ketiga 
              terjadi. Dia jadi incaran petinggi di seluruh dunia dan memutuskan 
              bersembunyi hingga semuanya membaik. Lalu hari demi hari berlalu, karena merasa putus asa akhirnya dia memutuskan
              untuk menciptakan sebuah alat bernama “Aria Virtual Projrct ON”. 
              Dan eksperimen ke dunia virtual pun dimulai.
              </p>
              <div className="flex">
                img
              </div>
            </section>
          </main>
        </>
    )
}