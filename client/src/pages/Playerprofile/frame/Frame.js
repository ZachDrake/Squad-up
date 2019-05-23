import React from "react";
import "./frame.css"


function Frame(props) {


    return (
        <div className="container">
            <div className="row">
                <div className="contianer feedContainer">
                    <div className="col s12 m9 right ">
                        <div className="feedTitle">
                            <p>Feed</p>
                        </div>

                        <div className="card horizontal">
                            <div className="card-stacked">
                                <div className="card-content">
                                    <p>I am a very simple card. I am good at containing small bits of information.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col s12 m3 content">
                    <div className="card cardMain">
                        <div className="circle responsive-img">
                            <img src="https://i.stack.imgur.com/34AD2.jpg " className="circle responsive-img" alt="test"></img>
                        </div>

                        <div className=" profile ">
                            <div className="profile-content center-align">
                                <p>{props.info.name}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col s12 m3  gamesPlay">
                    <div className="card games ">
                        <div className="gamesTitle center-align">
                            <p>Games played:</p>
                            <p>{props.info.games}</p>
                            <div className="row">
                                <div className="col s3">
                                    <p>Stuff</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>

    )

}


export default Frame;