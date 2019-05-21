import React from "react";



function SignupForm(props) {
    return (

        <div id="modal2" className="modal modal-fixed-footer">
            <div className="modal-content signup">
                <h4>Sign Up</h4>
                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s6">
                                <input
                                    onChange={props.handleInputChange}
                                    value={props.username}
                                    name="username"
                                    type="text"
                                    className="form-control"
                                    placeholder="username"
                                    id="username"
                                />
                            </div>
                            <div className="input-field col s6">
                                <input
                                    onChange={props.handleInputChange}
                                    value={props.email}
                                    name="email"
                                    type="text"
                                    className="form-control"
                                    placeholder="email"
                                    id="email"
                                />
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col s12">
                                <input
                                    onChange={props.handleInputChange}
                                    value={props.password}
                                    name="password"
                                    type="password"
                                    className="form-control"
                                    placeholder="password"
                                    id="password"
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="modal-footer">
                <button onClick={props.handleFormSubmit} className="btn modal-close signupBtn">SignUp</button>

            </div>
        </div>
    )

}


export default SignupForm; 
