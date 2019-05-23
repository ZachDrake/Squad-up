import React from "react";
import "./createsquad.css"




class Createsquad extends React.Component {
    state = {
    }

    handleInputChange = event => {
        const name = event.target.name;
        console.log(name)
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    }



    render(props) {
        return (
            <div className="container formContainer">
                <div className="createTitle">
                    <h1 className="center-align">Create a Squad</h1>
                    <div className="row">
                        <form onSubmit={this.handleFormSubmit} className="input-field col s12">
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
                                                <span>Overwatch</span>
                                            </label>
                                        </p>
                                        <p>
                                            <label>
                                                <input type="checkbox" />
                                                <span>Counter-Strike Global Offensive</span>
                                            </label>
                                        </p>
                                        <p>
                                            <label>
                                                <input type="checkbox" />
                                                <span>Dota 2</span>
                                            </label>
                                        </p>
                                        <p>
                                            <label>
                                                <input type="checkbox" />
                                                <span>League of Legends</span>
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
                                                <span>Pro</span>
                                            </label>
                                        </p>
                                        <p>
                                            <label>
                                                <input name="group1" type="radio" />
                                                <span>Semi-Pro</span>
                                            </label>
                                        </p>
                                        <p>
                                            <label>
                                                <input name="group1" type="radio" />
                                                <span>Casual</span>
                                            </label>
                                        </p>
                                        <p>
                                            <label>
                                                <input name="group1" type="radio" />
                                                <span>Plebs</span>
                                            </label>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="col s12">
                                <h5>Discord</h5>
                                https://discord.gg/
                                    <div class="input-field inline">
                                    <input
                                        id="discord"
                                        type="text"
                                    />
                                    <label for="discord">9WdNHaV</label>
                                    <span class="helper-text" data-error="wrong" data-success="right">Enter the last 7 characters in your permanent discord link</span>
                                </div>
                            </div>



                            <a className="grey darken-3 btn buttonz " href="/lfs" >Submit</a>

                        </form>
                    </div>
                </div>
            </div >
        )

    }
}

export default Createsquad;