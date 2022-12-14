import React from "react"

function CardDetail() {
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-6xl">
          {/*content*/}
          <h1>test</h1>
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex p-4 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold flex w-full justify-center">
                N°data.Id : data.name.toUpperCase()
              </h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                // onClick={() => setShowModal(false)}
              >
                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none"></span>
              </button>
            </div>
            {/*body*/}

            <div className="w-full flex border border-5 justify-center">
              <img
                className="w-[180px] image hover:-translate-y-5 hover:scale-125 duration-300"
                // src={pokemonDetail.sprites.front_default}
              />
              <img
                className="w-[180px] image hover:-translate-y-5 hover:scale-125 duration-300"
                // src={pokemonDetail.sprites.back_default}
              />
              <img
                className="w-[180px] image hover:-translate-y-5 hover:scale-125 duration-300"
                // src={pokemonDetail.sprites.front_shiny}
              />
              <img
                className="w-[180px] image hover:-translate-y-5 hover:scale-125 duration-300"
                // src={pokemonDetail.sprites.back_shiny}
              />
            </div>
            <div className="flex w-full">
              <div className="w-full flex border border-5 pl-5">
                <ul>
                  <h1 className="font-bold">Stats</h1>
                  {/* {pokemonDetail.stats.map((stat) => (
                    <li key={`${pokemonDetail.id} - ${stat.stat.name}`}>
                      <i
                        className="fa fa-check-circle pr-1"
                        aria-hidden="true"
                      ></i>
                      {stat.stat.name[0].toUpperCase() +
                        stat.stat.name.substring(1)}{" "}
                      : {stat.base_stat}
                    </li>
                  ))} */}
                                  </ul>
              </div>

              <div className="w-full flex border border-5 pl-5">
                <ul>
                  <h1 className="font-bold">Hability</h1>
                  {/* {pokemonDetail.abilities.map((move) => (
                    <li key={`${pokemonDetail.name}${move.ability.name}`}>
                      {move.ability.name[0].toUpperCase() +
                        move.ability.name.substring(1)}
                    </li>
                  ))} */}
                </ul>
              </div>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-between px-6 border-t border-solid border-slate-200 rounded-b">
              <div className="flex border border-5 pl-5">
                <ul className="w-full flex align-middle">
                  <h1 className="font-bold mr-5">Type</h1>
                  {/* {pokemonDetail.types.map((type) => (
                    <li
                      key={`${pokemonDetail.id}${type.type.name}`}
                      className="mr-3"
                    >
                      {type.type.name[0].toUpperCase() +
                        type.type.name.substring(1)}
                    </li>
                  ))} */}
                </ul>
              </div>
              <button
                className="text-red-500 background-transparent font-bold uppercase  py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                // onClick={() => setShowModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  )
}

export default CardDetail
