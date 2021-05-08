import React, { Component } from "react";
import Axios from 'axios';
import { AuthContext } from "../context/auth";

class User extends Component {
  

  render() {
    return (
        <div style={{ height: "84vh", width: "100%", backgroundColor: "white", color: "black" }}>
            <div style={{ padding: "2rem" }}>
                <h1 style={{ color: "black", margin: "0" }}>{this.context.user.username}</h1>
            </div>
        </div>
    )
  }
}

User.contextType = AuthContext;

export default User;
