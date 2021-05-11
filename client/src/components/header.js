import { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/img/logo-desperado-white.svg';
import { AuthContext } from '../context/auth';
import HeaderButton from "./HeaderButton";

function Header() {

    const { user, logout } = useContext(AuthContext);
    const pathname = useLocation().pathname;

    return(
        <div className="header">
            <Link to="/"><img className="header-logo" src={logo} alt="Desperado logo" /></Link>

            {!user ? 
                <div className="header-buttons">
                    <HeaderButton to="/login" theme="hb-clear">Log In</HeaderButton>
                    <HeaderButton to="/register" theme="hb-filled">Register</HeaderButton>
                </div>
            :
                <div className="header-buttons">
                    {
                        (pathname === "/") ?
                        <HeaderButton to="/user" theme="hb-filled">My Games</HeaderButton>
                        :
                        <HeaderButton to="/" theme="hb-filled">All Games</HeaderButton>
                    }
                    {
                        (pathname !== "/create") ?
                        <HeaderButton to="/create" theme="hb-clear">Create Game</HeaderButton>
                        :
                        <></>
                    }
                    <HeaderButton to="/" theme="hb-clear" onClick={logout}>Log Out of {user.username}</HeaderButton>
                </div>
            }

            
        </div>
    );
}

export default Header;