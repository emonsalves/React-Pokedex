import Pagination from "../Pagination"
import DetailCard from "./DetailCard"
import style from "./Card.css"

function Card({ pokeInfo, results }) {
  const clickPoke = (e) => {
    console.log("click show")
    // setShowModal(true)
  }

  return (
    <>
      <div className="flex flex-wrap justify-center items-center gap-10 py-4 px-2 bg-poke">
        {pokeInfo
          ? pokeInfo.map((pokemon) => (
              <div
                key={pokemon.id}
                className="max-w-[150px]  shadow-lg rounded-[20px] bg-slate-300"
              >
                <p className="pokeball -translate-x-4 -translate-y-4">
                  <span className="boton"></span>
                </p>
                <span className="flex justify-center w-12 font-bold bg-white rounded-full -translate-y-9 translate-x-24">
                  {" "}
                  N°{pokemon.id}{" "}
                </span>
                <img
                  className="image w-full hover:-translate-y-5 hover:scale-125 duration-300]"
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
                  alt={pokemon.name}
                  onClick={(e) => {
                    clickPoke()
                  }}
                />
                {/* {(() => {
                  if (showModal === true) {
                    return componente
                  } else {
                    return null
                  }
                })()} */}
                <div className="">
                  <div className="font-bold text-xl text-center hover:scale-125 duration-300">
                    {pokemon.name.toUpperCase()}
                  </div>
                </div>
                <div className="pt-4">
                  <DetailCard
                    pokemonDetail={pokemon}
                    // showModal={showModal}

                    // setShowModal={setShowModal}
                  />
                </div>
              </div>
            ))
          : null}
      </div>
      <Pagination results={results} />
    </>
  )
}

export default Card
