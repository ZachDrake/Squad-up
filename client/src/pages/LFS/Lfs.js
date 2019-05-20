import React, { Component } from "react";
import Navbar from "../navbar/Navbar";
import "./lfs.css";
import Card from "../LFS/card/Card";
import data from "../../test"


class Lfs extends Component {

    render() {

        const content = data.map(product => <Card product={product} />)
        console.log(content)
        return (
            <div className="style">
                <Navbar />

                <h1 id="lfsTitle"> Looking for a Squad?</h1>
                {content}


            </div>


        )
    }
}





export default Lfs;