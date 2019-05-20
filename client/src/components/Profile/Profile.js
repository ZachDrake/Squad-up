import React from "react";
import Nav from "../navbar/Navbar"
import "./profile.css"
import Jumbo from "./jumbo/Jumbo"
import Frame from "./frame/Frame"

function Profile() {
    return (
        <div className="style">
            <Nav />
            <div >
                <Jumbo />
                <Frame />
            </div>

        </div>
    )

}



export default Profile;