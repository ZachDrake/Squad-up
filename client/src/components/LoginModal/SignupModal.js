import React from "react";
import "./Modal.css";


class Signup extends React.Component {

    render() {
        return (

            <div id="modal2" className="modal modal-fixed-footer">
                <div className="modal-content signup">
                    <h4>Sign Up</h4>
                    <div className="row">
                        <form className="col s12">
                            <div className="row">
                                <div className="input-field col s6">
                                    <input placeholder="name" id="Name" style={{ color: "white" }}></input>
                                </div>
                                <div className="input-field col s6">
                                    <input placeholder="email" id="email" style={{ color: "white" }}></input>
                                </div>
                            </div>
                            <div class="row">
                                <div class="input-field col s12">
                                    <input id="password" type="password" class="validate" style={{ color: "white" }}></input>
                                    <label for="password">Password</label>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="modal-footer">
                    <a href="#!" className="modal-close btn">Login Beeitch</a>

                </div>
            </div>
        )

    }
}

export default Signup; 