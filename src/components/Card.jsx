import React, {useContext} from 'react'
import { DataContext } from '../context/DataContext'

function Card() {
    const {test} = useContext(DataContext)
  return (
    <div>{test}</div>
  )
}

export default Card