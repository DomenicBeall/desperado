import React, { Component } from "react";
import Axios from 'axios';
import { AuthContext } from "../context/auth";


import GameRow from '../components/GameRow';

class User extends Component {

  constructor(props) {
    super(props);
    this.state = {
        games: []
    }
  }

  componentDidMount() {
    this.getGames();
  }

  getGames() {
    Axios({
      method: 'GET',
      url: 'http://localhost:3000/api/getAll/' + this.context.user._id
    }
    )
    .then((games) => {
      this.setState({ games: games.data });
    })
    .catch((error) => {
        console.log(error);
    });
  }

  render() {
    return (
        <div style={{ height: "84vh", width: "100%", color: "black"}}>
            <div style={{ padding: "2rem"}}>
                <h1 style={{ color: "white", margin: "0", textAlign: "center"}}>Games for {this.context.user.username}</h1>
                <div style={{ width: "50%", marginLeft: "auto", marginRight: "auto"}}>
                {
                    this.state.games.map(game => (
                      <GameRow game={{game}} ></GameRow>
                    ))
                }
                </div>
            </div>
        </div>
    )
  }
}

User.contextType = AuthContext;

export default User;
