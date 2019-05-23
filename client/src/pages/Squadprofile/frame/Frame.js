import React from "react";
import "./frame.css"


function Frame(props) {
    console.log(props.info.members)
    
    return (
        <div className="container">
            <div className="row">
                <div className="col s2 content">
                    <div className="card cardMain">
                        <div className="circle responsive-img">
                            <img src="https://i.stack.imgur.com/34AD2.jpg " className="circle responsive-img" alt="test"></img>
                        </div>

                        <div className=" profile ">
                            <div className="profile-content center-align">
                                <h5>{props.info.name}</h5>
                            </div>
                        </div>


                    </div>
                </div>
                <div className="contianer feedContainer">
                    <div className="col s8  ">
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
                <div className="col s2 ">
                    <div className="card cardMain">
                        <div className="membersList ">

                            <div className="members-list center-align">
                                <p>Members</p>
                                <p>{props.info.members}</p>

                            </div>
                        </div>


                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col s2 content">
                    <div className="card games ">
                        <div className="gamesTitle center-align">
                            <p>Games played:</p>
                            <p>{props.info.games}</p>
                            <div className="row">
                                <div className="col s3">
                                    <p>{}</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col s2 right">
                    <div className="card cardMain">
                        <div className="discordList ">
                            <div className="discord-list center-align">
                                <p>Discord Information</p>
                                <p>{props.info.discord}</p>

                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )

}


export default Frame;