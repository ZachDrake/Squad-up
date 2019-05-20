import React from "react";
import "./Modal.css"; 


class LoginModal extends React.Component {

    render() {
        return (

            <div id="modal1" className="modal modal-fixed-footer">
                <div className="modal-content">
                    <h4>Login To your Account</h4>
                    <p>Form goes here UWU</p>
                </div>
                <div className="modal-footer">
                    <a href="#!" className="modal-close btn">Login Beeitch</a>
                    
                </div>
            </div>
        )

    }
}

export default LoginModal; 