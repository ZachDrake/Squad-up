import React from "react";
import "./lfp.css";
import Playercard from "./card/Playercard"


function Lfp(props) {

    return (
        <div className="style">
            <div className="style">
                <h1 id="lfpTitle"> Looking for players?</h1>
                <div className="container">
                    <div className="row">
                        <div className="col s12">
                            {props.members.map(member => <Playercard member={member}/>)}

                        </div>
                    </div>
                </div>
            </div>
        </div >
    )

}

export default Lfp;