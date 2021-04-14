import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth";

import logo from '../assets/img/logo-desperado-white.svg';
import HeaderButton from "./HeaderButton";

function Header() {
    
    const context = useContext(AuthContext);

    const onClickHandler = () => {
        context.logout();
    }

    return(
        <div className="header">
            <img className="header-logo" src={logo} alt="Desperado logo" />
            <div className="header-buttons">
                <HeaderButton to="" theme="hb-clear" onClick={onClickHandler}>Logout</HeaderButton>
                <HeaderButton to="/login" theme="hb-clear">Log In</HeaderButton>
                <HeaderButton to="/register" theme="hb-filled">Register</HeaderButton>
            </div>
        </div>
    );
}

export default Header;