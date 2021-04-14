import LoginForm from '../components/LoginForm';

function Login(){
    return(
        <div className="container">
            <div className="center-align-children">
                <h1>Log In</h1>
                <LoginForm/>
            </div>
        </div>
    );
}

export default Login;