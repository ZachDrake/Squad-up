import React from "react";
import "./createsquad.css"




class Createsquad extends React.Component {
    state = {
    }
    /* 
    Create form with keys of 
        Name of Squad
        Squad icon
        Games the Squad plays
        What type of Squad (try hard or other)
    
    
    */

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
                                        id="username"
                                    />
                                </div>

                                <div className="input-field col s6">
                                    <h5>Squad icon</h5>
                                    <input
                                        name="squadname"
                                        type="text"
                                        className="form-control"
                                        id="username"
                                    />
                                </div>
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
                                                <input type="checkbox" />
                                                <span>Pro</span>
                                            </label>
                                        </p>
                                        <p>
                                            <label>
                                                <input type="checkbox" />
                                                <span>Semi-Pro</span>
                                            </label>
                                        </p>
                                        <p>
                                            <label>
                                                <input type="checkbox" />
                                                <span>Casual</span>
                                            </label>
                                        </p>
                                        <p>
                                            <label>
                                                <input type="checkbox" />
                                                <span>Plebs</span>
                                            </label>
                                        </p>
                                    </div>
                                </div>


                                <a class="waves-effect waves-light btn buttonz">Submit</a>


                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )

    }
}

export default Createsquad;