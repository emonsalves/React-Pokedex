import Card from "../components/Card"
import React, {useContext} from 'react'
import { DataContext } from "../context/DataContext"

function Section() {
    const {pokeData} = useContext(DataContext)
  return (
    <div>
        <Card pokeInfo={pokeData}/>
    </div>
  )
}

export default Section