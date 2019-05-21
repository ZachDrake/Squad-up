import React from "react";
import "./Modal.css";
import LoginForm from "../LoginForm";


class LoginModal extends React.Component {

    state ={
        email: "", 
        password: ""
    }


    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
          [name]: value
        });
      };

      handleFormSubmit = event => {
        event.preventDefault();
        console.log (this.state);
        
      };

    render() {

        return (

           
                <div>
                    <LoginForm
                        email={this.state.email}
                        password={this.state.password}
                        handleFormSubmit={this.handleFormSubmit}
                        handleInputChange={this.handleInputChange}
                    />
                </div>
        )

    }
}

export default LoginModal; 