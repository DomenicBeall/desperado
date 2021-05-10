import { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import axios from 'axios';

import { AuthContext } from '../context/auth';

import SelectedGamePanel from './SelectedGamePanel';

export default class GameMap extends Component {

    constructor(props) {
        super(props);

        this.itemStyle = {};

        this.state = {
            games: [],
            currentGame: null
        }
    }

    static defaultProps = {
        center: {
          lat: -37.8136,
          lng: 144.9631
        },
        zoom: 14
    };

    componentDidMount() {
        this.setMarkers();
    }

    setMarkers() {
        axios({
            method: 'GET',
            url: 'http://localhost:3000/api/getChallenges/' + this.context.user._id
        }
        )
        .then((games) => {
            this.setState({ games: games.data });
        })
        .catch((error) => {
            console.log(error);
        });
    }

    setGame(game) {
        if (game !== this.state.currentGame) {
            this.setState({ currentGame: game });
        } else {
            this.setState({ currentGame: null });
        }
    }

    render () {
        return (
            <div style={{ height: "95%", width: "100%", display: "flex"}}>
                <SelectedGamePanel 
                    game={this.state.currentGame}
                /> 
                
                <div style={{ height: "100%", backgroundColor: "white", width: "100%"}}>
                    <GoogleMapReact
                        bootstrapURLKeys={{key: "AIzaSyALoz7rDY5iHKbGa9gWh_0EtaITjIXAQzc"}}
                        defaultCenter={GameMap.defaultProps.center}
                        defaultZoom={GameMap.defaultProps.zoom}
                    >
                        {
                            this.state.games.map(game => (
                                <div className="map-icon" key={ game.index } lat={game.location.lat} lng={game.location.lng} text="Game" onClick={() => {console.log(this.setGame(game))}}>
                                    <img src="./icon-pawn.svg" style={{ width: "50px", height: "50px", transform: "translate(-50%, -50%)"}} alt="Map marker" />
                                </div>
                            ))
                        }
                    </GoogleMapReact>
                </div>
            </div>
        )
    }
}

GameMap.contextType = AuthContext;
