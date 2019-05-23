import React from "react";
import "./frame.css"
import moment from "moment";


function Frame(props) {
    console.log(props.info.squads)
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
                                    <p>Coming soon...</p>
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
                                <h5>{props.info.name}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col s12 m3  gamesPlay">
                    <div className="card games ">
                        <div className="gamesTitle center-align">
                            <h5>Date joined:</h5>
                            <p>{moment(props.info.createdAt).format('LL')}</p>
                            <h5>Squads:</h5>
                            {props.info.squads.map(squad => <p>{squad.name}</p>)}
                            <div className="row">
                                <div className="col s3">
                                
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