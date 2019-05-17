import React from "react";
import "./navbar.css"
// import M from "materialize-css/dist/js/materialize.min.js";
// import {BrowseRouter as Router, Route, Switch} from "react-router-dom"; 



class Navbar extends React.Component {
    // componentDidMount() {
    //     const elem = document.querySelector(".sidenav");
    //     const instance = M.Sidenav.init(elem, {
    //         edge: "left",
    //         inDuration: 250
    //     })

    // }

    render() {
        return (

            <div style = {{position:"absolute", width:"100%"}}>
                <nav>
                    <div className="nav-wrapper">
                        <div className="container">
                            <a href="/" className="brand-logo">Logo</a>
                            <a href="/" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                            <ul className="right hide-on-med-and-down">
                                <li className="lfs"><a href="/lfs">LFSquad</a></li>
                                <li className="login"><a href="/">Login/Signup</a></li>

                            </ul>
                        </div>
                    </div>
                </nav>

                <ul className="sidenav" id="mobile-demo">
                    <li className="lfs"><a href="/lfs">LFSquad</a></li>
                    <li className="login"><a href="/">Login/Signup</a></li>

                </ul>

            </div>


        )
    }
}


export default Navbar;