import React, { Component } from "react";
// import sample from './../../images/sample1.jpg';
// import sample2 from './../../images/sample2.jpg';
// import sample3 from './../../images/sample3.jpg';
// import sample4 from './../../images/sample4.jpg';
import tempCarousel from './../../images/testbackground.jpg'
import "./Home.css";

class Home extends Component {

    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div id="homeHeader">
                        <h1>Squad Up</h1>
                    </div>
                    <div className="tint">
                        <img alt="gamergunk" src={tempCarousel} />
                    </div>

                </div>

                <div className="mainContainerContent">
                    <div className="card mainCardContent ">
                        <div className="card-img center-align ">
                            <img className="responsive-img" src="https://img.icons8.com/cotton/64/000000/laptop.png" alt=""></img>
                        </div>
                        <div className="card-content">
                            <span className="card-title">Join with friends</span>
                            <p className="center-align">Get your squad or find a squad to enjoy your favorite games</p>
                        </div>
                    </div>

                    <div className="card mainCardContent">
                        <div className="card-img center-align ">
                            <img className="responsive-img" src="https://img.icons8.com/dusk/64/000000/user-credentials.png" alt=""></img>
                        </div>
                        <div className="card-content">
                            <span className="card-title">Private Profiles</span>
                            <p className="center-align">Share personal experiences by adding content to your page feed.</p>
                        </div>
                    </div>


                    <div className="card mainCardContent">
                        <div className="card-img center-align ">
                            <img className="responsive-img" src="https://img.icons8.com/color/48/000000/approve-and-update.png" alt=""></img>
                        </div>
                        <div className="card-content">
                            <span className="card-title">Continueous updates</span>
                            <p className="center-align">Constant updates help ensure the best user experience</p>
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}





export default Home;