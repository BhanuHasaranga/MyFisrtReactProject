import React from "react"
import { Link } from "react-router-dom"

export default function NavBar() {
  return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <span className="navbar-brand">Quadrats</span>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item ">
                        <Link className="nav-link active" to="/">
                            home 
                        </Link>
                    </li >
                    <li className="nav-item">
                        <Link className="nav-link active" to="/register">
                            register
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
  )
}
