import CreateGameForm from '../components/CreateGameForm';

function CreateGame(){
    return(
        <div className="container">
            <div className="center-align-children">
                <h1>Create a new challenge</h1>
                <CreateGameForm/>
            </div>
        </div>
    );
}

export default CreateGame;