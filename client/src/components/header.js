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
            <Link to="/login">Login</Link>
            <p onClick={onClickHandler}>Logout</p>
        </div>
    );
}

export default Header;