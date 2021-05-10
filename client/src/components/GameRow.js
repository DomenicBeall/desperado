function GameRow(props) {
    return(
        <div className="game-row">
            <h2 style={{ color: "black" }}>{ props.game.game.challenger.username }</h2>
            <div>
                <p style={{fontSize: "2rem", fontWeight: "1000", color: "black", textAlign: "center" }}>Vs</p>
                <p style={{fontSize: "1.5rem", color: "black", textAlign: "center" }}>{ new Date(props.game.game.time).toDateString()}</p>
            </div>
            <h2 style={{ color: "black" }}>{ props.game.game.responder.username }</h2>
        </div>
    );
}

export default GameRow;
