import React, { Component } from "react";
import Axios from 'axios';
import { AuthContext } from "../context/auth";

import LocationSearchInput from '../components/LocationSearchInput';
import { Redirect } from "react-router";

// TODO: I'd prefer to change this to a functional component once I really feel I understand context

class Form extends Component {
  // Setting the component's initial state
  state = {
    location: undefined,
    time: "",
    redirect: false
  };

  handleLocationChange = (value) => {
    this.setState({ "location": value });
  }

  handleInputChange = event => {
    let value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    //TODO: Add check to ensure time is in future

    if (!this.state.location) {
      alert("Please add a location.");
    } else if (!this.state.time) {
      alert("Please ensure there is a date and time.");
    } else if (this.state.time < new Date()) {
      alert("The time must be in the future");
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
      this.setState({ redirect: true });
    })
    .catch((error) => {
      console.error(error);
    });

    this.setState({
      location: {},
      time: ""
    });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />
    }

    return (
      <div>
        <form className="form">
          <LocationSearchInput stateChanger={this.handleLocationChange} />
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
