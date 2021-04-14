import logo from '../assets/img/logo-desperado-white.svg';
import HeaderButton from "./HeaderButton";

function Header() {
    return(
        <div className="header">
            <img className="header-logo" src={logo} alt="Desperado logo" />
            <div className="header-buttons">
                <HeaderButton to="/login" theme="hb-clear">Log In</HeaderButton>
                <HeaderButton to="/register" theme="hb-filled">Register</HeaderButton>
            </div>
        </div>
    );
}

export default Header;