import { createContext, useState, useEffect } from "react"
export const DataContext = createContext()

const DataProvider = ({ children }) => {
    
    const [test, setTest] = useState("second")





    return (
        <DataContext.Provider
          value={{test}}
        >
          {children}
        </DataContext.Provider>
      )
    }
    
    export default DataProvider
    