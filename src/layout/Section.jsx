import Card from "../components/Cards/Card"
import React, { useContext } from "react"
import { DataContext } from "../context/DataContext"
import CardDetail from "../components/Cards/CardDetail"
function Section() {
  const { pokeData , results} = useContext(DataContext)
  return (
    <div>
      <Card pokeInfo={pokeData} results={results} />
      {/* <CardDetail pokeInfo={pokeData} results={results} /> */}
    </div>
  )  
}

export default Section