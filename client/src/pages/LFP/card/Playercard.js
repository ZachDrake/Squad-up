import React from "react";
import "./playercard.css";



function Playercard(props) {

    return (




        <div className="col s3">
            <div className="card">
                <div className="card-img center-align">
                    <img className="circle responsive-img center-align" src="https://i.stack.imgur.com/34AD2.jpg" alt="test"></img>
                </div>
                <p className="card-title">{props.product.name}</p>
                <div className="card-content">
                    <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
                </div>

            </div>
        </div>






    )

}

export default Playercard;