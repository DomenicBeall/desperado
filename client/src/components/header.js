import { useContext } from 'react';
import logo from '../assets/img/logo-desperado-white.svg';
import { AuthContext } from '../context/auth';
import HeaderButton from "./HeaderButton";

function Header() {

    const { user, logout } = useContext(AuthContext);

    return(
        <div className="header">
            <img className="header-logo" src={logo} alt="Desperado logo" />

            {!user ? 
                <div className="header-buttons">
                    <HeaderButton to="/login" theme="hb-clear">Log In</HeaderButton>
                    <HeaderButton to="/register" theme="hb-filled">Register</HeaderButton>
                </div>
            :
                <div className="header-buttons">
                    <HeaderButton to="/" theme="hb-clear" onClick={logout}>Log Out</HeaderButton>
                </div>
            }

            
        </div>
    );
}

export default Header;