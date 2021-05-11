import Axios from "axios";
import { useState, useContext } from "react";
import { Redirect } from 'react-router-dom';

import { AuthContext } from '../context/auth';


export default function SelectedGamePanel(props) {

    const [buttonContent, setButtonContent] = useState("Accept challenge!");
    const { user } = useContext(AuthContext);
    const [ redirect, setRedirect ] = useState(null);

    function acceptChallenge(id) {
        setButtonContent(() => {return(<div className="loader"></div>)});

        Axios({
            method: 'POST',
            url: `http://localhost:3000/api/acceptChallenge/${id}`, 
            data: { 
              responder: user._id
            }
          }, {withCredentials: true})
          .then((response) => {
            setButtonContent("Challenge accepted!");
            setRedirect("/user"); // Redirect to user account or game screen
          })
          .catch((error) => {
            console.error(error);
          });
    }

    return(
        redirect ? (
            <Redirect to={redirect} ></Redirect>
        )
        :
        (
            <div className={ props.game ? "game-panel selected-game-panel-open" : "game-panel selected-game-panel" }>
            {
                props.game ?
                    <div>
                    <h1 style={{ color: "black" }}>
                        {
                            props.game ? 
                            (props.game.challenger.username === user.username) ?
                                "You"
                                :
                                props.game.challenger.username
                            : 
                            ""
                        }
                    </h1>
                    <h3 style={{ color: "black" }}>{props.game ? props.game.location.address : ""}</h3>
                    <h3 style={{ color: "black" }}>{props.game ? new Date(props.game.time).toLocaleString() : ""}</h3>
                    </div>
                :
                    <></>
            }
            {
                props.game ?
                    <div>
                    {
                        (props.game.challenger.username === user.username) ?
                        <></>
                        :
                        <div className="btn-solid" onClick={() => { acceptChallenge(props.game._id); }}>{buttonContent}</div>
                    }
                    </div>
                :
                    <></>
            }
        </div>
        )
    )

}