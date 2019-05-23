import React from "react";
import "./playercard.css";
import moment from "moment"


function Playercard(props) {

    let link = `/members/${props.member.name}`
    return (

        <div className="col s3">
            <a href={link}><div className="card">
                <div className="card-img center-align">
                    <img className="circle responsive-img center-align" src="https://i.stack.imgur.com/34AD2.jpg" alt="test"></img>
                </div>
                <p className="card-title">{props.member.name}</p>
                <div className="card-content">
                    <p>{moment(props.member.createdAt).format('LL')}</p>

                </div>
            </div></a>
        </div>

    )

}

export default Playercard;