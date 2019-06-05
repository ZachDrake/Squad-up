import React from "react";
import "./Modal.css";
import LoginForm from "../LoginForm";
import Axios from 'axios'; 

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
        let member = {
          email: this.state.email,
          password:this.state.password,
        }
        console.log (this.state);
        Axios.post('/members/login', member)
        .then(response => {
            console.log('done');
        })
        .catch(err => {
            console.log(err);
        })
        
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