import React from "react"
import { Link } from "react-router-dom"

export default function NavBar() {
  return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <span className="navbar-brand mb-0 h1">Quadrats</span>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item ">
                            <Link className="nav-link active" to="/">
                                Home 
                            </Link>
                        </li >
                        <li className="nav-item">
                            <Link className="nav-link active" to="/members">
                                Members
                            </Link>
                        </li>
                    </ul>
                </div>    
                <div className="nav justify-content-end">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/register">
                                Register
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            
        </nav>
  )
}
