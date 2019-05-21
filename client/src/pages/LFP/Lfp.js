import React from "react";
import "./lfp.css";
import data from "../../playercard"
import Playercard from "./card/Playercard"


function Lfp() {



    const content = data.map(product => <Playercard product={product} />)
    console.log(content)
    return (
        <div className="style">
            <div className="style">
                <h1 id="lfpTitle"> Looking for players?</h1>
                <div className="container">
                    <div className="row">
                        <div className="col s12">
                            {content}

                        </div>
                    </div>
                </div>
            </div>
        </div >
    )

}

export default Lfp;