import React from "react"
import { Link } from "react-router-dom"

export default function NavBar() {
  return (
    <div>
      <ul>
        <li>
            <Link to="/">
                home
            </Link>
        </li>
        <li>
            <Link to="/register">
                register
            </Link>
        </li>
      </ul>
    </div>
  )
}
