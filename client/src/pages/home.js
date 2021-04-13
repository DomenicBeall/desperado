import { useContext } from "react";
import { AuthContext } from "../context/auth";

function Home(){
    const { user } = useContext(AuthContext);

    return(
        <div>
            <h1>Welcome to the home page!</h1>
            {user ? 
                <h1>Hi there, {user.username}</h1> 
                :
                <h1>You're not logged in</h1>
            }
        </div>
    );
}

export default Home;