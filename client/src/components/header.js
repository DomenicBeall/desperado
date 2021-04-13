import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth";

function Header() {
    
    const context = useContext(AuthContext);

    const onClickHandler = () => {
        context.logout();
    }

    return(
        <div>
            <Link to="/">Home</Link>

            {
                context.user ?
                <p onClick={onClickHandler}>Logout</p>
                :
                <Link to="/login">Login</Link>
            }
        </div>
    );
}

export default Header;