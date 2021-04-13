import React, {useReducer, createContext} from 'react';

const initialState = {
    user: { username: "steve" }
};

// TODO: If the token is in the cookies, decode it, check if it's still valid and set the user in the initialstate

const AuthContext = createContext({
    user: null,
    login: (userData) => {},
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

    function login(userData) {
        dispatch({
            type: 'LOGIN',
            payload: userData
        });
    }

    function logout() {
        // TODO: Remove the token from cookies
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

