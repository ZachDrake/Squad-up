import React from "react";
import "./frame.css"


function Frame(props) {
    return (
        <div className="container squadMainContent">
            <div className="row">

                <div className="col s12 m3  content left">
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
                    <div className="col s12 m6 center  ">
                        <div className="feedTitle">
                            <p>Feed</p>
                        </div>

                        <div className="card horizontal">
                            <div className="card-stacked">
                                <div className="card-content">
                                    <p>Coming soon...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col s12 m3  right">
                    <div className="card cardMain">
                        <div className="membersList ">

                            <div className="members-list center-align">
                                <h5>Members</h5>
                                {props.info.members.map(member => <p>{member.name}</p>)}
                            </div>
                        </div>


                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col s6 m3 content">
                    <div className="card games ">
                        <div className="gamesTitle center-align">
                            <h5>Games played:</h5>
                            <p>{props.info.games}</p>
                            <div className="row">
                                <div className="col s3">
                                    <p>{}</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col s6 m3 right">
                    <div className="card cardMain">
                        <div className="discordList ">
                            <div className="discord-list center-align">
                                <h5>Discord Information</h5>
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