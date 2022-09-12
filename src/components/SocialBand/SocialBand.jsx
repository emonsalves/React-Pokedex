import React from "react"
import style from "./SocialBand.css"

function EndPage() {
  return (
    <div className="social-container">
      <ul className="social-icons">
        <li>
          <a href="#">
            <i className="fab fa-whatsapp"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fab fa-instagram"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fab fa-snapchat"></i>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default EndPage
