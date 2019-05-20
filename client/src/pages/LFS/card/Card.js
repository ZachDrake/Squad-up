import React from "react";
import "./card.css";
import csgo from "./image/csgo.png";
import dota2 from "./image/dota2.svg"
import league from "./image/league.jpg"
import overwatch from "./image/overwatch.png"


function Card(props) {

    return (
        <div className="container">
            <div className="col s12 m7">

                <div className="card horizontal">
                    <div className="card-stacked">
                        <a href="/profile"> <div className="card-content">
                            <p className="header"> {props.product.name} </p>
                            <div className="line" >
                                <span className="numOfMembers"> Number of Members:  {props.product.members.length} </span>
                                <span className="typeSquad"> Type of Gamers :  {props.product.type} </span>
                            </div>


                            <ul id="imgContainer">
                                <li><img src={csgo} alt="csgo"></img></li>
                                <li><img src={dota2} alt="dota2"></img></li>
                                <li><img src={league} alt="league"></img></li>
                                <li><img src={overwatch} alt="league"></img></li>

                            </ul>
                        </div> </a>

                    </div>

                </div>
            </div>
        </div>

    )
}



export default Card;