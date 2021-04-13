import React, { Component } from "react";
import Axios from 'axios';
import { AuthContext } from "../context/auth";

// TODO: I'd prefer to change this to a functional component once I really feel I understand context

class Form extends Component {
  // Setting the component's initial state
  state = {
    email: "",
    password: ""
  };

  handleInputChange = event => {
    let value = event.target.value;
    const name = event.target.name;

    if (name === "password") {
      value = value.substring(0, 15);
    }

    //TODO: Add check to ensure email is valid

    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    if (!this.state.email) {
      alert("Please add an email address.");
    } else if (this.state.password.length < 6) {
      alert("Passwords must be at least 6 characters in length.");
    }

    // Send a request to the server to log in the user and then log the user in through context
    Axios({
      method: 'POST',
      url: 'http://localhost:3000/api/login', 
      data: { email: this.state.email, password: this.state.password }
    }, {withCredentials: true})
    .then((response) => {
      const userData = response.data;
      this.context.login(userData);
    })
    .catch((error) => {
      console.error(error);
    });

    this.setState({
      email: "",
      password: ""
    });
  };

  render() {
    return (
      <div>
        <form className="form">
          <input
            value={this.state.email}
            name="email"
            onChange={this.handleInputChange}
            type="text"
            placeholder="First Name"
          />
          <input
            value={this.state.password}
            name="password"
            onChange={this.handleInputChange}
            type="password"
            placeholder="Password"
          />
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

Form.contextType = AuthContext;

export default Form;
