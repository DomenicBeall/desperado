import { useContext } from 'react';
import { AuthContext } from '../context/auth';

function Home(){

    const { user } = useContext(AuthContext);

    return(
        <div style={{ height: "90%", backgroundColor: "red", width: "100%"}}>
            
        </div>
    );
}
export default Home;