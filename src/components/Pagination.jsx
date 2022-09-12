import { useContext } from "react"
import { DataContext } from "../context/DataContext"

function Pagination({ results }) {
  const { setPage, setPokemon } = useContext(DataContext)

  const clickNext = () => {
    setPage(results.next)
  }
  const clickPrevious = () => {
    setPage(results.previous)
  }
  return (
    <div className="py-2 flex justify-center items-center bg-black">
      <nav className="block">
        <ul className="flex pl-0 rounded list-none flex-wrap">
          {(() => {
            if (results.previous !== null) {
              return (
                <li>
                  <h1>Pre</h1>
                  <a
                    onClick={clickPrevious}
                    className="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-pink-500 bg-white text-pink-500"
                  >
                    <i className="fas fa-chevron-left -ml-px"></i>
                  </a>
                </li>
              )
            } else {
              return null
            }
          })()}

          {(() => {
            if (results.next !== null) {
              return (
                <li>
                  <h1>next</h1>
                  <a
                    onClick={clickNext}
                    className="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-pink-500 bg-white text-pink-500"
                  >
                    <i className="fas fa-chevron-right -mr-px"></i>
                  </a>
                </li>
              )
            } else {
              return null
            }
          })()}
        </ul>
      </nav>
    </div>
  )
}

export default Pagination
