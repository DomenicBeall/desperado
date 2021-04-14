import React, {useReducer, createContext} from 'react';
import jwtDecode from 'jwt-decode';

const initialState = {
    user: null
};

if (localStorage.getItem('JWT')) {
    const decodedToken = jwtDecode(localStorage.getItem('JWT'));
  
    if (decodedToken.exp * 1000 < Date.now()) {
      localStorage.removeItem('JWT');
    } else {
      initialState.user = decodedToken.user;
    }
}

const AuthContext = createContext({
    user: null,
    login: (token) => {},
    logout: () => {}
});

function authReducer(state, action) {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                user: action.payload
            };
        case 'LOGOUT':
            return {
                ...state,
                user: null
            };
        default:
            return state;
    }
}

function AuthProvider(props) {
    const [ state, dispatch ] = useReducer(authReducer, initialState);

    function login(token) {
        localStorage.setItem('JWT', token);
        const userData = jwtDecode(localStorage.getItem('JWT')).user;

        dispatch({
            type: 'LOGIN',
            payload: userData
        });
    }

    function logout() {
        console.log("Logging out");

        localStorage.removeItem('JWT');
        dispatch({ type: 'LOGOUT' });
    }

    return (
        <AuthContext.Provider
            value={{ user: state.user, login, logout }}
            {...props}
        />
    )
}

export {AuthContext, AuthProvider};

