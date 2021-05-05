import { useContext } from 'react';
import { AuthContext } from '../context/auth';

import GameMap from '../components/GameMap';

function Home(){

    const { user } = useContext(AuthContext);

    return(
        <div style={{ height: "90vh", width: "100%"}}>
            {
                user ? 
                    <GameMap />
                 : 
                    <h1 className="hook-title">A platform for finding over the board chess games in your area!</h1>
                
            }
        </div>
    );
}
export default Home;