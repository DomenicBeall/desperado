import React, { Component } from "react";
import Axios from 'axios';
import { AuthContext } from "../context/auth";
import { Link } from "react-router-dom";

// TODO: I'd prefer to change this to a functional component once I really feel I understand context

class Form extends Component {
  // Setting the component's initial state
  state = {
    location: "",
    time: ""
  };

  handleInputChange = event => {
    let value = event.target.value;
    const name = event.target.name;

    //TODO: Add check to ensure time is in future

    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    if (!this.state.location) {
      alert("Please add a location.");
    } else if (!this.state.time) {
      alert("Please ensure there is a date and time.");
    }

    // Send a request to the server to register the user
    Axios({
      method: 'POST',
      url: 'http://localhost:3000/api/createChallenge', 
      data: { 
        location: this.state.location,
        time: this.state.time, 
        challenger: this.context.user._id
      }
    }, {withCredentials: true})
    .then((response) => {
      // TODO: Probably need something here to display errors in the UI
      // TODO: Redirect the user to the created challenge page
    })
    .catch((error) => {
      console.error(error);
    });

    this.setState({
      location: "",
      time: ""
    });
  };

  render() {
    return (
      <div>
        <form className="form">
          <label htmlFor="location">Location</label>
          <input
            id="location"
            value={this.state.location}
            name="location"
            onChange={this.handleInputChange}
            type="text"
          />
          <label htmlFor="time">Date and Time</label>
          <input
            id="time"
            value={this.state.time}
            name="time"
            onChange={this.handleInputChange}
            type="datetime-local"
          />
          <button className="hb-filled" onClick={this.handleFormSubmit}>Create Challenge</button>
        </form>
      </div>
    ); 
  }
}

Form.contextType = AuthContext;

export default Form;
