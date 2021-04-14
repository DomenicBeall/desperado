import { useContext } from "react";
import { AuthContext } from "../context/auth";

function Home(){
    const { user } = useContext(AuthContext);

    return(
        <div>
            <h1 className="hook-title">A platform for finding over the board chess games in your area!</h1>
        </div>
    );
}

export default Home;