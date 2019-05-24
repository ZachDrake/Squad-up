import React from "react";
import { Link } from "react-router-dom"
import "./navbar.css"
import M from "materialize-css/dist/js/materialize.min.js";

// import {BrowseRouter as Router, Route, Switch} from "react-router-dom"; 



class Navbar extends React.Component {

    componentDidMount() {

        document.addEventListener('DOMContentLoaded', function () {
            const elems = document.querySelectorAll('.sidenav');
            M.Sidenav.init(elems, {
                edge: 'left',
                draggable: true,
                inDuration: 250,

            });



        })


    }

    render() {
        return (

            <div style={{ position: "absolute", width: "100%" }}>
                <nav>
                    <div className="nav-wrapper">
                        <div className="container">
                            <Link to="/" className="brand-logo">Logo</Link>
                            <a href="/" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                            <ul className="right hide-on-med-and-down">
                                <li className="createSquad"><Link to="/createsquad">Create a Squad</Link></li>
                                <li className="lfs"><Link to="/lfs">Squads</Link></li>
                                <li className="lfp"><Link to="/lfp">Players</Link></li>
                                <li className="Login"> <a className="modal-trigger" href="#modal1">Login</a></li>
                                <li className="signUp"><a className="modal-trigger" href="#modal2">Sign Up</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <ul className="sidenav" id="slide-out" style={{ marginTop: "7vh" }}>
                    <li className="lfs sidenav-close "><Link to="/createsquad">Create a Squad</Link></li>
                    <li className="lfs sidenav-close "><Link to="/lfs">Squads</Link></li>
                    <li className="lfp  sidenav-close"><Link to="/lfp">Players</Link></li>
                    <li className="login  sidenav-close"><a className="modal-trigger" href="#modal1">Login</a></li>
                    <li className="signUp sidenav-close"><a className="modal-trigger" href="#modal2">Sign Up</a></li>

                </ul>

            </div >


        )
    }
}


export default Navbar;