import React from "react";
import "./createsquad.css"
import Axios from "axios";



class Createsquad extends React.Component {
    state = {
        squadname: "",
        logo: "",
        description: "",
        squadType: "",
        discord: "",
        games: []
    }

    handleInputChange = event => {
        const target = event.target;
        let arrayCopy = this.state.games;
        let value = target.value;
        const name = target.name;

        if (target.type === 'checkbox') {
            if (arrayCopy.indexOf(target.value) === -1)
                arrayCopy.push(target.value)
            this.setState({
                array: arrayCopy
            })
        } else {
            this.setState({
                [name]: value
            })

        }

        // const value = target.type === 'checkbox' ? target.value : target.value;
    }

    handleFormSubmit = event => {
        event.preventDefault();
        let newSquad = {
            name: this.state.squadname,
            logo: this.state.logo,
            description: this.state.description,
            squadType: this.state.squadType,
            discord: this.state.discord,
            games: this.state.games
        }

        Axios.post('/squads/create', newSquad)
        .then(response => {
            console.log(response)
        })
        .catch(err => {
            console.log(err)
        })
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
                                    onChange={this.handleInputChange}
                                />
                            </div>

                            <div className="input-field col s6">
                                <h5>Squad icon</h5>
                                <input
                                    name="logo"
                                    type="file"
                                    className="form-control"
                                    id="squadImg"
                                    onChange={this.handleInputChange}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6 gamesSelector">
                                <h5>Games Played</h5>
                                <div className="createChoices">
                                    <p>
                                        <label>
                                            <input
                                                type="checkbox"
                                                name="games"
                                                value="Overwatch"
                                                onChange={this.handleInputChange}
                                            />
                                            <span value="OverWatch">Overwatch</span>
                                        </label>
                                    </p>
                                    <p>
                                        <label>
                                            <input
                                                type="checkbox"
                                                name="games"
                                                value="CSGO"
                                                onChange={this.handleInputChange}
                                            />
                                            <span value="Counter-Strike Global Offensive">Counter-Strike Global Offensive</span>
                                        </label>
                                    </p>
                                    <p>
                                        <label>
                                            <input
                                                type="checkbox"
                                                name="games"
                                                value="Dota 2"
                                                onChange={this.handleInputChange}
                                            />
                                            <span value="Dota 2">Dota 2</span>
                                        </label>
                                    </p>
                                    <p>
                                        <label>
                                            <input
                                                type="checkbox"
                                                name="games"
                                                value="League of Legends"
                                                onChange={this.handleInputChange}
                                            />
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
                                            <input
                                                name="squadType"
                                                type="radio"
                                                value="Pro"
                                                onChange={this.handleInputChange}
                                            />
                                            <span value="Pro">Pro</span>
                                        </label>
                                    </p>
                                    <p>
                                        <label>
                                            <input
                                                name="squadType"
                                                type="radio"
                                                value="Semi-Pro"
                                                onChange={this.handleInputChange} />
                                            <span value="Semi-Pro">Semi-Pro</span>
                                        </label>
                                    </p>
                                    <p>
                                        <label>
                                            <input
                                                name="squadType"
                                                type="radio"
                                                value="casual"
                                                onChange={this.handleInputChange} />
                                            <span value="Casual">Casual</span>
                                        </label>
                                    </p>
                                    <p>
                                        <label>
                                            <input
                                                name="squadType"
                                                type="radio"
                                                value="Plebs"
                                                onChange={this.handleInputChange} />
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
                                    onChange={this.handleInputChange}
                                    handleFormSubmit={this.handleFormSubmit}
                                />
                                <span className="helper-text" data-error="wrong" data-success="right">Enter the last 7 characters in your permanent discord link</span>
                            </div>
                        </div>



                        <button onClick={this.handleFormSubmit} className="btn squadBtn">Create Squad</button>


                    </div>
                </div>
            </div >
        )

    }
}

export default Createsquad;