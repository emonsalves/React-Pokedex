import DataProvider from "./context/DataContext"
import Footer from "./layout/Footer"
import Header from "./layout/Header"
import Section from "./layout/Section"

function App() {
 
  return (
    <DataProvider>    
     <Header/>
     <Section/>
     <Footer/>
    </DataProvider>
  )
}

export default App
