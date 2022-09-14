import Pagination from "../Pagination";
import Modal from "./Modal";
import { useState } from "react";
import style from "./Card.css"

function Card({ pokeInfo, results }) {
  const [modalOn, setModalOn] = useState(false);
  const [pokemon, setPokemon] = useState();

  const clickPoke = (pokemonData) => {
    setPokemon(pokemonData);
    setModalOn(true);
  };
  return (
    <>
      <div className="flex flex-wrap justify-center items-center gap-10 py-4 px-2 bg-poke">
        {pokeInfo
          ? pokeInfo.map((pokemon) => (
              <div
                key={pokemon.id}
                className="max-w-[150px]  shadow-lg rounded-[20px] bg-slate-300"
                onClick={() => handledItem(pokemon)}
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


                  data-modal-toggle={`#id${pokemon.id}`}
                  onClick={() => clickPoke(pokemon)}

                />
                <div className="">
                  <div className="font-bold text-xl text-center hover:scale-125 duration-300">
                    {pokemon.name.toUpperCase()}
                  </div>
                </div>
                <div className="pt-4">
                  <button
                    className="block text-white bg-[#FB1B1B] hover:bg-[#FB1B1B] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-b-xl text-sm px-5 py-2.5 text-center dark:bg-[#FB1B1B] dark:hover:bg-[#FB1B1B] dark:focus:ring-bg-[#FB1B1B]"
                    type="button"
                    data-modal-toggle={`#id${pokemon.id}`}
                    onClick={() => clickPoke(pokemon)}
                  >
                    Pokémon Information
                  </button>
                </div>
              </div>
            ))
          : null}
        {modalOn && pokemon && (
          <Modal
            id={`id${pokemon.id}`}
            pokemonDetail={pokemon}
            setModalOn={setModalOn}
          />
        )}
      </div>

      <Pagination results={results} />
    </>
  );
}

export default Card;
