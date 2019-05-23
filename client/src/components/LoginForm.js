import React from "react";



function LoginForm(props) {
    return (

        <div id="modal1" className="modal modal-fixed-footer">
            <div className="modal-content login">
                <h4>Login</h4>
                <div className="row">
                   
                        <div className="row">
                            <div className="input-field col s6">
                                <input
                                    onChange={props.handleInputChange}
                                    value={props.email}
                                    name="email"
                                    type="text"
                                    autoComplete="username"
                                    className="form-control"
                                    placeholder="email"

                                    

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
                                    autoComplete="current-password"

                                />
                            </div>
                        </div>
                    
                </div>
            </div>
            <div className="modal-footer">
                <button onClick={props.handleFormSubmit} className="btn modal-close LoginBtn">Login</button>

            </div>
        </div>
    )

}


export default LoginForm; 
