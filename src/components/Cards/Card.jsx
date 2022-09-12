import Pagination from "../Pagination"
import DetailCard from "./DetailCard"
import style from "./Card.css"
function Card( {pokeInfo, results } ) {

  return (
    <>

    {/* <button onClick={test}>click</button> */}
      <div className="flex flex-wrap justify-center items-center gap-10 py-4 px-2">
        {pokeInfo
          ? pokeInfo.map((pokemon) => (
              <div
                key={pokemon.id}
                className="max-w-[150px]  shadow-lg rounded-[20px]"
              >
                <p className="text-white text-[16px] bg-red-600 inline-block h-8 w-8 text-center rounded-full border-4 border-blue-800 justify-center items-center">
                  {pokemon.id}
                </p>
                <img
                  className="image w-full hover:-translate-y-1 hover:scale-125 duration-300]"
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
                  alt={pokemon.name}
                />
                <div className="">
                  <div className="font-bold text-xl text-center hover:scale-125 duration-300">
                    {pokemon.name.toUpperCase()}
                  </div>
                </div>
                <div className="pt-4">
                  <DetailCard pokemonDetail={pokemon} />
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
