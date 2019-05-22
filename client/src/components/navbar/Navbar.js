import React from "react";

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
                            <a href="/" className="brand-logo">Logo</a>
                            <a href="/" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                            <ul className="right hide-on-med-and-down">
                                <li className="createSquad"><a href="/createsquad">Create a Squad</a></li>
                                <li className="lfs"><a href="/lfs">Squads</a></li>
                                <li className="lfp"><a href="/lfp">Players</a></li>
                                <li className="Login"> <a className="modal-trigger" href="#modal1">Login</a></li>
                                <li className="signUp"><a className="modal-trigger" href="#modal2">Sign Up</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <ul className="sidenav" id="slide-out" style={{ marginTop: "7vh" }}>
                    <li className="lfs sidenav-close "><a href="/createsquad">Create a Squad</a></li>
                    <li className="lfs sidenav-close "><a href="/lfs">Squads</a></li>
                    <li className="lfp  sidenav-close"><a href="/lfp">Players</a></li>
                    <li className="login  sidenav-close"><a className="modal-trigger" href="#modal1">Login</a></li>
                    <li className="signUp sidenav-close"><a className="modal-trigger" href="#modal2">Sign Up</a></li>

                </ul>

            </div>


        )
    }
}


export default Navbar;