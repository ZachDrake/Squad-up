import React from "react";
import "./createsquad.css"
// import Axios from "axios";



class Createsquad extends React.Component {
    state = {
        squadname: "",
        logo: "",
        description: "",
        squadType: "",
        discord: "",
        games: ""
    }

    handleInputChange = event => {
        const name = event.target.name;
        console.log(name)
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    }

    handleFormSubmit = event => {
        event.preventDefault();
        console.log("hit");
        let newSquad = {
            name: this.state.squadname,
            logo: this.state.logo,
            description: this.state.description,
            squadType: this.state.squadType,
            discord: this.state.discord,
            games: this.state.games
        }
        console.log(newSquad);
    }




    render(props) {
        return (
            <div className="container formContainer">
                <div className="createTitle">
                    <h1 className="center-align">Create a Squad</h1>
                    <div className="row">
                        
                            <div className="row">
                                <div className="input-field col s6">
                                    <h5>Name of Squad</h5>
                                    <input
                                        name="squadname"
                                        type="text"
                                        className="form-control"
                                        id="squadname"
                                    />
                                </div>

                                <div className="input-field col s6">
                                    <h5>Squad icon</h5>
                                    <input
                                        name="squadname"
                                        type="file"
                                        className="form-control"
                                        id="squadImg"
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s6 gamesSelector">
                                    <h5>Games Played</h5>
                                    <div className="createChoices">
                                        <p>
                                            <label>
                                                <input type="checkbox" />
                                                <span value="OverWatch">Overwatch</span>
                                            </label>
                                        </p>
                                        <p>
                                            <label>
                                                <input type="checkbox" />
                                               
                                                <span value="Counter-Strike Global Offensive">Counter-Strike Global Offensive</span>
                                            </label>
                                        </p>
                                        <p>
                                            <label>
                                                <input type="checkbox" />
                                                <span value="Dota 2">Dota 2</span>
                                            </label>
                                        </p>
                                        <p>
                                            <label>
                                                <input type="checkbox" />
                                                <span value="League of Legends">League of Legends</span>
                                            </label>
                                        </p>
                                    </div>
                                </div>
                                <div className="input-field col s6 typeOfGamers">
                                    <h5>Type of Gamers</h5>
                                    <div className="createChoices">
                                        <p>
                                            <label>
                                                <input name="group1" type="radio" />
                                                <span value="Pro">Pro</span>
                                            </label>
                                        </p>
                                        <p>
                                            <label>
                                                <input name="group1" type="radio" />
                                                <span value="Semi-Pro">Semi-Pro</span>
                                            </label>
                                        </p>
                                        <p>
                                            <label>
                                                <input name="group1" type="radio" />
                                                <span value="Casual">Casual</span>
                                            </label>
                                        </p>
                                        <p>
                                            <label>
                                                <input name="group1" type="radio" />
                                                <span value="Plebs">Plebs</span>
                                            </label>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col s12">
                                <h5>Discord</h5>
                                https://discord.gg/
                                    <div className="input-field inline">
                                    
                                    <input
                                        placeholder="discord"
                                        name="discord"
                                        id="discord"
                                        type="text"
                                    />
                                    <span className="helper-text" data-error="wrong" data-success="right">Enter the last 7 characters in your permanent discord link</span>
                                </div>
                            </div>



                            <a className="grey darken-3 btn buttonz " href="#" >Submit</a>

                        
                    </div>
                </div>
            </div >
        )

    }
}

export default Createsquad;