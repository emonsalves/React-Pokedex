import { createContext, useState, useEffect } from "react"
export const DataContext = createContext()

const DataProvider = ({ children }) => {
  const [test, setTest] = useState("second")
  const [pokemon, setPokemon] = useState("")
  const [results, setResults] = useState("")
  const [pokeData, setPokeData] = useState("")

  let apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemon}`

  useEffect(() => {
    ;(async function () {
      let data = await fetch(apiUrl)
        .then((response) => response.json())
        .catch((error) => console.log(error))
      setResults(data.results)
      //   console.log(data.results[0].url)
      //   console.log(data.results.map((x) => console.log(x)))

      let dataResultsUrl = await Promise.all(
        // data.results.map((x) => console.log(x.url)))
        data.results.map((item) => {
          return fetch(item.url)
            .then((response) => response.json())
            .catch((error) => console.log(error))
        })
      )
      setPokeData(dataResultsUrl)
      console.log(dataResultsUrl)
    })()
  }, [apiUrl])

  return (
    <DataContext.Provider value={{ pokeData }}>{children}</DataContext.Provider>
  )
}

export default DataProvider
