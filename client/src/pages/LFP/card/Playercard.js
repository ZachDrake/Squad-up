import React from "react";
import "./playercard.css";



function Playercard(props) {

    return (

        <div className="col s3 ">
            <div className="card playerCard">
                <div className="card-img center-align">
                    <img className="circle responsive-img center-align" src="https://i.stack.imgur.com/34AD2.jpg" alt="test"></img>
                </div>
                <p className="card-title">{props.product.name}</p>
                <div className="card-content center-align">
                    <p> Joined: {props.product.joined} </p>
                    <p> {props.product.aboutMe}</p>
                </div>

            </div>
        </div>

    )

}

export default Playercard;