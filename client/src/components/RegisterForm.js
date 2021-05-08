import React, { Component } from "react";
import Axios from 'axios';
import { AuthContext } from "../context/auth";

// TODO: I'd prefer to change this to a functional component once I really feel I understand context

class Form extends Component {
  // Setting the component's initial state
  state = {
    email: "",
    password: "",
    username: "",
    confirmPassword: ""
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

    // Send a request to the server to register the user
    Axios({
      method: 'POST',
      url: 'http://localhost:3000/api/register', 
      data: { 
        email: this.state.email,
        username: this.state.username, 
        password: this.state.password,
        confirmPassword: this.state.confirmPassword
      }
    }, {withCredentials: true})
    .then((response) => {
      // TODO: Probably need something here to display errors in the UI
      const token = response.data;
      this.context.login(token);
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
          <label htmlFor="username">Username</label>
          <input
            id="username"
            value={this.state.username}
            name="username"
            onChange={this.handleInputChange}
            type="text"
          />
          <label htmlFor="email">Email</label>
          <input
            id="email"
            value={this.state.email}
            name="email"
            onChange={this.handleInputChange}
            type="text"
          />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            value={this.state.password}
            name="password"
            onChange={this.handleInputChange}
            type="password"
          />
          <label htmlFor="password">Confirm password</label>
          <input
            id="confirmPassword"
            value={this.state.confirmPassword}
            name="confirmPassword"
            onChange={this.handleInputChange}
            type="password"
          />
          <button className="hb-filled" onClick={this.handleFormSubmit}>Sign In</button>
        </form>
      </div>
    ); 
  }
}

Form.contextType = AuthContext;

export default Form;
