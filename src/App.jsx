import { useState, useContext } from "react"
import Card from "./components/Card"
import DataProvider from "./context/DataContext"

function App() {
 
  return (
    <DataProvider>    
     <Card/>
    </DataProvider>
  )
}

export default App
