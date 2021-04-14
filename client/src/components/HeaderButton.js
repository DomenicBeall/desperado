import { Link } from 'react-router-dom';

function HeaderButton(props) {

    return (
        <Link to={props.to} className={"header-button " + props.theme} onClick={props.onClick}>{props.children}</Link>
    )

}

export default HeaderButton;