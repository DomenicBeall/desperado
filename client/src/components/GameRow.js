function GameRow(props) {
    return(
        <div className="game-row">
            <h2 style={{ color: "black", width: "10%"}}>{ props.game.game.challenger.username }</h2>
            <div>
                <p style={{fontSize: "1.5rem", color: "black", textAlign: "center" }}>{ new Date(props.game.game.time).toDateString()}</p>
                <p style={{fontSize: "1.5rem", color: "black", textAlign: "center" }}>{ props.game.game.location.address }</p>
            </div>
            <h2 style={{ color: "black", width: "10%"}}>{ props.game.game.responder ? props.game.game.responder.username : "Pending..." }</h2>
        </div>
    );
}

export default GameRow;
