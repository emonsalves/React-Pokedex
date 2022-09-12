import { createContext, useState, useEffect } from "react"
export const DataContext = createContext()

const DataProvider = ({ children }) => {
  const [page, setPage] = useState("https://pokeapi.co/api/v2/pokemon/")
  const [pokemon, setPokemon] = useState("")
  const [results, setResults] = useState("")
  const [pokeData, setPokeData] = useState("")
  const [pokeDataDetail, setPokeDataDetail] = useState("")
  // const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    ;(async function () {
      let data = await fetch(page)
        .then((res) => res.json())
        .catch((err) => console.log(err))
      setResults(data)

      let dataResultsUrl = await Promise.all(
        await data.results.map((item) => {
          return fetch(item.url)
            .then((res) => res.json())
            .catch((err) => console.log(err))
        })
      )
      setPokeData(dataResultsUrl)
    })()
  }, [page])

  // --------------------------------------------------------------------------------------------------------------
  // --------------------------------------------------------------------------------------------------------------
  // --------------------------------------------------------------------------------------------------------------

  let apiUrlDetailInfo = `https://pokeapi.co/api/v2/pokemon/${pokemon}`

  useEffect(() => {
    ;(async function () {
      let dataDetail = await fetch(apiUrlDetailInfo)
        .then((res) => res.json())
        .catch((err) => console.log(err))
      setPokeDataDetail(dataDetail)
    })()
  }, [apiUrlDetailInfo])

  // --------------------------------------------------------------------------------------------------------------
  // --------------------------------------------------------------------------------------------------------------
  // --------------------------------------------------------------------------------------------------------------

  return (
    <DataContext.Provider
      value={{
        pokeData,
        pokemon,
        setPokemon,
        setPokeData,
        results,
        pokeDataDetail,
        setPage,
        // showModal,
        // setShowModal,
      }}
    >
      {children}
    </DataContext.Provider>
  )
}

export default DataProvider
