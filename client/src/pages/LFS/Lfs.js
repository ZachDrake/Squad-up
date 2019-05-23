import React from "react";
import "./lfs.css";
import Card from "../LFS/card/Card";


function Lfs(props) {

        console.log(props);
        return (
            <div className="style">

                <h1 id="lfsTitle"> Looking for a Squad?</h1>
                
                {props.squads.map(squad => <Card key={squad._id} squad={squad} />)}
            </div>


            <h1 id="lfsTitle"> Looking for a Squad?</h1>
            {props.squads.map(squad => <Card key={squad._id} squad={squad} />)}
        </div>


    )
}





export default Lfs;