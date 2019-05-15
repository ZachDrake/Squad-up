import React from "react";
import "./navbar.css"

const Navbar = () => {
    return (

        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href="/">Logo</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link text-light" href="/">LFSquad <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="/">LFGroup</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link text-light" href="/">Login/Sign up</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>


    )
}


export default Navbar;