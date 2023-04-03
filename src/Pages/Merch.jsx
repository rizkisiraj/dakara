const Merch = () => {
  return (
    <>
      <div className="font-sans bg-[url('./assets/bg-home.png')] bg-center bg-cover w-full min-h-screen px-36 pt-24">
        <div className="w-full flex gap-4 mb-8">
          <button className="block min-w-[44px] min-h-[44px] px-4 bg-white rounded-lg">Kaos</button>
          <button className="block min-w-[44px] min-h-[44px] px-4 bg-white rounded-lg">Jaket</button>
          <button className="block min-w-[44px] min-h-[44px] px-4 bg-white rounded-lg">Totebag</button>
          <button className="block min-w-[44px] min-h-[44px] px-4 bg-white rounded-lg">Aksesoris</button>
          <button className="block min-w-[44px] min-h-[44px] px-4 bg-white rounded-lg">Celana</button>
        </div>
        <div className="w-full grid grid-cols-4 gap-16">
            <div className="rounded-lg overflow-hidden bg-white min-h-[390px]">
              <img src="https://picsum.photos/200" alt="card-img" className="w-full mb-2 h-52 object-cover block" />
              <div>
                <p className="text-lg font-semibold px-4">Naela Makan Nasi</p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden bg-white min-h-[390px]">
              <img src="https://picsum.photos/200" alt="card-img" className="w-full mb-2 h-52 object-cover block" />
              <div>
                <p className="text-lg font-semibold px-4">Naela Makan Nasi</p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden bg-white min-h-[390px]">
              <img src="https://picsum.photos/200" alt="card-img" className="w-full mb-2 h-52 object-cover block" />
              <div>
                <p className="text-lg font-semibold px-4">Naela Makan Nasi</p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden bg-white min-h-[390px]">
              <img src="https://picsum.photos/200" alt="card-img" className="w-full mb-2 h-52 object-cover block" />
              <div>
                <p className="text-lg font-semibold px-4">Naela Makan Nasi</p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden bg-white min-h-[390px]">
              <img src="https://picsum.photos/200" alt="card-img" className="w-full mb-2 h-52 object-cover block" />
              <div>
                <p className="text-lg font-semibold px-4">Naela Makan Nasi</p>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Merch;