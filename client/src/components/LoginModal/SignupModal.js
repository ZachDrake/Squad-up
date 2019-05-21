import React from "react";
import "./Modal.css";
import Form from "../SignupForm"; 


class Signup extends React.Component {
    state ={
        username: "",
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
                <Form 
                username = {this.state.username}
                email = {this.state.email}
                password = {this.state.password}
                handleFormSubmit = {this.handleFormSubmit}
                handleInputChange = {this.handleInputChange}                 
                />
            </div>

        )

    }
}

export default Signup; 
