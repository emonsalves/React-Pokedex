import React from "react"

function MediaPlayer() {
  let audio = new Audio("/src/assets/pokemon.mp3")

  const start = () => {
    audio.play()
  }

  return (
    <button className="pl-10" onClick={start}>
      Play Me
    </button>
  )
}

export default MediaPlayer
