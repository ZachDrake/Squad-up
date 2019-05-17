import React, { Component } from "react";
// import sample from './../../images/sample1.jpg';
// import sample2 from './../../images/sample2.jpg';
// import sample3 from './../../images/sample3.jpg';
// import sample4 from './../../images/sample4.jpg';
import tempCarousel from './../../images/tempCarousel.jpeg'
import "./Home.css";

class Home extends Component {

    render() {
        return (
            
            <div className= "container-fluid">
            <div id ="homeHeader">
                <h1>Squad Up</h1>
            </div>
                <div className="tint">
                    <img alt = "gamergunk" src={tempCarousel} />
                </div>
            </div>


        )
    }
}





export default Home;